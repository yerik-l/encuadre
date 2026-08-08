# Publicar Encuadre — App Store y Play Store

Todo lo que se puede preparar sin depender de una cuenta de desarrollador está
listo en este documento. Lo que sí depende de una cuenta (inscripción, pago,
credenciales) se marca explícitamente como pendiente tuyo.

## Estado de las cuentas de desarrollador

- **Apple Developer Program**: no inscrito todavía. Es el bloqueante para todo
  lo de iOS — sin esto no hay build firmado, ni App Store Connect, ni
  TestFlight. Inscripción: https://developer.apple.com/programs/enroll/
  ($99 USD/año).
- **Google Play Console**: no confirmado en esta conversación si ya existe.
  Si no, la inscripción es un pago único de $25 USD en
  https://play.google.com/console/signup.

## Ficha de la tienda (copy)

Mismos límites de caracteres que exige cada tienda — no los superes o la
tienda los recorta o rechaza el envío.

### App Store (iOS)

| Campo | Límite | Español | English |
|---|---|---|---|
| Nombre | 30 car. | Encuadre: aprende tu cámara | Encuadre: Learn Your Camera |
| Subtítulo | 30 car. | Aprende ISO, apertura y más | Live camera settings tutor |
| Palabras clave | 100 car. (separadas por coma, sin espacios) | `fotografia,camara,iso,apertura,triangulo exposicion,dslr,mirrorless,aprender fotografia,manual` | `photography,camera,iso,aperture,exposure triangle,dslr,mirrorless,learn photography,manual mode` |
| Texto promocional | 170 car. | Compañero de fotografía 100% en tu teléfono: apunta a la escena, elige una técnica y aprende en vivo cómo se relacionan ISO, apertura y velocidad. Sin nube, sin cuentas. | A 100% on-device photography companion: point at your scene, pick a technique, and learn how ISO, aperture, and shutter speed relate — live. No cloud, no accounts. |

### Google Play (Android)

| Campo | Límite | Español | English |
|---|---|---|---|
| Nombre | 30 car. | Encuadre: aprende tu cámara | Encuadre: Learn Your Camera |
| Descripción corta | 80 car. | Compañero para aprender ISO, apertura y velocidad con tu cámara real, en vivo. | Your companion to learn ISO, aperture, and shutter speed with your real camera. |

### Descripción completa (ambas tiendas, hasta 4000 car.) — español

```
Encuadre es el compañero de quien acaba de comprar su primera cámara real
(DSLR o mirrorless) y todavía no sabe qué hacen el ISO, la apertura y la
velocidad de obturación más allá de "modo automático".

El teléfono no dispara ni reemplaza a la cámara. Apuntas al mismo lugar que
vas a fotografiar, eliges una técnica, y Encuadre te explica en vivo cómo se
relacionan esos tres parámetros para esa luz y ese objetivo — para que
decidas tú, no la app.

QUÉ INCLUYE

• 7 modos de escena (retrato en exteriores, paisaje/hora dorada, barrido,
  retrato de acción, retrato nocturno, retrato en estudio/interiores,
  enfoque), cada uno con guía calibrada a su propia luz y su propio
  movimiento.
• Triángulo de exposición interactivo: mueve ISO, apertura u obturación con
  el dedo y siente en tiempo real cómo se compensan entre sí para mantener
  la misma exposición — y qué pasa cuando uno de los tres llega a su límite.
• Recomendación de distancia focal y tipo de lente por modo, con alternativas
  para quien todavía usa el lente de kit.
• Conceptos: 19 temas de referencia —triángulo de exposición, modos de
  cámara y de escena, medición, compensación de exposición, profundidad de
  campo, enfoque, estabilización, larga exposición, balance de blancos,
  teoría del color, flash, modificadores de luz, hora dorada/azul,
  composición, RAW vs. JPEG, histograma, doble exposición y estilos
  fotográficos— para ayudarte a encontrar tu propio estilo, no solo a
  exponer bien.
• Bilingüe: español e inglés, detecta el idioma del teléfono.

PRIVACIDAD

100% en el dispositivo. Encuadre no recolecta, guarda ni envía ningún dato o
imagen a ningún servidor. La cámara se usa solo para la vista previa en vivo
— nunca se toma ni se guarda ninguna foto dentro de la app.

Bokeh queda fuera a propósito: depende de estimar la distancia al sujeto con
precisión, y no todos los teléfonos lo hacen igual de bien.
```

### Descripción completa (ambas tiendas, hasta 4000 car.) — English

```
Encuadre is the companion for anyone who just bought their first real camera
(DSLR or mirrorless) and still isn't sure what ISO, aperture, and shutter
speed actually do beyond "auto mode."

Your phone doesn't take the photo or replace the camera. You point it at the
same scene you're about to shoot, pick a technique, and Encuadre explains
live how those three settings relate to each other for that light and that
subject — so you make the call, not the app.

WHAT'S INCLUDED

• 7 scene modes (outdoor portrait, landscape/golden hour, panning, action
  portrait, night portrait, studio/indoor portrait, focus), each calibrated
  to its own light and motion conditions.
• Interactive exposure triangle: drag ISO, aperture, or shutter speed with
  your finger and feel in real time how the other two compensate to keep
  the same exposure — and what happens when one of the three hits its limit.
• Focal length and lens-type recommendations per mode, with workarounds for
  anyone still shooting with their kit lens.
• Concepts: 19 reference topics — exposure triangle, camera and scene
  modes, metering, exposure compensation, depth of field, focus, image
  stabilization, long exposure, white balance, color theory, flash, light
  modifiers, golden/blue hour, composition, RAW vs. JPEG, histogram, double
  exposure, and photographic styles — to help you find your own style, not
  just get a correct exposure.
• Bilingual: Spanish and English, detects your phone's language.

PRIVACY

100% on-device. Encuadre doesn't collect, store, or send any data or image
to any server. The camera is used only for the live preview — no photo is
ever taken or saved inside the app.

Bokeh is left out on purpose: it depends on accurately estimating subject
distance, and not every phone does that equally well.
```

