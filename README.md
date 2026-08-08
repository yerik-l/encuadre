# Encuadre

Compañero de fotografía para quien acaba de comprar su primera cámara real (DSLR/mirrorless).
El teléfono no dispara ni reemplaza a la cámara: apuntas al mismo lugar que vas a fotografiar,
eliges una técnica, y te explico en vivo cómo se relacionan ISO, apertura y velocidad de
obturación para esa luz y ese objetivo — para que decidas tú, no la app.

100% on-device. No se recolecta, guarda ni envía ningún dato o imagen a ningún servidor.

Además de los modos de cámara, tiene una sección de **Conceptos** (19 temas) — referencia de
lectura (no depende de sensores) sobre triángulo de exposición, modos de cámara y de escena,
medición, compensación de exposición, profundidad de campo, enfoque, estabilización, larga
exposición, balance de blancos, teoría del color, flash, modificadores de luz, hora dorada/azul,
composición, RAW vs. JPEG, histograma, doble exposición y estilos fotográficos — para ayudar a
encontrar un estilo propio, no solo a exponer bien. Se abre desde el banner en la pantalla de
selección de modo.

## Estado de cara a publicar

De la auditoría de disponibilidad para publicar, esto ya está resuelto:

- **Build de producción**: `eas.json` con perfiles `development`/`preview`/`production`, más
  `ios.bundleIdentifier` y `android.package` en `app.json` (`com.encuadre.app` — cámbialo si
  quieres usar tu propio dominio antes de subir a las tiendas de verdad). Con esto ya se puede
  correr `eas build -p android --profile preview` para sacar el APK de pruebas.
- **Política de privacidad**: bilingüe, en [`privacy-policy.html`](privacy-policy.html), y ya
  publicada y en vivo — https://cdn.jsdelivr.net/gh/yerik-l/encuadre@main/privacy-policy.html.
  Antes estaba en un Artifact de Claude, pero los Artifacts empiezan privados por defecto (un
  revisor de Apple/Google sin cuenta de Claude no podría abrirlo), así que se movió a este
  archivo del repo. Como el repo es público, jsDelivr lo sirve directo desde GitHub sin ningún
  paso extra (GitHub Pages habría sido una alternativa, pero no hizo falta activarlo). Es la URL
  para poner en App Store Connect / Play Console — el correo de contacto ya es real
  (`linaresmendez25@gmail.com`). Único detalle: jsDelivr cachea el contenido, así que si se edita
  el archivo el cambio tarda un rato en reflejarse (no es instantáneo como Pages).
- **Permiso de cámara denegado permanentemente**: en vez de un botón muerto, ahora detecta
  `canAskAgain` y manda a Configuración con `Linking.openSettings()` (`App.tsx`).
- **Error boundary** (`src/components/ErrorBoundary.tsx`): una excepción de render ya no deja la
  pantalla en blanco — muestra un mensaje bilingüe con botón de reintentar.
- **Accesibilidad**: `accessibilityRole`/`accessibilityLabel`/`accessibilityState` en todos los
  botones, tarjetas, radios y deslizadores de la app (VoiceOver/TalkBack).
- **30 pruebas automatizadas** (antes 26): se agregó `App.test.tsx` cubriendo el enrutamiento
  completo — tutorial → permiso de cámara → selector de modos → Conceptos — con
  `@testing-library/react-native`.
- **Permiso de micrófono innecesario**: al vincular el proyecto a EAS, el plugin de
  `expo-camera` agregó automáticamente `RECORD_AUDIO` a Android — la app nunca graba audio, solo
  usa la cámara para vista previa. Se desactivó con `recordAudioAndroid: false` en la config del
  plugin (`app.json`), y de paso `barcodeScannerEnabled: false` ya que tampoco se usa lectura de
  códigos de barras. Pedir permisos que la app no usa es motivo común de fricción en la revisión
  de las tiendas.
- **Proyecto EAS vinculado**: `@yeriklinares/encuadre` (ID en `extra.eas.projectId` de
  `app.json`). Primer APK de prueba en cola de build tras corregir el permiso de arriba.

Lo que sigue pendiente y depende de ti (no es código): probar el APK con usuarios reales, y
reemplazar el ícono de plantilla por el definitivo antes de publicar.

## Cómo correrlo

```bash
npm install
npx expo start
```

