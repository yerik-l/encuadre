import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAvailablePurchases as fetchAvailablePurchases, useIAP } from 'react-native-iap';

/**
 * ID de producto del desbloqueo Pro — compra única (no consumible), no
 * suscripción. Tiene que coincidir exactamente con el Product ID creado en
 * App Store Connect / Play Console.
 */
export const PRO_PRODUCT_ID = 'com.encuadre.app.pro';

const PRO_CACHE_KEY = 'encuadre.isProCached';

export type RestoreResult = 'restored' | 'not_found' | 'error';

interface ProContextValue {
  /** true si el usuario ya compró Pro (confirmado por la tienda, no solo el caché local). */
  isPro: boolean;
  /** true mientras se resuelve la primera consulta a la tienda — evita parpadear "bloqueado" antes de saber. */
  loading: boolean;
  /** Precio ya formateado por la tienda (ej. "$4.99"), o null si todavía no llegó. */
  priceLabel: string | null;
  purchasing: boolean;
  restoring: boolean;
  purchasePro: () => Promise<void>;
  restore: () => Promise<RestoreResult>;
}

const ProContext = createContext<ProContextValue | null>(null);

export function ProProvider({ children }: { children: React.ReactNode }) {
  // Caché local solo para no mostrar "bloqueado" en el primer frame si ya
  // sabíamos (de una sesión anterior) que el usuario tiene Pro — la fuente
  // de verdad real sigue siendo availablePurchases, nunca este caché solo.
  const [cachedPro, setCachedPro] = useState<boolean | null>(null);
  const [purchasing, setPurchasing] = useState(false);
  const [restoring, setRestoring] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(PRO_CACHE_KEY).then((value) => setCachedPro(value === 'true'));
  }, []);

  const {
    connected,
    products,
    availablePurchases,
    fetchProducts,
    getAvailablePurchases,
    requestPurchase,
    finishTransaction,
  } = useIAP({
    onPurchaseSuccess: async (purchase) => {
      if (purchase.productId !== PRO_PRODUCT_ID) return;
      try {
        await finishTransaction({ purchase, isConsumable: false });
      } finally {
        setPurchasing(false);
        AsyncStorage.setItem(PRO_CACHE_KEY, 'true').catch(() => {});
      }
    },
    onPurchaseError: () => {
      setPurchasing(false);
    },
  });

  useEffect(() => {
    if (!connected) return;
    fetchProducts({ skus: [PRO_PRODUCT_ID], type: 'in-app' }).catch(() => {});
    getAvailablePurchases().catch(() => {});
  }, [connected, fetchProducts, getAvailablePurchases]);

  const storeIsPro = availablePurchases.some((p) => p.productId === PRO_PRODUCT_ID);

  useEffect(() => {
    if (storeIsPro) {
      AsyncStorage.setItem(PRO_CACHE_KEY, 'true').catch(() => {});
    }
  }, [storeIsPro]);

  const proProduct = products.find((p) => p.id === PRO_PRODUCT_ID);

  const purchasePro = useCallback(async () => {
    setPurchasing(true);
    try {
      await requestPurchase({
        request: {
          apple: { sku: PRO_PRODUCT_ID },
          google: { skus: [PRO_PRODUCT_ID] },
        },
        type: 'in-app',
      });
    } catch {
      setPurchasing(false);
    }
  }, [requestPurchase]);

  const restore = useCallback(async (): Promise<RestoreResult> => {
    setRestoring(true);
    try {
      // Dos llamadas a propósito: la versión standalone (no la del hook)
      // devuelve el array directo en su Promise, así que `found` refleja el
      // resultado real de ESTA restauración — sin esto, leer
      // `availablePurchases` del hook justo después daría el valor de un
      // render atrás (el hook todavía no re-renderizó con el nuevo estado),
      // y el mensaje al usuario podía decir "no encontramos ninguna compra"
      // en el mismo restore que sí la encontró. La llamada al hook
      // (getAvailablePurchases) sigue siendo necesaria aparte para que
      // `isPro`/`storeIsPro` — leídos en otras partes de la UI — también se
      // actualicen.
      const [fresh] = await Promise.all([fetchAvailablePurchases(), getAvailablePurchases()]);
      const found = fresh.some((p) => p.productId === PRO_PRODUCT_ID);
      return found ? 'restored' : 'not_found';
    } catch {
      return 'error';
    } finally {
      setRestoring(false);
    }
  }, [getAvailablePurchases]);

  const value = useMemo<ProContextValue>(
    () => ({
      isPro: storeIsPro || cachedPro === true,
      loading: cachedPro === null && !connected,
      priceLabel: proProduct?.displayPrice ?? null,
      purchasing,
      restoring,
      purchasePro,
      restore,
    }),
    [storeIsPro, cachedPro, connected, proProduct, purchasing, restoring, purchasePro, restore]
  );

  return <ProContext.Provider value={value}>{children}</ProContext.Provider>;
}

export function usePro(): ProContextValue {
  const ctx = useContext(ProContext);
  if (!ctx) throw new Error('usePro() debe usarse dentro de <ProProvider>');
  return ctx;
}