## Data Safety (Google Play) — respuestas exactas

Confirmado en el código: no hay `captureAsync`, `recordAsync`, ni
`MediaLibrary`, ni ninguna llamada de red (`fetch`/`axios`) en toda la app.
El único uso de almacenamiento es `AsyncStorage` para guardar el idioma
elegido y si ya viste el tutorial — ambos puramente locales, nunca
transmitidos.

- ¿Tu app recolecta o comparte alguno de los tipos de datos requeridos?
  **No**
- Tipos de datos: ninguno — la cámara se usa solo para vista previa en vivo,
  nunca se captura ni se guarda ninguna imagen.
- Cifrado en tránsito: no aplica (no se recolecta ni transmite nada).
- Eliminación de datos: no aplica (no se recolecta nada que eliminar).
- Declara el permiso de Cámara igual, pero aclara en la sección de
  descripción de datos que es "preview-only, no capturado ni almacenado".

## App Privacy (Apple App Store) — respuestas exactas

En el cuestionario "App Privacy" de App Store Connect, para cada categoría
(Contact Info, Health, Financial, Location, Sensitive Info, Contacts,
User Content, Browsing History, Search History, Identifiers, Purchases,
Usage Data, Diagnostics, Other Data): **"Data Not Collected"**.

No hay analítica, no hay crash reporting de terceros, no hay SDKs de
publicidad ni de tracking.

## `eas.json` / `app.json` — ya configurado

- `app.json`: `ios.bundleIdentifier` y `android.package` en
  `com.encuadre.app`, `ios.buildNumber: "1"`, `android.versionCode: 1`,
  ícono 1024×1024 sin canal alfa (formato correcto de Apple), adaptive icon
  de Android con foreground/background/monochrome, `ios.supportsTablet:
  false` (sin soporte iPad por ahora, para no necesitar esas capturas).
- `eas.json`: perfil `production` genera **AAB** para Android
  (`buildType: "app-bundle"`, lo que exige Play Store) y build de **store**
  para iOS (`simulator: false`).
- `eas.json` → `submit.production` está vacío a propósito: no se deben
  commitear credenciales (Apple ID, App-Specific Password, o la clave de
  cuenta de servicio de Google Play) al repositorio. Cuando llegue el
  momento de enviar, `eas submit` las pide interactivamente, o se pueden
  pasar por variables de entorno.

## Comandos, cuando tengas las cuentas

```bash
# Build de producción — Android (AAB para Play Store)
eas build -p android --profile production

# Build de producción — iOS (requiere cuenta de Apple Developer activa)
eas build -p ios --profile production

# Envío a cada tienda (interactivo, pide credenciales la primera vez)
eas submit -p android --latest
eas submit -p ios --latest
```

## Pendiente — depende de ti

1. **Apple Developer Program** (inscripción + pago) — bloqueante para todo
   lo de iOS.
2. **Google Play Console** (inscripción + pago, si no la tienes ya).
3. **Ícono final** — ya en proceso tuyo; mantén 1024×1024, RGB, sin canal
   alfa para iOS (el placeholder actual ya cumple ese formato).
4. ~~Correo real de contacto en la política de privacidad~~ — resuelto,
   `privacy-policy.html` ya usa `linaresmendez25@gmail.com`.
5. ~~Hostear la política de privacidad~~ — resuelto. Ya está en vivo, servida
   por jsDelivr directo desde el repo público (no hizo falta GitHub Pages):
   **https://cdn.jsdelivr.net/gh/yerik-l/encuadre@main/privacy-policy.html**.
   Esa es la URL para App Store Connect / Play Console. Detalle: jsDelivr
   cachea el contenido, así que una edición futura del archivo tarda un rato
   en reflejarse ahí.
6. **Feature graphic de Play Store** (1024×500) — gráfico promocional
   obligatorio para la ficha de Android, no lo generé porque es una pieza de
   diseño de marca, igual que el ícono.
7. **Screenshots** — mejor tomarlas desde tu Android real (ya lo tienes
   configurado y probado con el APK) que desde el simulador de iOS: el
   simulador no tiene cámara física, así que cualquier pantalla de un modo
   (los 7 usan `CameraLiveView`) saldría en negro o rota — solo Tutorial,
   selector de modos y Conceptos se verían bien, y ni siquiera tengo Expo Go
   instalado en el simulador ahora mismo para generarlas. Para Play Store
   necesitas mínimo 2 (hasta 8) capturas de teléfono; para App Store, una
   tanda por tamaño de pantalla (recomendado: 6.7", puede reusarse si Apple
   no exige las demás tras subir esa). Las de iOS mejor esperarlas a cuando
   tengas TestFlight funcionando con un build real.
7. **Clasificación de edad** (cuestionario) en ambas tiendas — preguntas de
   contenido que solo tú puedes responder con certeza legal.