Desde ahí:
- `i` para abrir en el simulador de iOS
- `a` para abrir en un emulador/dispositivo Android
- Escanear el QR con la app Expo Go en tu propio teléfono (más fiel, porque usa cámara y sensores reales)

```bash
npm test
```

Corre las pruebas de `src/exposure/exposureTriangle.ts` (la matemática del triángulo interactivo),
`src/modes/modes.ts` (qué sugiere cada modo según luz/movimiento — incluye la prueba de regresión
del bug de umbrales nocturnos descrito abajo), y `App.test.tsx` (enrutamiento de pantallas:
tutorial → permiso de cámara → selector de modos → Conceptos, con `@testing-library/react-native`).

## Bugs reales encontrados y corregidos en la revisión de código

- **Redistribución incompleta en el triángulo de exposición** (`src/exposure/exposureTriangle.ts`):
  si el segundo eje en absorber la compensación topaba con su límite, la luz que le sobraba se
  perdía en vez de devolvérsela al primer eje, aunque ese primero todavía tuviera margen. Ejemplo
  reproducible: subir ISO de 100 a 6400 desde el extremo dejaba la apertura absorbiendo solo la
  mitad de lo que podía. Corregido dándole al primer eje una segunda oportunidad, y cubierto con
  una prueba que falla con el código viejo y pasa con el nuevo.
- **Botón del triángulo tapado por la tarjeta de guía**: estaba anclado por posición absoluta
  cerca del fondo de la pantalla; la tarjeta de guía, que crece según el largo del texto, casi
  siempre terminaba cubriéndolo. Se movió al stack de arriba.
- **Selector de modos sin scroll**: con 4 modos cabía justo en pantalla; con 6 ya no hay garantía
  en dispositivos chicos o con texto más grande, y no había forma de llegar a los últimos modos.
  Se envolvió en un `ScrollView`.
- **Botón físico de "atrás" en Android cerraba toda la app** desde la pantalla de cámara en vez de
  volver al selector de modos, porque no había ningún listener de `BackHandler`. Agregado.
- **Tarjeta de guía sin límite de altura**: algunos textos (el aviso de estabilidad del modo
  nocturno se concatena al texto normal) pueden crecer más de lo que cabe en pantallas chicas.
  Se le puso `maxHeight` + scroll interno en vez de dejar que crezca sin límite o se corte en silencio.
- **Botón físico de "atrás" cerraba el modo con el triángulo de exposición abierto** en vez de
  cerrar primero el panel — encontrado en una auditoría con 3 revisores en paralelo (código,
  contenido fotográfico, disponibilidad para publicar) tras agregar el feedback visual del
  triángulo. `LearningScreen.tsx` ahora revisa `showTriangle` antes de llamar a `onBack()`.
- **Los sliders del triángulo disparaban `setIndices` en cada tick de arrastre**, incluso cuando
  el valor redondeado no había cambiado de parada — cada uno de esos renders de más volvía a
  calcular los 4 `BlurView` de la viñeta de profundidad de campo, que la propia librería marca
  como costosos en Android. `handleChange` ahora compara contra el valor actual del eje antes de
  llamar a `setIndices`, y devuelve la misma referencia de estado si no cambió (React se salta el
  render).
- **El botón físico de "atrás" en Android solo estaba conectado en `LearningScreen`** — en
  `TutorialScreen` y `ConceptsScreen` (que tiene su propia navegación interna lista → detalle)
  no había ningún `BackHandler`, así que presionarlo ahí cerraba la app entera en vez de retroceder
  un paso. Encontrado en la segunda ronda de auditoría (3 revisores en paralelo otra vez, después
  de agregar el modo Enfoque) — se agregó el mismo patrón de `BackHandler` a las dos pantallas.
- **`GuidanceOverlay` no tenía espacio pensado para un 4to chip**: los 3 chips (ISO/apertura/
  obturador) usaban `flex: 1` en una sola fila; el modo Enfoque agrega un 4to (`suggestedFocus`)
  que los apretaba a todos en pantallas chicas, con riesgo de que un valor como "f/1.8–f/2.8" se
  cortara. Ahora, cuando `suggestedFocus` está presente, se acomodan en 2×2 en vez de una fila de 4.

## Bugs de contenido encontrados en una revisión editorial (no de código)

Se hizo una pasada del contenido como la haría un instructor de fotografía, no solo un
desarrollador. Encontró un error real de dominio, no solo de UI:

- **Los umbrales de luz de Retrato nocturno y Retrato en estudio reusaban los mismos cortes que
  el resto de los modos** (`lightLabel()` en `src/modes/modes.ts`), calibrados para luz de día
  (el corte de "brillante" es ≥15,000 lux — luz de día nublado). De noche, ni parado frente al
  letrero más brillante de una calle se llega ni cerca de esa cifra (una calle bien iluminada
  ronda 50-300 lux), así que el texto de "escena nocturna bien iluminada" nunca se activaba en la
  práctica — era contenido muerto. Se agregaron `nightLightLabel()` e `indoorLightLabel()` con
  cortes calibrados al rango real de luz nocturna e interior.
- **La regla de estabilización (1/distancia focal) no mencionaba el factor de recorte.** La
  mayoría de quienes compran su primera cámara tienen sensor APS-C, no full-frame — un 50mm ahí
  se comporta como ~75mm para esta regla. Se agregó la aclaración.
- **El modo Acción reusaba `lightLabel()` (calibrada para luz de día genérica) y confundía "poca
  luz" con casi cualquier exterior nublado**: su banda "medio" va de 50 a 15,000 lux, así que
  recomendaba ISO 800-3200 incluso con luz de sobra para disparar a 1/500-1/800 con un ISO mucho
  más bajo. Mismo tipo de descalibración que el bug de arriba, pero en un modo distinto — se
  agregó `actionLightLabel()` con cortes propios (calibrados a lo rápido que dispara este modo,
  1/250 a 1/1000+) y tres niveles de ISO en vez de dos.
- **El desenfoque de bordes que simula profundidad de campo puede enseñar una intuición
  incorrecta**: el bokeh real depende de la distancia del sujeto al fondo, no de su posición en
  el encuadre — pero la app anima activamente a componer con la regla de tercios (sujeto
  descentrado). Se agregó una aclaración dentro del propio triángulo (`simulationDisclosure` en
  `translations.ts`) explicando que el efecto es ilustrativo y no depende de dónde esté el sujeto.
- **La política de privacidad estaba publicada como Artifact de Claude**, que empiezan privados
  por defecto — un revisor de Apple/Google sin cuenta de Claude no podría abrirla al enviar la
  app a revisión. Se movió a [`privacy-policy.html`](privacy-policy.html), un archivo
  autocontenido en el repo listo para hostear donde quieras (ver "Estado de cara a publicar").
- **`paisaje` tenía el mismo tipo de bug que el de Acción, sin corregir**: reusaba `lightLabel()`
  con aperturas cerradas (f/8-f/16, para tener todo en foco), que necesitan mucha más luz que las
  aperturas abiertas de retrato para la misma velocidad. Un exterior nublado normal (~3000 lux, el
  propio valor de referencia de `LIGHT_BANDS`) caía en la banda "medio" con velocidades sugeridas
  de 1/60-1/125 — subexponiendo por 1.5-2 paradas según la matemática real de exposición. El corte
  de "brillante" a 15,000 lux tenía el problema inverso: pedía 1/250-1/500 cuando la regla real
  de "sunny 16" da más como 1/60-1/125 incluso a pleno mediodía. Se agregó `paisajeLightLabel()`
  con cortes y velocidades recalibrados.
- **En el modo Enfoque, la velocidad de obturación sugerida no variaba según qué tan rápido se
  mueve el sujeto** — dependía solo de la banda de luz, así que practicar AF-C con un sujeto
  "rápido" en luz media daba la misma velocidad (1/125-1/250) que uno "lento", suficiente para
  que el enfoque funcione pero no para congelar el movimiento — dando la falsa impresión de que
  acertar el AF-C ya garantiza una foto nítida. Ahora la velocidad sigue la velocidad del sujeto,
  igual que en Acción.
- **El único APK de Android que existía era del scaffold vacío de `create-expo-app`, no de la app
  real** — se había generado antes de que expo-camera, expo-sensors y todo el código de la app
  llegaran al repositorio (commit `3a756a3`, "Initial commit"). Cualquiera que lo hubiera instalado
  para probar Encuadre en un dispositivo real estaba abriendo una pantalla en blanco, no la app.
  Se generó un build nuevo desde el código actual.

## Los 7 modos

Los 7 tienen el triángulo de exposición interactivo (ver más abajo). Lo que cambia entre ellos:

1. **Retrato en exteriores** — luz + regla de tercios
2. **Paisaje / hora dorada** — solo luz
3. **Barrido (panning)** — luz + movimiento del teléfono (giroscopio)
4. **Retrato de acción** — luz + velocidad del sujeto (input manual, ver nota abajo)
5. **Retrato nocturno** — luz + aviso de estabilidad (giroscopio) si el teléfono se mueve
   demasiado para la velocidad de obturación sugerida + regla de tercios
6. **Retrato en estudio / interiores** — luz (leída como calidad/dirección, no solo cantidad) +
   regla de tercios
7. **Enfoque** — velocidad del sujeto (input manual, igual que Acción) para sugerir AF-S vs.
   AF-C, más un aviso de luz cuando el autofoco puede empezar a fallar o "buscar". A diferencia
   de los otros 6, no gira en torno a exposición sino al otro motivo clásico de "me salió
   borroso" — que la cámara enfocó donde no era.

Bokeh queda fuera a propósito: depende de estimar la distancia al sujeto con precisión, y eso no
todos los teléfonos lo hacen igual de bien (LiDAR / doble cámara).

## Distancia focal y lente sugeridos por modo

Cada modo trae una recomendación fija de distancia focal y tipo de lente
(`src/components/LensHint.tsx`, contenido en `t.lens` dentro de `src/i18n/translations.ts`):
visible como línea corta en la tarjeta de selección de modo, y completa (con el porqué) en la
pantalla de cámara en vivo. A diferencia de ISO/apertura/obturador, esto no depende de la luz de
la escena — es información fija de equipo, así que vive fuera de `getGuidance`.

| Modo | Distancia focal | Lente |
|---|---|---|
| Retrato en exteriores | 50–85mm | Fijo (prime), f/1.8 o más abierto |
| Paisaje / hora dorada | 16–35mm | Gran angular |
| Barrido | 24–70mm | Zoom versátil |
| Retrato de acción | 70–200mm | Teleobjetivo, f/2.8 constante idealmente |
| Retrato nocturno | 35–50mm | Fijo, lo más abierto que tengas |
| Retrato en estudio / interiores | 35–50mm | Fijo, apertura abierta |
| Enfoque | 24–70mm | Cualquiera con autofoco confiable |

Casi nadie compra lentes extra al comprar su primera cámara, así que cada modo también trae un
tip desplegable ("Con tu lente de kit ▾") explicando cómo acercarse a la técnica usando el zoom
de kit típico (18-55mm aprox.) en vez del lente ideal. En paisaje y barrido el lente de kit ya
cubre el rango sin ningún compromiso — se lo decimos así de directo en vez de inventar un ajuste
que no hace falta. En retrato y acción sí hay una diferencia real (menos desenfoque, menos
alcance), y el tip explica qué hacer al respecto (acercarse, subir ISO, etc.).

## Triángulo de exposición interactivo (los 7 modos) y regla de tercios (los 3 de retrato)

- **Triángulo de exposición interactivo** (`src/components/ExposureTriangleWidget.tsx` +
  `src/exposure/exposureTriangle.ts`): tres controles deslizables — ISO, apertura, obturador.
  Mover cualquiera con el dedo redistribuye automáticamente la compensación entre los otros dos
  para mantener la misma exposición total, en pasos reales de una parada (stops), igual que en
  una cámara física. Es la forma más directa que se nos ocurrió de que el usuario *vea* la
  relación entre los tres parámetros en vez de leerla. Se abre con el botón "Ver el triángulo en
  vivo", que vive en el stack de arriba (junto al lente sugerido) — a propósito, no cerca de la
  tarjeta de guía de abajo, porque esa tarjeta cambia de altura según el largo del texto y
  llegó a tapar el botón cuando estaba anclado por posición absoluta cerca del fondo. Al principio
  solo estaba en los modos de retrato, pero el intercambio ISO/apertura/obturador le importa
  igual a quien está aprendiendo barrido o paisaje, así que se abrió a los 7 modos
  (`showExposureTriangle: true` en todos, `src/modes/modes.ts`).
- **Feedback visual en vivo sobre la cámara mientras se mueve el triángulo**: mover los sliders
  cambiaba los números pero no la pantalla — para quien está probando la app se sentía como que
  "no pasaba nada". expo-camera no expone control real de ISO/apertura/obturador en iOS ni
  Android (`WebCameraSettings.iso`/`exposureCompensation` solo existen para web), así que no hay
  forma de que la cámara física del teléfono cambie de verdad — en su lugar se simula
  visualmente, un efecto por eje:
  - **Apertura → viñeta de profundidad de campo** (`src/components/DepthOfFieldOverlay.tsx`, con
    `expo-blur`): desenfoca los bordes de la vista en vivo, nunca el centro — más ancho e intenso
    mientras más abierta la apertura (f-número bajo). En Android, `expo-blur` necesita que el
    contenido a desenfocar esté envuelto en un `BlurTargetView` (por eso `CameraLiveView.tsx` se
    bifurca por plataforma); en iOS el blur nativo ve lo que tiene detrás sin envolver nada.
  - **ISO → grano** (`src/components/GrainOverlay.tsx`): textura de ruido (`assets/grain.png`,
    generada con un script de Python que escribe un PNG grayscale+alpha a mano, sin
    dependencias) repetida sobre la pantalla, con opacidad que sube con el ISO.
  - **Obturador → ícono ❄️/〰️** junto al slider en `ExposureTriangleWidget.tsx`: congela o
    difumina, según si la velocidad elegida está por encima o por debajo de 1/30s.
  - **Exposición real → tinte de pantalla**: cuando un eje llega a su límite físico y ya no
    puede compensar más (`netExposureStops()` en `exposureTriangle.ts`), la pantalla se oscurece
    o aclara de verdad — ese es el único momento en que la foto real cambiaría, y es a propósito
    que el resto del tiempo no pase nada: el punto del triángulo es que dentro de rango la
    exposición se mantiene igual.
  Los cuatro efectos son puramente ilustrativos (no es la imagen real que produciría esa
  combinación), y se apagan solos al cerrar el triángulo.
- **Modo Enfoque** (`src/modes/modes.ts`, función `enfoque`): el único de los 7 que no gira en
  torno a exposición. Reusa el mismo selector de velocidad de sujeto que Acción
  (`SubjectSpeedPicker`) para recomendar AF-S (sujeto quieto) o AF-C (sujeto en movimiento), y usa
  el sensor de luz para advertir cuándo el autofoco puede fallar o "buscar" sin encontrar el
  punto — un problema real de autofoco en poca luz que ningún otro modo cubre. Agrega un cuarto
  chip a `GuidanceOverlay` (`suggestedFocus`, opcional — los otros 6 modos no lo usan) mostrando
  "AF-S" o "AF-C".
- **Regla de tercios** (`src/components/RuleOfThirdsGrid.tsx`): cuadrícula de composición sobre
  la cámara en vivo. Esta sí se quedó limitada a los tres modos de retrato (exteriores, nocturno,
  estudio) — es donde más importa dónde cae el sujeto en el encuadre.

## Idiomas y tutorial

- La app detecta el idioma del teléfono al abrir (`expo-localization`) y por defecto usa español
  o inglés; se puede cambiar a mano con el botón ES/EN en la pantalla de selección de modo. Todo
  el texto vive en `src/i18n/translations.ts`, y `src/modes/modes.ts` ya no contiene ningún texto
  fijo — recibe las traducciones como parámetro.
- Modo tutorial (`src/screens/TutorialScreen.tsx`): aparece automáticamente la primera vez que se
  abre la app (se recuerda con `AsyncStorage`, no vuelve a aparecer solo) y se puede reabrir en
  cualquier momento con el botón "?" junto al selector de idioma. Tiene 5 pasos — el último señala
  explícitamente la sección de Conceptos, porque solo se descubre por el banner y era fácil
  terminar el tutorial sin enterarse de que existen 19 temas de referencia.

## Decisiones técnicas que vale la pena conocer

- **El sensor de luz ambiente (`LightSensor` de `expo-sensors`) solo da datos reales en
  Android.** iOS no expone ese sensor a apps de terceros por restricción de la plataforma.
  Cuando no hay sensor disponible (siempre en iOS, o en un Android sin él), la app cae a un
  selector manual de condición de luz (`src/components/LightConditionPicker.tsx`) en vez de
  fingir una medición que no existe. **Validado en hardware real**: en un Android con Expo Go
  antiguo (no podía correr Encuadre directo por desfase de SDK), se armó un proyecto de
  diagnóstico aparte con las mismas llamadas a `LightSensor`/`Gyroscope` — el lux baja al tapar
  la cámara y el giroscopio responde al mover el teléfono, confirmando que ambas APIs devuelven
  datos reales y no solo compilan.
- **El giroscopio mide el movimiento del teléfono, no el del sujeto.** Por eso el modo Barrido
  (que sigue tu propio movimiento panorámico) sí usa sensor real, pero el modo Retrato de
  acción (que depende de qué tan rápido se mueve TU SUJETO, algo que el teléfono no puede
  medir) le pregunta la velocidad directamente al usuario
  (`src/components/SubjectSpeedPicker.tsx`).
- Toda la lógica de qué configuración sugerir por modo/luz/movimiento vive en un solo lugar:
  `src/modes/modes.ts`. Si quieres ajustar los umbrales de luz o el texto explicativo, es ahí.

## Estructura

```
App.tsx                          punto de entrada: permiso de cámara, tutorial, idioma
src/i18n/translations.ts         todo el texto de la app, en español e inglés
src/i18n/LanguageContext.tsx     contexto de idioma (detecta el del teléfono, se puede cambiar)
src/modes/modes.ts               definición de los 7 modos + lógica de guía (recibe traducciones)
src/exposure/exposureTriangle.ts matemática del triángulo de exposición interactivo
src/hooks/useAmbientLight.ts     lectura del sensor de luz (Android) / null en iOS
src/hooks/useMotion.ts           magnitud suavizada del giroscopio
src/components/CameraLiveView.tsx        vista previa de cámara en vivo (BlurTargetView en Android)
src/components/RuleOfThirdsGrid.tsx      cuadrícula de regla de tercios (modo retrato)
src/components/ExposureTriangleWidget.tsx  triángulo de exposición interactivo (modo retrato)
src/components/DepthOfFieldOverlay.tsx   viñeta de desenfoque simulando profundidad de campo (apertura)
src/components/GrainOverlay.tsx          textura de grano simulando ruido de sensor (ISO)
src/components/GuidanceOverlay.tsx       tarjeta con la explicación y ajustes sugeridos
src/components/LightConditionPicker.tsx  selector manual de luz (fallback)
src/components/SubjectSpeedPicker.tsx    selector de velocidad del sujeto (modo Acción)
src/screens/ModeSelectScreen.tsx     selección de modo + selector de idioma + botón de tutorial
src/screens/LearningScreen.tsx       pantalla de cámara + guía en vivo
src/screens/TutorialScreen.tsx       modo tutorial (primera vez + reabrible)
src/concepts/concepts.ts             lista de los 19 temas de Conceptos + su forma de contenido
src/screens/concepts/ConceptsScreen.tsx          lista de temas + navegación al detalle
src/screens/concepts/SectionsConceptDetail.tsx   pantalla genérica para temas tipo "secciones"
src/screens/concepts/ItemsConceptDetail.tsx      pantalla genérica para temas tipo "catálogo"
```

### Por qué Conceptos usa solo 2 pantallas para 19 temas

Todo el contenido de Conceptos cae en una de dos formas: **secciones** (una explicación por
encabezado — triángulo de exposición, modos de cámara, profundidad de campo, teoría del color,
composición, estabilización, histograma) o **catálogo** (una lista de nombres con su descripción —
presets de balance de blancos, formatos RAW/JPEG, estilos fotográficos). Con dos formas alcanza
para los 19 temas, así que `src/concepts/concepts.ts` solo declara qué forma usa cada uno
(`shape: 'sections' | 'items'`) y dos componentes genéricos los renderizan — en vez de una
pantalla nueva por cada tema.

## Pendiente antes de construir más (del spec original)

El supuesto más riesgoso de todo el producto sigue sin validar: que mirar el teléfono y luego
ajustar la cámara real se sienta natural y no como fricción extra. Antes de invertir más tiempo
puliendo estos 7 modos, vale la pena probarlo con 5-10 personas que acaban de comprar su primera
cámara.

## Fuera de alcance de este MVP

- Conexión a la cámara física (WiFi/Bluetooth) para leer su configuración real — v2
- Modo bokeh con estimación de profundidad — v2
- Medidor de luz standalone y biblioteca de consejos — v2
- Cuentas de usuario, redes sociales, compartir fotos — no aporta al problema central
