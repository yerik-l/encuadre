const es = {
  appName: 'Encuadre',
  modeSelect: {
    subtitle:
      'Elige qué quieres aprender a hacer con tu cámara. Apunta el teléfono a tu escena y te explico en vivo qué está pasando con la luz.',
  },
  common: {
    back: '‹ Modos',
    close: 'Cerrar',
    continue: 'Continuar',
  },
  a11y: {
    backToModes: 'Volver a modos',
    openTutorial: 'Abrir tutorial',
    switchToEnglish: 'Cambiar idioma a inglés',
    switchToSpanish: 'Cambiar idioma a español',
    switchToPortuguese: 'Cambiar idioma a portugués',
    openConcepts: 'Abrir Conceptos',
    closeExposureTriangle: 'Cerrar el triángulo de exposición',
    toggleKitLensTip: 'Mostrar u ocultar el consejo para lente de kit',
    isoSlider: 'Control deslizable de ISO',
    apertureSlider: 'Control deslizable de apertura',
    shutterSlider: 'Control deslizable de velocidad de obturación',
    lockedMode: 'Modo Pro, bloqueado',
    closePaywall: 'Cerrar pantalla de Pro',
  },
  permission: {
    title: 'Encuadre necesita tu cámara',
    body: 'La usamos solo para ver la escena en vivo mientras te explico la luz y el movimiento. Nunca se guarda ni se envía a ningún servidor.',
    button: 'Continuar',
    settingsTitle: 'El permiso de cámara está desactivado',
    settingsBody: 'Ya lo rechazaste una vez, así que el sistema no vuelve a preguntar automáticamente. Actívalo desde Configuración para poder usar Encuadre.',
    settingsButton: 'Abrir Configuración',
  },
  modes: {
    retrato: {
      title: 'Retrato en exteriores',
      subtitle: 'Separa a tu sujeto del fondo',
      description:
        'Apunta al lugar donde vas a hacer el retrato. Te explico cómo balancear apertura e ISO según la luz que hay ahora mismo, con guía de composición incluida.',
    },
    paisaje: {
      title: 'Paisaje / hora dorada',
      subtitle: 'Toda la escena en foco',
      description:
        'Apunta al paisaje. Te explico cómo mantener todo nítido, de primer a último plano, con la luz de este momento.',
    },
    barrido: {
      title: 'Barrido (panning)',
      subtitle: 'Fondo con movimiento, sujeto nítido',
      description:
        'Mueve el teléfono como si estuvieras siguiendo a tu sujeto. Voy a sentir qué tan rápido y firme es tu movimiento para sugerirte la velocidad de obturación.',
    },
    accion: {
      title: 'Retrato de acción',
      subtitle: 'Congela el movimiento',
      description:
        'El teléfono no puede medir qué tan rápido se mueve tu sujeto, así que dime tú y combino eso con la luz de ahora mismo.',
    },
    retratoNocturno: {
      title: 'Retrato nocturno',
      subtitle: 'Trabaja con poca luz sin perder al sujeto',
      description:
        'Apunta a la escena nocturna. Te explico cómo aprovechar las fuentes de luz que hay y cuándo el ISO debe cargar con el peso en vez del obturador.',
    },
    retratoEstudio: {
      title: 'Retrato en estudio / interiores',
      subtitle: 'Controla la dirección de la luz',
      description:
        'Apunta a tu sujeto en interiores. Te explico cómo usar la ventana o tu fuente de luz como si fuera un estudio, sin equipo especializado.',
    },
    enfoque: {
      title: 'Enfoque',
      subtitle: 'Elige el modo de enfoque correcto',
      description:
        'Apunta a tu sujeto y dime qué tan rápido se mueve. Te ayudo a elegir entre enfoque de una toma o continuo, y te aviso si la luz le va a poner difícil enfocar a tu cámara.',
    },
  },
  lightBands: {
    muy_oscuro: 'Muy oscuro (noche, interior sin luz)',
    interior: 'Interior con luz',
    exterior_nublado: 'Exterior nublado / sombra',
    sol_directo: 'Sol directo',
  },
  lightPicker: { label: '¿Cómo está la luz ahora?' },
  subjectSpeed: {
    label: '¿Qué tan rápido se mueve tu sujeto?',
    lento: 'Lento (caminando)',
    medio: 'Medio (corriendo)',
    rapido: 'Rápido (vehículo, deporte)',
  },
  chips: { iso: 'ISO', aperture: 'Apertura', shutter: 'Obturador', focus: 'Enfoque' },
  guidance: {
    retrato: {
      oscuro: {
        headline: 'Poca luz: prioriza una apertura abierta',
        detail:
          'Con esta luz, una apertura abierta (número f bajo) deja entrar más luz y además separa a tu sujeto del fondo. Sube el ISO solo lo necesario para que la velocidad no baje demasiado y la foto salga movida.',
      },
      medio: {
        headline: 'Luz cómoda para retrato',
        detail:
          'Con esta luz puedes elegir la apertura según cuánto fondo quieras desenfocar, sin preocuparte tanto por el ISO. Apertura más abierta = más desenfoque de fondo.',
      },
      brillante: {
        headline: 'Mucha luz: cuidado con las sombras duras',
        detail:
          'Con sol directo la luz puede ser dura sobre el rostro. Cierra un poco la apertura para no sobreexponer y busca sombra suave o luz de costado si puedes.',
      },
    },
    paisaje: {
      oscuro: {
        headline: 'Luz baja: vas a necesitar apoyo firme',
        detail:
          'Para paisaje casi siempre quieres apertura cerrada (todo en foco), pero con poca luz eso significa velocidades lentas. Apoya el codo o usa un trípode/superficie fija para que no salga movida.',
      },
      medio: {
        headline: 'Buena luz para hora dorada',
        detail:
          'Esta luz suave es ideal para paisaje. Cierra la apertura para que todo el encuadre quede nítido, de lo cercano a lo lejano, y mantén el ISO bajo para que no haya ruido.',
      },
      brillante: {
        headline: 'Sol alto: contraste fuerte',
        detail:
          'A esta hora el contraste entre cielo y sombras es alto. Cierra bastante la apertura para nitidez de punta a punta y vigila que el cielo no se queme.',
      },
    },
    barrido: {
      detail:
        'La clave del barrido es una velocidad de obturación lenta combinada con un movimiento suave que siga al sujeto a su misma velocidad. Cuanto más lento el obturador, más se difumina el fondo — pero más fácil es que el sujeto también salga borroso si tu mano no acompaña bien.',
      headlineSteady: 'Tu movimiento está muy quieto todavía',
      headlineFast: 'Buen ritmo de barrido detectado',
      headlineNormal: 'Sigue moviendo el teléfono para sentir el ritmo',
    },
    accion: {
      detail:
        'Para congelar movimiento, la velocidad de obturación manda. Entre más rápido se mueve tu sujeto, más rápida necesitas la velocidad — y eso te va a pedir subir el ISO o abrir la apertura para compensar la luz que pierdes.',
      headlineLento: 'Sujeto lento: prioriza la velocidad de obturación',
      headlineMedio: 'Sujeto medio: prioriza la velocidad de obturación',
      headlineRapido: 'Sujeto rápido: prioriza la velocidad de obturación',
    },
    retratoNocturno: {
      oscuro: {
        headline: 'Muy poca luz: prioriza que tu sujeto no se mueva',
        detail:
          'Con esta oscuridad casi toda la luz que tengas va a venir de una fuente puntual (poste, ventana, letrero). Acerca a tu sujeto a esa fuente en vez de solo subir el ISO al máximo. Mantén el obturador en 1/60 o más rápido para que la persona no salga movida — que sea el ISO el que absorba lo que falte, no el obturador.',
      },
      medio: {
        headline: 'Luz urbana nocturna: cuidado con el balance de blancos',
        detail:
          'Las luces de la calle mezclan colores distintos (cálido de sodio, frío de LED). Si puedes, ubica a tu sujeto cerca de una sola fuente de luz dominante para simplificar el color de la piel.',
      },
      brillante: {
        headline: 'Escena nocturna bien iluminada',
        detail:
          'Con letreros o vitrinas cerca tienes suficiente luz para trabajar con comodidad. Cuida que la luz de color no tiña demasiado la piel — muévete unos pasos para encontrar el ángulo con mejor color.',
      },
      shakeWarning:
        'Detecto que el teléfono se está moviendo bastante — apóyate en algo fijo o sujeta el codo contra el cuerpo; con esta luz cualquier temblor se nota mucho más.',
    },
    retratoEstudio: {
      oscuro: {
        headline: 'Ambiente muy tenue: vas a necesitar más luz',
        detail:
          'En interiores oscuros casi no hay suficiente luz ambiente. Acerca a tu sujeto a una ventana o usa una lámpara o anillo de luz como fuente principal — subir solo el ISO sin una fuente de luz real se va a ver con mucho ruido.',
      },
      medio: {
        headline: 'Buena luz de estudio o ventana',
        detail:
          'Esta es una luz cómoda para retrato de interior. Coloca la ventana o la fuente de luz a un lado del sujeto, en un ángulo de unos 45°, en vez de de frente — así el rostro tiene volumen y no se ve plano.',
      },
      brillante: {
        headline: 'Luz directa fuerte cerca de una ventana',
        detail:
          'Cerca de una ventana con sol directo la luz puede ser muy contrastada. Usa una cortina fina, papel blanco o cualquier tela translúcida para suavizarla antes de que llegue al sujeto.',
      },
    },
    enfoque: {
      lento: {
        headline: 'Sujeto quieto: usa enfoque de una toma (AF-S)',
        detail:
          'Con el sujeto quieto, el enfoque de una toma (AF-S / One-Shot) es más preciso: la cámara enfoca una vez, al presionar el disparador a la mitad, y se queda ahí trabada. Elige un solo punto de enfoque sobre el ojo o la parte más importante del sujeto en vez de dejar que la cámara adivine.',
      },
      medio: {
        headline: 'Sujeto en movimiento: considera enfoque continuo (AF-C)',
        detail:
          'Con movimiento moderado, el enfoque continuo (AF-C / AI Servo) sigue ajustando mientras mantienes el disparador a la mitad, así no pierdes al sujeto si se mueve. Si tu cámara lo permite, usa un punto de enfoque chico para más precisión.',
      },
      rapido: {
        headline: 'Sujeto rápido: el enfoque continuo (AF-C) es casi obligatorio',
        detail:
          'Con un sujeto rápido, el enfoque de una toma se va a quedar atrás. Usa enfoque continuo (AF-C / AI Servo), y considera un área de enfoque más amplia para que la cámara no pierda al sujeto entre puntos individuales.',
      },
      lowLightWarning:
        'Con esta poca luz, el autofoco puede fallar o "buscar" sin encontrar el punto — apunta a un borde de alto contraste cerca de tu sujeto, o cambia a enfoque manual si tu cámara lo permite.',
    },
  },
  exposureTriangle: {
    openButton: 'Ver el triángulo en vivo',
    title: 'Triángulo de exposición',
    hint: 'Mueve cualquier control. Los otros dos se ajustan solos para mantener la misma exposición — así ves el intercambio real entre ellos.',
    simulationDisclosure: 'Simulación ilustrativa: tu cámara real no cambia. El desenfoque de los bordes representa el efecto de la apertura — no depende de dónde esté tu sujeto en el encuadre.',
    isoHint: 'Sube el ruido de la imagen',
    apertureHint: 'Controla cuánto fondo queda desenfocado',
    shutterHint: 'Congela o difumina el movimiento',
    correctExposure: 'Exposición correcta — igual que al abrir el triángulo',
    underExposedOne: 'Se vería 1 parada más oscura',
    underExposedMany: 'Se vería {n} paradas más oscura',
    overExposedOne: 'Se vería 1 parada más clara',
    overExposedMany: 'Se vería {n} paradas más clara',
    limitReachedHint: 'Uno de los controles llegó a su límite y ya no puede compensar más — así se vería afectada la foto real.',
  },
  tutorial: {
    title: 'Cómo usar Encuadre',
    skip: 'Saltar',
    next: 'Siguiente',
    start: 'Empezar',
    reopenLabel: '?',
    steps: [
      {
        title: 'Bienvenido a Encuadre',
        body: 'Tu compañero para aprender a usar tu cámara real. No te reemplaza las decisiones, te ayuda a entenderlas.',
      },
      {
        title: 'Elige qué quieres aprender',
        body: 'Cada modo enseña una técnica distinta: retrato exterior, nocturno o de estudio, paisaje, barrido o acción. Elige uno para empezar.',
      },
      {
        title: 'Apunta tu teléfono a la escena',
        body: 'Usamos la luz y el movimiento que capta tu teléfono — nunca se guarda ni se envía nada a ningún servidor.',
      },
      {
        title: 'Lee la explicación en vivo',
        body: 'La tarjeta de abajo te dice qué ajustar en tu cámara real y por qué, no solo qué número usar.',
      },
      {
        title: 'No todo es apuntar la cámara',
        body: 'El banner "Conceptos" en la pantalla principal tiene 19 temas de referencia — desde el triángulo de exposición hasta estilos fotográficos. Vale la pena explorarlo, sobre todo si algo del vocabulario técnico no te queda claro.',
      },
    ],
  },
  lens: {
    label: 'Lente sugerido',
    kitLensLabel: 'Con tu lente de kit',
    retrato: {
      type: 'Fijo (prime), f/1.8 o más abierto si puedes',
      tip: 'A esta distancia focal el rostro no se deforma y el fondo se desenfoca con facilidad.',
      kitLensTip:
        'Usa el extremo más largo del zoom (unos 55mm) y acércate un poco más al sujeto. No vas a tener tanto desenfoque como con f/1.8, pero alejar al sujeto del fondo ayuda casi tanto como la apertura.',
    },
    paisaje: {
      type: 'Gran angular, zoom o fijo — prioriza nitidez de esquina a esquina',
      tip: 'El angular exagera la profundidad y deja entrar más escena de primer a último plano.',
      kitLensTip:
        'Buenas noticias: tu lente de kit ya cubre este rango en su extremo más corto (18mm aprox.). No necesitas nada más para este modo.',
    },
    barrido: {
      type: 'Zoom versátil — te deja reencuadrar rápido mientras sigues al sujeto',
      tip: 'Si tu sujeto pasa lejos de ti, un teleobjetivo (70–200mm) te da más alcance.',
      kitLensTip:
        'Tu lente de kit (18-55mm aprox.) cubre bien este rango — no necesitas cambiarlo para practicar barrido.',
    },
    accion: {
      type: 'Teleobjetivo, idealmente con apertura f/2.8 constante',
      tip: 'La distancia focal larga te deja mantenerte lejos de la acción sin perder encuadre, y una apertura rápida ayuda a compensar la velocidad de obturación alta.',
      kitLensTip:
        'No vas a llegar a 200mm ni a f/2.8, así que acércate físicamente más de lo ideal y sube el ISO más de lo sugerido para compensar la apertura más cerrada. La velocidad de obturación sigue siendo lo más importante para congelar el movimiento.',
    },
    retratoNocturno: {
      type: 'Fijo de 35–50mm, lo más abierto que tengas (f/1.8 o mejor)',
      tip: 'De noche cada parada de apertura cuenta más que de día — un lente rápido y algo más ancho que el de retrato normal capta más luz y funciona mejor en espacios cerrados de la calle.',
      kitLensTip:
        'El lente de kit te va a quedar corto en apertura (f/3.5–5.6) para esta luz — vas a necesitar subir bastante el ISO para compensar. Usa el extremo más abierto disponible y acércate a las fuentes de luz en vez de depender solo del ISO.',
    },
    retratoEstudio: {
      type: 'Fijo de 35–50mm, apertura abierta para separar del fondo',
      tip: 'En interiores el espacio suele ser más chico que afuera — una focal más corta que la de retrato exterior te deja encuadrar sin tener que pegarte a la pared.',
      kitLensTip:
        'El lente de kit te sirve bien aquí porque 35–50mm ya está dentro de su rango — solo usa el número f más bajo disponible en esa distancia focal para tener algo de separación de fondo.',
    },
    enfoque: {
      type: 'Cualquier lente con autofoco confiable — un zoom estándar (24-70mm o el de kit) sirve para practicar',
      tip: 'Aquí la velocidad del autofoco importa más que la apertura — lentes más nuevos o de gama más alta enfocan más rápido y "buscan" menos en poca luz.',
      kitLensTip:
        'Tu lente de kit funciona bien para esto — el resultado depende más del modo que elijas en la cámara (AF-S vs. AF-C) y de dónde pongas el punto de enfoque que del lente en sí.',
    },
  },
  concepts: {
    sectionTitle: 'Conceptos',
    sectionSubtitle:
      'No todo se aprende apuntando la cámara. Estos son los conceptos que te ayudan a encontrar tu propio estilo, no solo a exponer bien.',
    reopenLabel: '📖',
    topics: {
      exposureTriangle: {
        title: 'Triángulo de exposición',
        subtitle: 'ISO, apertura y obturador, en resumen',
      },
      cameraModes: {
        title: 'Modos de la cámara',
        subtitle: 'Qué significan M, A/Av, S/Tv, P y Auto',
      },
      sceneModes: {
        title: 'Modos de escena',
        subtitle: 'Los iconos del dial: carita, montaña, corredor...',
      },
      meteringModes: {
        title: 'Modos de medición',
        subtitle: 'Cómo decide la cámara qué es "correctamente expuesto"',
      },
      exposureCompensation: {
        title: 'Compensación de exposición',
        subtitle: 'Cuando el medidor de tu cámara se equivoca',
      },
      depthOfField: {
        title: 'Profundidad de campo',
        subtitle: 'Cuánto de la foto queda nítido',
      },
      focusModes: {
        title: 'Modos de enfoque',
        subtitle: 'Por qué tus fotos salen borrosas aunque no te muevas',
      },
      whiteBalance: {
        title: 'Balance de blancos',
        subtitle: 'Que el blanco se vea blanco (o no, a propósito)',
      },
      colorTheory: {
        title: 'Teoría del color',
        subtitle: 'Cómo los colores de tu encuadre trabajan entre sí',
      },
      compositionExtra: {
        title: 'Composición, más allá de los tercios',
        subtitle: 'Líneas, encuadre natural, espacio y capas',
      },
      rawVsJpeg: {
        title: 'RAW vs. JPEG',
        subtitle: 'Qué formato disparar y por qué',
      },
      stabilization: {
        title: 'Cómo sostener la cámara',
        subtitle: 'La causa #1 de fotos borrosas, y cómo evitarla',
      },
      longExposure: {
        title: 'Larga exposición',
        subtitle: 'Estelas de luz, agua sedosa, rastros de estrellas',
      },
      histogram: {
        title: 'El histograma',
        subtitle: 'Confirma tu exposición sin confiar en la pantalla',
      },
      flash: {
        title: 'Uso del flash',
        subtitle: 'Modos de flash y cuándo conviene cada uno',
      },
      lightModifiers: {
        title: 'Modificadores de luz',
        subtitle: 'Sombrillas, softbox y paneles — para más adelante',
      },
      goldenBlueHour: {
        title: 'Hora dorada y hora azul',
        subtitle: 'Cuándo pasan y por qué todos las persiguen',
      },
      doubleExposure: {
        title: 'Doble exposición',
        subtitle: 'Dos tomas, una sola imagen',
      },
      styles: {
        title: 'Estilos fotográficos',
        subtitle: 'Un punto de partida para encontrar el tuyo',
      },
    },
    exposureTriangle: {
      intro:
        'ISO, apertura y velocidad de obturación son las tres variables que controlan cuánta luz llega a tu foto — y cada una trae un efecto secundario. Los modos de retrato de esta app tienen un simulador donde los mueves con el dedo y ves cómo se compensan en tiempo real; este es el resumen en texto.',
      sections: [
        {
          heading: 'ISO — sensibilidad a la luz',
          body: 'Entre más alto, más sensible el sensor a la luz — pero el efecto secundario es ruido/grano en la imagen. Súbelo solo lo necesario.',
        },
        {
          heading: 'Apertura — tamaño de la abertura del lente',
          body: 'Se mide en números f (f/1.8, f/8...). Entre más bajo el número, más abierta la apertura, más luz entra — y el efecto secundario es menos profundidad de campo (fondo más desenfocado).',
        },
        {
          heading: 'Obturador — cuánto tiempo entra luz',
          body: 'Velocidades rápidas (1/1000) congelan el movimiento; velocidades lentas (1/15) lo difuminan. El efecto secundario de bajarla demasiado es que hasta el temblor de tu mano se nota.',
        },
      ],
      tip: 'Sube uno, y para mantener la misma exposición tienes que bajar la combinación de los otros dos — por eso es un triángulo, no tres controles sueltos.',
    },
    cameraModes: {
      intro: 'Esas letras en el dial de tu cámara son justo lo que esta app te ayuda a entender de verdad. Cada una te da un nivel distinto de control. Ojo: no todas las marcas usan la misma letra para lo mismo — donde aplica, marcamos con la inicial de tu marca (N, S o C) qué letra buscar en tu dial.',
      items: [
        { name: 'Auto', description: 'La cámara decide todo. Bueno para empezar, pero no aprendes el porqué de nada.' },
        { name: 'P — Programa', description: 'La cámara elige apertura y velocidad; tú controlas ISO, flash y otros ajustes. Un paso arriba de Auto.' },
        {
          name: 'A / Av — Prioridad de apertura',
          description: 'Tú eliges la apertura (controla la profundidad de campo), la cámara ajusta la velocidad. El más usado para retrato y paisaje.',
          brandNote: 'N · S usan "A"  —  C usa "Av"',
        },
        {
          name: 'S / Tv — Prioridad de obturación',
          description: 'Tú eliges la velocidad (controla el movimiento), la cámara ajusta la apertura. El más usado para acción y barrido.',
          brandNote: 'N · S usan "S"  —  C usa "Tv"',
        },
        { name: 'M — Manual', description: 'Tú controlas los tres. Es lo que esta app te está ayudando a hacer con criterio, no de memoria.' },
      ],
      tip: 'Si quieres salir de Auto sin sentirte abrumado, prueba A/Av primero — es donde más control ganas por lo menos que tienes que pensar.',
    },
    sceneModes: {
      intro: 'Además de M/A/S/P, muchas cámaras de entrada tienen iconos en el dial (carita, montaña, corredor...) — cada uno es una combinación automática pensada para una situación específica. Suelen ser lo primero que un principiante toca, antes de llegar a los modos con letras.',
      items: [
        { name: 'Retrato (icono de carita)', description: 'Abre la apertura automáticamente para desenfocar el fondo y separar al sujeto.' },
        { name: 'Paisaje (icono de montaña)', description: 'Cierra la apertura para que todo el encuadre quede nítido, de cerca a lejos.' },
        { name: 'Deporte / Acción (icono de corredor)', description: 'Prioriza una velocidad de obturación rápida para congelar el movimiento.' },
        { name: 'Macro (icono de flor)', description: 'Enfoca lo más cerca posible del lente, para fotografiar detalles pequeños.' },
        { name: 'Noche (icono de estrella o luna)', description: 'Usa velocidades más lentas y a veces flash con sincronización lenta automáticamente.' },
      ],
      tip: 'Estos modos hacen exactamente lo que ya aprendiste a hacer tú mismo en A/Av, S/Tv y M — solo que la cámara decide sola, y quedas limitado a una sola combinación fija por escena.',
    },
    meteringModes: {
      intro: 'Cuando la cámara "decide" una exposición en P, A/Av o S/Tv, algo tiene que medir la luz de la escena primero. El modo de medición es qué parte del encuadre usa la cámara para esa medición.',
      sections: [
        {
          heading: 'Medición matricial / evaluativa',
          body: 'Promedia toda la escena, dándole algo de peso a donde está enfocando. Es la que viene por default y funciona bien la mayoría de las veces.',
        },
        {
          heading: 'Medición ponderada al centro',
          body: 'Prioriza el centro del encuadre e ignora un poco los bordes. Útil cuando el sujeto está centrado y el fondo tiene un brillo muy distinto.',
        },
        {
          heading: 'Medición puntual',
          body: 'Mide solo un punto muy pequeño, normalmente donde está tu punto de enfoque. Para escenas de alto contraste, donde necesitas exponer exactamente para el sujeto sin que el fondo influya.',
        },
      ],
      tip: 'Si tu cámara se sigue equivocando con un fondo muy brillante o muy oscuro incluso después de compensar la exposición, cambiar a medición puntual sobre el sujeto suele arreglarlo más rápido.',
    },
    exposureCompensation: {
      intro: 'El medidor de tu cámara asume que, en promedio, toda escena es un gris medio. Eso falla justo en las escenas donde más te importa: mucha nieve, mucha playa, o un fondo muy oscuro. La compensación de exposición (+/-) es cómo le dices "lo que decidiste está mal, corrige".',
      sections: [
        {
          heading: 'Por qué el medidor se engaña',
          body: 'Una escena con mucho blanco (nieve, playa, pared blanca) hace que el medidor "oscurezca de más" tratando de llevarla a gris — la foto sale gris y apagada si no compensas hacia +. Una escena con mucho negro hace lo contrario: sale sobreexpuesta si no compensas hacia -.',
        },
        {
          heading: 'Cómo usarla',
          body: 'Busca el control +/- (una rueda, un botón, o un ícono en pantalla). Funciona en P, A/Av y S/Tv — en Manual no aplica, porque ahí ya decides tú los tres parámetros directamente.',
        },
        {
          heading: 'Regla práctica',
          body: 'Mucho blanco en el encuadre → compensa positivo (+1, +2). Mucho negro u oscuro → compensa negativo. Escena balanceada → no toques nada.',
        },
      ],
      tip: 'Revisa el histograma después de compensar, no solo la pantalla de la cámara — bajo el sol, la pantalla casi siempre miente y se ve más oscura de lo que realmente está la foto.',
    },
    depthOfField: {
      intro: 'Es cuánto de tu foto se ve nítido de adelante hacia atrás — no solo el sujeto.',
      sections: [
        { heading: 'Apertura', body: 'Más abierta (f/1.8) = menos profundidad de campo, fondo más desenfocado. Más cerrada (f/11) = más profundidad de campo, todo nítido.' },
        { heading: 'Distancia focal', body: 'Entre más zoom (teleobjetivo), menos profundidad de campo con la misma apertura.' },
        { heading: 'Distancia al sujeto', body: 'Entre más cerca estés de tu sujeto, menos profundidad de campo.' },
      ],
      tip: 'Los tres se suman: un lente de 85mm, apertura f/1.8, parado cerca del sujeto, te da el desenfoque de fondo más fuerte posible.',
    },
    focusModes: {
      intro: '"Se me ve borroso" no siempre es un problema de exposición o de mano temblorosa — muchas veces es que la cámara enfocó donde tú no querías. El enfoque tiene sus propios modos, tan importantes como el triángulo de exposición.',
      sections: [
        {
          heading: 'Enfoque de una toma (AF-S / One-Shot)',
          body: 'La cámara enfoca una vez, cuando presionas el disparador a la mitad, y se queda ahí trabada. Ideal para sujetos quietos — retrato, paisaje, producto.',
        },
        {
          heading: 'Enfoque continuo (AF-C / AI Servo)',
          body: 'La cámara sigue ajustando el enfoque todo el tiempo que mantengas el disparador a la mitad, siguiendo al sujeto si se mueve. Para acción y barrido.',
        },
        {
          heading: 'Punto de enfoque único vs. área amplia',
          body: 'En vez de dejar que la cámara adivine qué enfocar, puedes elegir manualmente un solo punto — por ejemplo, sobre el ojo del sujeto. Área amplia es más rápido pero menos preciso.',
        },
        {
          heading: 'Enfoque manual',
          body: 'Girar el anillo del lente tú mismo. Útil cuando el autofoco se confunde: poca luz, vidrio de por medio, patrones repetitivos, o fotografía macro muy cercana.',
        },
      ],
      tip: 'Para retrato, enfoca siempre al ojo más cercano a la cámara — es lo primero que el ojo humano busca al ver una foto de una persona, incluso si el resto sale algo desenfocado.',
    },
    whiteBalance: {
      intro:
        'Cada fuente de luz tiene una temperatura de color distinta: una vela es muy cálida (anaranjada), el cielo nublado es frío (azulado). El balance de blancos le dice a la cámara qué tan cálida o fría es la luz, para que el blanco se vea realmente blanco. Si tu cámara no lo compensa bien, toda la foto sale con un tinte de color que no se ve natural.',
      itemsLabel: 'Presets comunes',
      items: [
        { name: 'Auto', description: 'La cámara adivina — funciona bien casi siempre, pero puede fallar con luz mezclada.' },
        { name: 'Luz de día', description: 'Para exteriores con sol directo, sin corrección extra.' },
        { name: 'Nublado', description: 'Añade un poco de calidez para compensar el tono azulado del cielo cubierto.' },
        { name: 'Sombra', description: 'Añade todavía más calidez — la sombra es más azul que el cielo nublado.' },
        { name: 'Tungsteno', description: 'Para focos incandescentes cálidos — le resta naranja a la imagen.' },
        { name: 'Fluorescente', description: 'Para tubos de luz verdosos — le resta verde a la imagen.' },
      ],
      tip: 'En interiores con luz mezclada (como en retrato nocturno o de estudio) es más fácil ubicar a tu sujeto cerca de una sola fuente dominante que tratar de corregir varios colores de luz mezclados en una sola foto.',
      note:
        'No siempre "corregir" es lo que quieres: dejar un tinte cálido a propósito puede darle a la foto un ambiente acogedor, y un tinte frío puede darle un ambiente distante o nocturno. El balance de blancos también es una herramienta de estilo, no solo de corrección técnica.',
    },
    colorTheory: {
      intro:
        'No necesitas saber pintar para usar el color a tu favor — solo entender un par de relaciones básicas entre colores y aplicarlas al elegir dónde pararte y qué incluir en el encuadre.',
      sections: [
        {
          heading: 'Colores complementarios',
          body: 'Son los que están opuestos en el círculo cromático — naranja y azul, rojo y verde, amarillo y morado. Puestos juntos en una foto, se resaltan mutuamente y crean contraste y energía. Es la combinación más usada en cine (el clásico "teal and orange").',
        },
        {
          heading: 'Colores análogos',
          body: 'Son los que están uno al lado del otro en el círculo — como amarillo, naranja y rojo juntos. Crean armonía y una sensación más calmada, sin el contraste fuerte de los complementarios.',
        },
        {
          heading: 'Cálidos vs. fríos',
          body: 'Los cálidos (rojo, naranja, amarillo) se sienten cercanos, energéticos, acogedores. Los fríos (azul, verde, morado) se sienten distantes, calmados, a veces tristes o nocturnos. La hora dorada es cálida; una noche de ciudad con luces LED es fría.',
        },
      ],
      tip: 'Antes de disparar, busca cuál es el color dominante de tu escena y decide si quieres que el resto la acompañe (armonía) o contraste con él a propósito (energía) — en vez de que varios colores compitan sin que tú lo hayas decidido.',
    },
    compositionExtra: {
      intro: 'La regla de tercios es el punto de partida, no el techo. Estos son otros recursos que puedes combinar con ella.',
      sections: [
        { heading: 'Líneas guía', body: 'Caminos, barandales, sombras — cualquier línea que lleve el ojo hacia tu sujeto.' },
        { heading: 'Encuadre natural', body: 'Usa algo en la escena (una puerta, ramas, un arco) para "enmarcar" a tu sujeto dentro de la foto.' },
        { heading: 'Espacio negativo', body: 'Deja zonas vacías a propósito — le da al sujeto lugar para "respirar" y crea sensación de minimalismo o soledad.' },
        { heading: 'Capas de profundidad', body: 'Algo en primer plano, algo en plano medio, algo de fondo — le da a la foto sensación de espacio en vez de verse plana.' },
      ],
      tip: 'No trates de usar todos a la vez. Elige uno que sirva a lo que quieres contar con esa foto en particular.',
    },
    rawVsJpeg: {
      intro: 'Es el formato en el que tu cámara guarda la foto, y cambia cuánto puedes corregir después sin perder calidad.',
      items: [
        { name: 'JPEG', description: 'La cámara procesa y comprime la imagen automáticamente. Archivos más chicos, listos para compartir, pero con menos margen para corregir exposición o color después.' },
        { name: 'RAW', description: 'Guarda toda la información que captó el sensor, sin procesar. Archivos más pesados, necesitas editarlos en una app antes de compartirlos, pero puedes corregir mucho más sin perder calidad.' },
      ],
      tip: 'Si tu cámara lo permite, dispara en RAW + JPEG al mismo tiempo: tienes el JPEG listo para compartir ya, y el RAW por si quieres editar esa foto en serio después.',
    },
    stabilization: {
      intro: 'La causa más común de fotos borrosas en principiantes no es el enfoque — es el movimiento de las manos.',
      sections: [
        { heading: 'Codos pegados al cuerpo', body: 'No en el aire — apóyalos contra tu propio torso para reducir el temblor.' },
        { heading: 'Respira y dispara en la pausa', body: 'Exhala y toma la foto en el momento natural de pausa entre respiraciones.' },
        { heading: 'Regla básica de velocidad mínima', body: 'Tu velocidad de obturación no debería ser más lenta que 1 sobre tu distancia focal (con 50mm, no más lento que 1/50) sin apoyo. Si tu cámara es de sensor recortado (APS-C, la mayoría de las cámaras de entrada), multiplica la focal por 1.5 antes de sacar la cuenta — un 50mm en esa cámara se comporta como 75mm para esta regla.' },
        { heading: 'Busca apoyo con poca luz', body: 'Una pared, mesa o barandal ayuda más que solo subir el ISO al máximo.' },
      ],
      tip: 'Esto es justo lo que el aviso de estabilidad del modo Retrato nocturno está vigilando por ti.',
    },
    longExposure: {
      intro: 'Cuando el obturador se queda abierto más de uno o dos segundos, todo lo que se mueve en la escena se difumina mientras lo que está quieto queda nítido — es la técnica detrás de estelas de luz, cascadas sedosas y rastros de estrellas.',
      sections: [
        {
          heading: 'Trípode obligatorio',
          body: 'A partir de aproximadamente 1 segundo, ni la mano más firme evita que la foto salga movida. Sin un apoyo completamente fijo, esta técnica no funciona — es la otra cara de lo que viste en "Cómo sostener la cámara".',
        },
        {
          heading: 'Modo Bulb (B)',
          body: 'Para exposiciones de más de 30 segundos (donde topa el modo M en la mayoría de las cámaras), el modo Bulb mantiene el obturador abierto mientras mantengas presionado el disparador. Usa un disparador remoto o el temporizador de la cámara para no tocarla directamente y evitar vibración.',
        },
        {
          heading: 'Filtro ND (densidad neutra)',
          body: 'De día hay demasiada luz para exponer varios segundos sin quemar la foto. Un filtro ND oscurece el lente como lentes de sol para tu cámara, dejándote usar velocidades lentas incluso con sol de por medio.',
        },
        {
          heading: 'ISO al mínimo',
          body: 'Con el obturador abierto tanto tiempo no necesitas ayuda del ISO — mantenlo en el valor base de tu cámara (normalmente 100) para el menor ruido posible.',
        },
        {
          heading: 'Tiempos típicos por efecto',
          body: 'Estelas de autos de noche: 10-30 seg. Cascada o río con efecto sedoso: 1-4 seg. Nubes con movimiento visible: 30 seg-2 min. Rastros de estrellas: 15-25 min, o varias fotos de 30 seg combinadas después en edición.',
        },
      ],
      tip: 'Empieza con algo simple: agua corriendo de día con un filtro ND, o luces de autos de noche sin necesitar filtro — no hace falta esperar a una noche estrellada para tu primera larga exposición.',
    },
    histogram: {
      intro: 'Es una gráfica que muestra qué tan bien expuesta está tu foto, sin depender de qué tan brillante se ve la pantalla de tu cámara bajo el sol.',
      sections: [
        { heading: 'Eje horizontal', body: 'Va de negro puro (izquierda) a blanco puro (derecha).' },
        { heading: 'Eje vertical', body: 'Muestra cuántos píxeles de tu foto tienen ese tono.' },
        { heading: 'Cómo leerlo', body: 'Si la gráfica se amontona pegada a la izquierda, tu foto está subexpuesta. Pegada a la derecha, sobreexpuesta.' },
      ],
      tip: 'No existe una forma "correcta" de histograma — una escena nocturna se amontona a la izquierda de forma normal. Úsalo para confirmar que no perdiste detalle sin querer, no para perseguir una forma perfecta.',
    },
    flash: {
      intro:
        'El flash tiene mala fama entre principiantes porque mal usado se ve plano y artificial — pero bien usado resuelve problemas que ni subir el ISO al máximo puede resolver, sobre todo con sombras duras o contraluz.',
      sections: [
        {
          heading: 'Flash automático',
          body: 'La cámara decide si dispara según la luz que detecta. Cómodo, pero impredecible: a veces dispara de más (arruinando un fondo que ya se veía bien) y a veces no dispara cuando sí ayudaría (contraluz).',
        },
        {
          heading: 'Flash de relleno (fill flash)',
          body: 'Fuerza el flash aunque haya buena luz, para "rellenar" sombras duras — sol de mediodía sobre el rostro, o un sujeto a contraluz con el fondo muy brillante. Es el uso de flash más subestimado por principiantes.',
        },
        {
          heading: 'Flash desactivado',
          body: 'Apaga el flash por completo. Úsalo cuando la luz ambiente ya alcanza, en lugares donde el flash molesta o está prohibido (conciertos, museos, teatros), o cuando prefieres subir el ISO antes que aplanar la escena con luz directa.',
        },
        {
          heading: 'Sincronización lenta (slow sync)',
          body: 'Combina el flash con una velocidad de obturación lenta: el flash congela al sujeto, pero el obturador sigue abierto el tiempo suficiente para captar la luz ambiente de fondo. Es lo que evita que el fondo se vea negro en una foto nocturna con flash.',
        },
        {
          heading: 'Flash rebotado (bounce)',
          body: 'Si tu flash es externo y se puede girar, apúntalo al techo o una pared cercana en vez de directo al sujeto. La luz rebotada llega mucho más suave, sin la sombra dura característica del flash directo.',
        },
      ],
      tip: 'Regla general: si estás cerca de tu sujeto (menos de 3-4 metros) y hay sombras duras o contraluz, el flash de relleno ayuda más que estorba. Si estás lejos o de noche en exteriores, el flash casi nunca llega lo suficientemente lejos — ahí es mejor subir el ISO o buscar una fuente de luz real, como en el modo Retrato nocturno.',
    },
    lightModifiers: {
      intro:
        'Todo esto es equipo de iluminación externa — no lo necesitas para empezar. El modo Retrato en estudio ya te enseña a lograr buenos resultados con solo una ventana o una lámpara. Esta es la referencia para cuando quieras dar el siguiente paso con un flash externo o una luz continua.',
      items: [
        {
          name: 'Sombrilla traslúcida',
          description: 'La luz se dispara a través de ella. Difunde la luz en un área amplia y suave — fácil de transportar, buena para retratos grupales.',
        },
        {
          name: 'Sombrilla reflectiva',
          description: 'La luz rebota dentro de ella (forrada en plata o blanco) antes de llegar al sujeto. Más controlada que la traslúcida, con más contraste.',
        },
        {
          name: 'Softbox',
          description: 'Una caja con difusor al frente. Da la luz más suave y controlada de todas — el estándar para retrato de estudio.',
        },
        {
          name: 'Beauty dish',
          description: 'Un plato reflector poco profundo. Luz más dura que un softbox pero con más textura y brillo — muy usado en moda y belleza.',
        },
        {
          name: 'Panel de panal (grid)',
          description: 'Se coloca sobre otro modificador para estrechar el haz de luz y evitar que se derrame donde no quieres — controla la dirección, no la suavidad.',
        },
        {
          name: 'Snoot',
          description: 'Un cono o tubo que concentra la luz en un círculo muy pequeño — para iluminar un solo detalle y dejar todo lo demás en sombra.',
        },
        {
          name: 'Reflector',
          description: 'No emite luz, la rebota. El más barato y versátil — un panel blanco, plateado o dorado que rellena sombras usando la luz que ya tienes.',
        },
        {
          name: 'Panel difusor',
          description: 'Se coloca entre la fuente de luz y el sujeto (no en el flash) para suavizar cualquier luz dura, incluyendo el sol directo.',
        },
      ],
      tip: 'Antes de comprar cualquiera de estos, un reflector improvisado (una hoja de poliestireno blanca, o hasta una sábana) hace el 80% del trabajo por una fracción del costo — la misma lógica del modo Retrato en estudio: usa lo que ya tienes antes de comprar equipo nuevo.',
    },
    goldenBlueHour: {
      intro: 'El modo Paisaje de esta app ya menciona la "hora dorada" — esta es la explicación completa de cuándo pasa y por qué tantos fotógrafos organizan su día alrededor de ella.',
      sections: [
        {
          heading: 'Hora dorada',
          body: 'La hora aproximada después del amanecer y antes del atardecer, cuando el sol está bajo en el cielo. Luz cálida, suave, con sombras largas — la favorita para retrato y paisaje, y la razón por la que casi nadie profesional dispara al mediodía si lo puede evitar.',
        },
        {
          heading: 'Hora azul',
          body: 'Los 20-30 minutos justo antes del amanecer o después del atardecer, cuando el sol ya no se ve pero el cielo todavía guarda luz. Tono azul profundo, muy usada en fotografía de ciudad y arquitectura, porque las luces artificiales ya encendidas contrastan bien contra el cielo.',
        },
        {
          heading: 'Cómo encontrar la hora exacta',
          body: 'Varía por ubicación y época del año — no es siempre "6pm". El clima de tu teléfono suele mostrar la hora de atardecer, y apps especializadas como PhotoPills calculan también la hora dorada y azul exactas para donde estés parado.',
        },
      ],
      tip: 'La hora dorada dura casi una hora; la hora azul dura mucho menos, unos 20-30 minutos. Si vas a salir por la hora azul, llega con tiempo — se acaba rápido y no avisa.',
    },
    doubleExposure: {
      intro: 'Combinar dos tomas distintas en un solo cuadro — una silueta con una textura, un rostro con un paisaje — para crear una imagen que ninguna de las dos fotos por separado podría contar.',
      sections: [
        {
          heading: 'Modo multiexposición en cámara',
          body: 'Muchas cámaras (revisa el menú de disparo) tienen un modo de exposición múltiple integrado que combina 2 o más tomas automáticamente usando un modo de mezcla (aditivo, promedio, oscurecer, aclarar). Dispara ambas tomas seguidas, sin mover la cámara, si quieres que encajen en el mismo encuadre.',
        },
        {
          heading: 'La regla del fondo oscuro y el sujeto claro',
          body: 'La primera toma funciona mejor con un fondo oscuro o plano y un sujeto bien iluminado — una silueta, un rostro contra un fondo negro. La segunda toma (la textura, el paisaje, el patrón) va a aparecer sobre todo en las zonas oscuras de la primera.',
        },
        {
          heading: 'Si tu cámara no tiene el modo',
          body: 'Se puede lograr el mismo efecto combinando dos fotos después en una app de edición, usando un modo de fusión como "Aclarar" o "Pantalla" — da más control que hacerlo en cámara, a costa de no ver el resultado en el momento.',
        },
      ],
      tip: 'El resultado es bastante impredecible al principio — tómalo como algo para experimentar y repetir varias veces, no como algo que sale perfecto al primer intento.',
    },
    styles: {
      intro:
        'Esto no son reglas, son puntos de partida. Prueba varios, mezcla lo que te guste de cada uno, y con el tiempo vas a notar hacia cuál te inclinas naturalmente — eso es tu estilo.',
      items: [
        {
          name: 'Minimalista',
          description: 'Composición simple, mucho espacio vacío, pocos elementos, colores neutros.',
          extra: 'Encuadra con la regla de tercios dejando la mayor parte del cuadro vacía a propósito. Apertura media, nada que compita con el sujeto.',
        },
        {
          name: 'Alto contraste',
          description: 'Sombras profundas, luces marcadas, a menudo blanco y negro.',
          extra: 'Busca luz dura (sol directo, una sola fuente fuerte). ISO bajo. Funciona muy bien con el modo Retrato nocturno.',
        },
        {
          name: 'Cálido y nostálgico',
          description: 'Tonos naranja y amarillo, luz suave, sensación de recuerdo.',
          extra: 'Dispara en hora dorada. Balance de blancos en "Nublado" incluso con sol, para exagerar la calidez.',
        },
        {
          name: 'Vibrante y saturado',
          description: 'Colores intensos y llamativos, ideal para contenido que necesita destacar.',
          extra: 'Buena luz plana (no muy dura), colores análogos o complementarios bien definidos en la escena.',
        },
        {
          name: 'Cinematográfico',
          description: 'Colores desaturados con un tinte de color, poca profundidad de campo.',
          extra: 'Apertura abierta (f/1.8–f/2.8), un color complementario dominante (fondo azulado, piel cálida), encuadre deliberado.',
        },
        {
          name: 'Documental / natural',
          description: 'Luz disponible sin modificar, colores realistas, momentos espontáneos.',
          extra: 'Modo Auto de balance de blancos, luz que ya está ahí, sin pedirle a nadie que pose.',
        },
      ],
    },
  },
  paywall: {
    badge: 'PRO',
    title: 'Modo Pro',
    subtitle:
      'Barrido, retrato de acción, retrato nocturno, retrato en estudio y enfoque — desbloqueo único, para siempre, sin suscripción.',
    unlockButton: 'Desbloquear Pro',
    restoreButton: 'Restaurar compra',
    purchasing: 'Procesando compra…',
    restoring: 'Restaurando…',
    purchaseError: 'No se pudo completar la compra. Probá de nuevo.',
    restoreNotFound: 'No encontramos ninguna compra de Pro para restaurar.',
    restoreSuccess: '¡Listo! Ya tenés Pro.',
    priceUnavailable: 'Precio no disponible',
  },
  language: { es: 'ES', en: 'EN', pt: 'PT' },
};

export type Translations = typeof es;

const en: Translations = {
  appName: 'Encuadre',
  modeSelect: {
    subtitle:
      "Pick what you want to learn to do with your camera. Point your phone at your scene and I'll explain live what's happening with the light.",
  },
  common: {
    back: '‹ Modes',
    close: 'Close',
    continue: 'Continue',
  },
  a11y: {
    backToModes: 'Back to modes',
    openTutorial: 'Open tutorial',
    switchToEnglish: 'Switch language to English',
    switchToSpanish: 'Switch language to Spanish',
    switchToPortuguese: 'Switch language to Portuguese',
    openConcepts: 'Open Concepts',
    closeExposureTriangle: 'Close the exposure triangle',
    toggleKitLensTip: 'Show or hide the kit lens tip',
    isoSlider: 'ISO slider',
    apertureSlider: 'Aperture slider',
    shutterSlider: 'Shutter speed slider',
    lockedMode: 'Pro mode, locked',
    closePaywall: 'Close Pro screen',
  },
  permission: {
    title: 'Encuadre needs your camera',
    body: "We only use it to see the scene live while explaining light and motion. Nothing is ever saved or sent to any server.",
    button: 'Continue',
    settingsTitle: 'Camera permission is off',
    settingsBody: "You already declined it once, so the system won't ask automatically again. Turn it on from Settings to use Encuadre.",
    settingsButton: 'Open Settings',
  },
  modes: {
    retrato: {
      title: 'Outdoor portrait',
      subtitle: 'Separate your subject from the background',
      description:
        "Point at the spot where you'll shoot the portrait. I'll explain how to balance aperture and ISO for the light right now, with composition guidance included.",
    },
    paisaje: {
      title: 'Landscape / golden hour',
      subtitle: 'The whole scene in focus',
      description:
        "Point at the landscape. I'll explain how to keep everything sharp, from foreground to background, with the current light.",
    },
    barrido: {
      title: 'Panning',
      subtitle: 'Blurred background, sharp subject',
      description:
        "Move your phone as if you were following your subject. I'll sense how fast and steady your motion is to suggest a shutter speed.",
    },
    accion: {
      title: 'Action portrait',
      subtitle: 'Freeze the motion',
      description:
        "Your phone can't measure how fast your subject is moving, so tell me yourself and I'll combine that with the current light.",
    },
    retratoNocturno: {
      title: 'Night portrait',
      subtitle: 'Work with low light without losing the subject',
      description:
        "Point at the night scene. I'll explain how to use whatever light sources are around, and when ISO should carry the weight instead of the shutter.",
    },
    retratoEstudio: {
      title: 'Studio / indoor portrait',
      subtitle: 'Control the direction of the light',
      description:
        "Point at your subject indoors. I'll explain how to use a window or your light source like a studio, no specialized gear needed.",
    },
    enfoque: {
      title: 'Focus',
      subtitle: 'Pick the right focus mode',
      description:
        "Point at your subject and tell me how fast it's moving. I'll help you choose between single-shot or continuous focus, and warn you if the light is going to make it hard for your camera to focus.",
    },
  },
  lightBands: {
    muy_oscuro: 'Very dark (night, unlit indoors)',
    interior: 'Indoors with light',
    exterior_nublado: 'Overcast outdoors / shade',
    sol_directo: 'Direct sunlight',
  },
  lightPicker: { label: 'How is the light right now?' },
  subjectSpeed: {
    label: 'How fast is your subject moving?',
    lento: 'Slow (walking)',
    medio: 'Medium (running)',
    rapido: 'Fast (vehicle, sports)',
  },
  chips: { iso: 'ISO', aperture: 'Aperture', shutter: 'Shutter', focus: 'Focus' },
  guidance: {
    retrato: {
      oscuro: {
        headline: 'Low light: prioritize a wide aperture',
        detail:
          'With this light, a wide aperture (low f-number) lets in more light and also separates your subject from the background. Only raise ISO as much as needed so shutter speed does not drop too far and blur the shot.',
      },
      medio: {
        headline: 'Comfortable light for portraits',
        detail:
          "With this light you can pick your aperture based on how much background blur you want, without worrying too much about ISO. Wider aperture = more background blur.",
      },
      brillante: {
        headline: 'Lots of light: watch for harsh shadows',
        detail:
          'In direct sun, light can be harsh on the face. Close the aperture a bit to avoid overexposing, and look for soft shade or side light if you can.',
      },
    },
    paisaje: {
      oscuro: {
        headline: "Low light: you'll need steady support",
        detail:
          'For landscapes you almost always want a closed aperture (everything in focus), but in low light that means slow shutter speeds. Brace your elbow or use a tripod/fixed surface so it does not come out blurry.',
      },
      medio: {
        headline: 'Great light for golden hour',
        detail:
          'This soft light is ideal for landscapes. Close the aperture so the whole frame stays sharp, from near to far, and keep ISO low to avoid noise.',
      },
      brillante: {
        headline: 'High sun: strong contrast',
        detail:
          'At this time the contrast between sky and shadows is high. Close the aperture quite a bit for edge-to-edge sharpness and watch that the sky does not blow out.',
      },
    },
    barrido: {
      detail:
        'The key to panning is a slow shutter speed combined with smooth motion that follows the subject at its own speed. The slower the shutter, the more the background blurs — but the easier it is for the subject to blur too if your hand does not track well.',
      headlineSteady: "Barely any motion detected yet",
      headlineFast: 'Good panning rhythm detected',
      headlineNormal: 'Keep moving the phone to find the rhythm',
    },
    accion: {
      detail:
        'To freeze motion, shutter speed is what matters most. The faster your subject moves, the faster a shutter speed you need — and that will ask you to raise ISO or open the aperture to make up for the light you lose.',
      headlineLento: 'Slow subject: prioritize shutter speed',
      headlineMedio: 'Medium subject: prioritize shutter speed',
      headlineRapido: 'Fast subject: prioritize shutter speed',
    },
    retratoNocturno: {
      oscuro: {
        headline: "Very low light: prioritize keeping your subject still",
        detail:
          'In this darkness almost all your light will come from a single point source (a lamppost, a window, a sign). Move your subject toward that source instead of just maxing out ISO. Keep the shutter at 1/60 or faster so the person doesn\'t blur — let ISO carry what\'s missing, not the shutter.',
      },
      medio: {
        headline: 'Urban night light: watch your white balance',
        detail:
          'Street lights mix different colors (warm sodium, cool LED). If you can, place your subject near a single dominant light source to simplify skin tone.',
      },
      brillante: {
        headline: 'Well-lit night scene',
        detail:
          'With signs or storefronts nearby you have enough light to work comfortably. Watch that colored light doesn\'t tint the skin too much — move a few steps to find the angle with the best color.',
      },
      shakeWarning:
        "I'm sensing quite a bit of phone movement — brace against something solid or hold your elbow against your body; with this light any shake shows up much more.",
    },
    retratoEstudio: {
      oscuro: {
        headline: 'Very dim: you will need more light',
        detail:
          'Dark indoor rooms rarely have enough ambient light. Move your subject toward a window, or use a lamp or ring light as your main source — raising ISO alone without a real light source will look very noisy.',
      },
      medio: {
        headline: 'Good studio or window light',
        detail:
          'This is a comfortable light for indoor portraits. Place the window or light source to the side of the subject, at about a 45° angle, instead of straight on — that gives the face volume instead of looking flat.',
      },
      brillante: {
        headline: 'Strong direct light near a window',
        detail:
          'Near a window with direct sun, light can be very contrasty. Use a thin curtain, white paper, or any translucent fabric to soften it before it reaches your subject.',
      },
    },
    enfoque: {
      lento: {
        headline: 'Still subject: use single-shot focus (AF-S)',
        detail:
          "With a still subject, single-shot focus (AF-S / One-Shot) is more precise: the camera focuses once, when you half-press the shutter, and locks there. Pick a single focus point over the eye or the most important part of the subject instead of letting the camera guess.",
      },
      medio: {
        headline: 'Moving subject: consider continuous focus (AF-C)',
        detail:
          "With moderate movement, continuous focus (AF-C / AI Servo) keeps adjusting while you hold the shutter half-pressed, so you don't lose the subject if it shifts. If your camera allows it, use a smaller focus point for more precision.",
      },
      rapido: {
        headline: 'Fast subject: continuous focus (AF-C) is nearly mandatory',
        detail:
          "With a fast subject, single-shot focus will fall behind. Use continuous focus (AF-C / AI Servo), and consider a wider focus area so the camera doesn't lose the subject between individual points.",
      },
      lowLightWarning:
        'In this little light, autofocus can fail or "hunt" without locking on — aim at a high-contrast edge near your subject, or switch to manual focus if your camera allows it.',
    },
  },
  exposureTriangle: {
    openButton: 'See the triangle live',
    title: 'Exposure triangle',
    hint: 'Move any control. The other two adjust themselves to keep the same exposure — so you see the real trade-off between them.',
    simulationDisclosure: "Illustrative simulation: your actual camera doesn't change. The edge blur represents the effect of aperture — it doesn't depend on where your subject is in the frame.",
    isoHint: 'Raises image noise',
    apertureHint: 'Controls how blurred the background gets',
    shutterHint: 'Freezes or blurs motion',
    correctExposure: 'Correct exposure — same as when you opened the triangle',
    underExposedOne: 'Would look 1 stop darker',
    underExposedMany: 'Would look {n} stops darker',
    overExposedOne: 'Would look 1 stop brighter',
    overExposedMany: 'Would look {n} stops brighter',
    limitReachedHint: "One of the controls hit its limit and can't compensate any further — this is how the real photo would actually be affected.",
  },
  tutorial: {
    title: 'How to use Encuadre',
    skip: 'Skip',
    next: 'Next',
    start: 'Get started',
    reopenLabel: '?',
    steps: [
      {
        title: 'Welcome to Encuadre',
        body: "Your companion for learning to use your real camera. It doesn't replace your decisions, it helps you understand them.",
      },
      {
        title: 'Choose what to learn',
        body: 'Each mode teaches a different technique: outdoor, night, or studio portrait, landscape, panning, or action. Pick one to start.',
      },
      {
        title: 'Point your phone at the scene',
        body: 'We use the light and motion your phone senses — nothing is ever saved or sent to any server.',
      },
      {
        title: 'Read the live explanation',
        body: 'The card at the bottom tells you what to adjust on your real camera and why, not just which number to use.',
      },
      {
        title: "It's not all about pointing the camera",
        body: 'The "Concepts" banner on the main screen has 19 reference topics — from the exposure triangle to photographic styles. Worth exploring, especially if any of the technical vocabulary isn\'t clear yet.',
      },
    ],
  },
  lens: {
    label: 'Suggested lens',
    kitLensLabel: 'With your kit lens',
    retrato: {
      type: 'Prime lens, f/1.8 or wider if you can',
      tip: "At this focal length the face doesn't distort and the background blurs easily.",
      kitLensTip:
        "Use the long end of your zoom (around 55mm) and step a bit closer to your subject. You won't get as much blur as with f/1.8, but putting distance between subject and background helps almost as much as aperture does.",
    },
    paisaje: {
      type: 'Wide-angle, zoom or prime — prioritize corner-to-corner sharpness',
      tip: 'The wide angle exaggerates depth and fits more of the scene from foreground to background.',
      kitLensTip:
        'Good news: your kit lens already covers this range at its shortest end (around 18mm). You do not need anything else for this mode.',
    },
    barrido: {
      type: 'Versatile zoom — lets you reframe quickly while tracking the subject',
      tip: 'If your subject passes far from you, a telephoto (70–200mm) gives more reach.',
      kitLensTip:
        'Your kit lens (around 18-55mm) covers this range well — no need to swap it to practice panning.',
    },
    accion: {
      type: 'Telephoto, ideally a constant f/2.8 aperture',
      tip: 'The long focal length lets you stay clear of the action without losing framing, and a fast aperture helps offset the high shutter speed.',
      kitLensTip:
        "You won't reach 200mm or f/2.8, so get physically closer than ideal and raise ISO more than suggested to make up for the narrower aperture. Shutter speed still matters most for freezing motion.",
    },
    retratoNocturno: {
      type: 'A 35–50mm prime, as wide as you have (f/1.8 or better)',
      tip: 'At night every stop of aperture matters more than in daylight — a fast, slightly wider lens than your usual portrait lens gathers more light and works better in tight street spaces.',
      kitLensTip:
        "Your kit lens's aperture (f/3.5–5.6) will fall short for this light — you'll need to raise ISO quite a bit to compensate. Use the widest aperture available and move toward light sources instead of relying on ISO alone.",
    },
    retratoEstudio: {
      type: 'A 35–50mm prime, wide aperture to separate from the background',
      tip: 'Indoor spaces are usually tighter than outdoor ones — a shorter focal length than outdoor portraits lets you frame without backing into a wall.',
      kitLensTip:
        'Your kit lens works well here since 35–50mm is already within its range — just use the lowest f-number available at that focal length to get some background separation.',
    },
    enfoque: {
      type: 'Any lens with reliable autofocus — a standard zoom (24-70mm or your kit lens) works fine to practice',
      tip: "Autofocus speed matters more than aperture here — newer or higher-end lenses focus faster and 'hunt' less in low light.",
      kitLensTip:
        "Your kit lens works fine for this — the result depends more on the mode you pick on the camera (AF-S vs. AF-C) and where you place the focus point than on the lens itself.",
    },
  },
  concepts: {
    sectionTitle: 'Concepts',
    sectionSubtitle:
      "Not everything is learned by pointing the camera. These are the concepts that help you find your own style, not just expose correctly.",
    reopenLabel: '📖',
    topics: {
      exposureTriangle: {
        title: 'Exposure triangle',
        subtitle: 'ISO, aperture and shutter, in short',
      },
      cameraModes: {
        title: 'Camera modes',
        subtitle: 'What M, A/Av, S/Tv, P and Auto mean',
      },
      sceneModes: {
        title: 'Scene modes',
        subtitle: 'The dial icons: face, mountain, runner...',
      },
      meteringModes: {
        title: 'Metering modes',
        subtitle: 'How the camera decides what "correctly exposed" means',
      },
      exposureCompensation: {
        title: 'Exposure compensation',
        subtitle: "When your camera's meter gets it wrong",
      },
      depthOfField: {
        title: 'Depth of field',
        subtitle: 'How much of the photo stays sharp',
      },
      focusModes: {
        title: 'Focus modes',
        subtitle: "Why your photos come out blurry even when you didn't move",
      },
      whiteBalance: {
        title: 'White balance',
        subtitle: 'Making white actually look white (or not, on purpose)',
      },
      colorTheory: {
        title: 'Color theory',
        subtitle: 'How the colors in your frame work together',
      },
      compositionExtra: {
        title: 'Composition, beyond thirds',
        subtitle: 'Lines, natural framing, space and layers',
      },
      rawVsJpeg: {
        title: 'RAW vs. JPEG',
        subtitle: 'Which format to shoot and why',
      },
      stabilization: {
        title: 'How to hold the camera',
        subtitle: 'Blurry-photo cause #1, and how to avoid it',
      },
      longExposure: {
        title: 'Long exposure',
        subtitle: 'Light trails, silky water, star trails',
      },
      histogram: {
        title: 'The histogram',
        subtitle: 'Confirm your exposure without trusting the screen',
      },
      flash: {
        title: 'Using flash',
        subtitle: 'Flash modes and when each one helps',
      },
      lightModifiers: {
        title: 'Light modifiers',
        subtitle: 'Umbrellas, softboxes, grids — for later on',
      },
      goldenBlueHour: {
        title: 'Golden hour and blue hour',
        subtitle: 'When they happen and why everyone chases them',
      },
      doubleExposure: {
        title: 'Double exposure',
        subtitle: 'Two shots, one image',
      },
      styles: {
        title: 'Photographic styles',
        subtitle: 'A starting point for finding your own',
      },
    },
    exposureTriangle: {
      intro:
        "ISO, aperture, and shutter speed are the three variables that control how much light reaches your photo — and each brings a side effect. The portrait modes in this app have a simulator where you move them with your finger and see them compensate in real time; this is the text summary.",
      sections: [
        {
          heading: 'ISO — sensitivity to light',
          body: 'The higher it goes, the more sensitive the sensor is to light — but the side effect is noise/grain in the image. Raise it only as much as you need.',
        },
        {
          heading: 'Aperture — the size of the lens opening',
          body: "Measured in f-numbers (f/1.8, f/8...). The lower the number, the wider the opening, the more light comes in — and the side effect is less depth of field (blurrier background).",
        },
        {
          heading: 'Shutter — how long light comes in',
          body: 'Fast speeds (1/1000) freeze motion; slow speeds (1/15) blur it. The side effect of going too slow is that even your hand shake shows up.',
        },
      ],
      tip: 'Raise one, and to keep the same exposure you have to lower the combination of the other two — that\'s why it\'s a triangle, not three separate controls.',
    },
    cameraModes: {
      intro: "Those letters on your camera's dial are exactly what this app helps you truly understand. Each one gives you a different level of control. Heads up: not every brand uses the same letter for the same thing — where it matters, we mark your brand's initial (N, S, or C) so you know which letter to look for on your own dial.",
      items: [
        { name: 'Auto', description: 'The camera decides everything. Good to start with, but you never learn the why behind anything.' },
        { name: 'P — Program', description: "The camera picks aperture and shutter speed; you control ISO, flash, and other settings. One step up from Auto." },
        {
          name: 'A / Av — Aperture priority',
          description: 'You pick the aperture (controls depth of field), the camera adjusts the shutter speed. The most used for portrait and landscape.',
          brandNote: 'N · S use "A"  —  C uses "Av"',
        },
        {
          name: 'S / Tv — Shutter priority',
          description: 'You pick the shutter speed (controls motion), the camera adjusts the aperture. The most used for action and panning.',
          brandNote: 'N · S use "S"  —  C uses "Tv"',
        },
        { name: 'M — Manual', description: "You control all three. This is exactly what this app is helping you do with judgment, not from memory." },
      ],
      tip: "If you want to move past Auto without feeling overwhelmed, try A/Av first — it's where you gain the most control for the least you have to think about.",
    },
    sceneModes: {
      intro: "Beyond M/A/S/P, many entry-level cameras have icons on the dial (a face, a mountain, a runner...) — each one is a fixed automatic combination built for a specific situation. They're often the first thing a beginner touches, before ever reaching the lettered modes.",
      items: [
        { name: 'Portrait (face icon)', description: 'Automatically opens the aperture to blur the background and separate the subject.' },
        { name: 'Landscape (mountain icon)', description: 'Closes the aperture so the whole frame stays sharp, from near to far.' },
        { name: 'Sports / Action (runner icon)', description: 'Prioritizes a fast shutter speed to freeze motion.' },
        { name: 'Macro (flower icon)', description: 'Focuses as close to the lens as possible, for photographing small details.' },
        { name: 'Night (star or moon icon)', description: 'Uses slower shutter speeds and sometimes flash with slow sync, automatically.' },
      ],
      tip: "These modes do exactly what you already learned to do yourself in A/Av, S/Tv, and M — except the camera decides alone, and you're locked into one fixed combination per scene.",
    },
    meteringModes: {
      intro: "When the camera 'decides' an exposure in P, A/Av, or S/Tv, something has to measure the scene's light first. The metering mode determines which part of the frame the camera uses for that measurement.",
      sections: [
        {
          heading: 'Evaluative / matrix metering',
          body: "Averages the whole scene, giving some extra weight to wherever you're focusing. This is the default and works well most of the time.",
        },
        {
          heading: 'Center-weighted metering',
          body: 'Prioritizes the center of the frame and mostly ignores the edges. Useful when the subject is centered and the background has very different brightness.',
        },
        {
          heading: 'Spot metering',
          body: 'Measures only a tiny point, usually wherever your focus point is. For high-contrast scenes, where you need to expose exactly for the subject without the background influencing it.',
        },
      ],
      tip: "If your camera keeps getting fooled by a very bright or very dark background even after compensating exposure, switching to spot metering on the subject usually fixes it faster.",
    },
    exposureCompensation: {
      intro: "Your camera's meter assumes that, on average, every scene is a medium gray. That fails exactly in the scenes you care about most: lots of snow, lots of beach, or a very dark background. Exposure compensation (+/-) is how you tell it \"what you decided is wrong, fix it.\"",
      sections: [
        {
          heading: 'Why the meter gets fooled',
          body: "A scene with a lot of white (snow, a beach, a white wall) makes the meter darken it too much trying to pull it toward gray — the photo comes out gray and flat if you don't compensate toward +. A scene with a lot of black does the opposite: it comes out overexposed if you don't compensate toward -.",
        },
        {
          heading: 'How to use it',
          body: "Look for the +/- control (a dial, a button, or an on-screen icon). It works in P, A/Av, and S/Tv — it doesn't apply in Manual, since there you're already deciding all three parameters directly.",
        },
        {
          heading: 'Practical rule',
          body: 'Lots of white in the frame → compensate positive (+1, +2). Lots of black or dark → compensate negative. Balanced scene → leave it alone.',
        },
      ],
      tip: "Check the histogram after compensating, not just the camera screen — under the sun, the screen almost always lies and looks darker than the photo actually is.",
    },
    depthOfField: {
      intro: 'It\'s how much of your photo looks sharp from front to back — not just the subject.',
      sections: [
        { heading: 'Aperture', body: 'Wider (f/1.8) = less depth of field, blurrier background. Narrower (f/11) = more depth of field, everything sharp.' },
        { heading: 'Focal length', body: 'The more zoom (telephoto), the less depth of field at the same aperture.' },
        { heading: 'Distance to subject', body: 'The closer you are to your subject, the less depth of field.' },
      ],
      tip: 'All three add up: an 85mm lens, f/1.8 aperture, standing close to the subject, gives you the strongest possible background blur.',
    },
    focusModes: {
      intro: "\"It came out blurry\" isn't always an exposure problem or a shaky hand — often the camera just focused somewhere you didn't want. Focus has its own modes, just as important as the exposure triangle.",
      sections: [
        {
          heading: 'Single-shot focus (AF-S / One-Shot)',
          body: "The camera focuses once, when you half-press the shutter, and locks there. Ideal for still subjects — portrait, landscape, product.",
        },
        {
          heading: 'Continuous focus (AF-C / AI Servo)',
          body: 'The camera keeps adjusting focus the whole time you hold the shutter half-pressed, tracking the subject if it moves. For action and panning.',
        },
        {
          heading: 'Single point vs. wide area',
          body: 'Instead of letting the camera guess what to focus on, you can manually pick a single point — for example, on the subject\'s eye. Wide area is faster but less precise.',
        },
        {
          heading: 'Manual focus',
          body: 'Turning the lens ring yourself. Useful when autofocus gets confused: low light, glass in the way, repetitive patterns, or very close macro photography.',
        },
      ],
      tip: "For portraits, always focus on the eye closest to the camera — it's the first thing the human eye looks for in a photo of a person, even if the rest comes out a bit soft.",
    },
    whiteBalance: {
      intro:
        "Every light source has a different color temperature: a candle is very warm (orange), an overcast sky is cool (blue). White balance tells the camera how warm or cool the light is, so white actually looks white. If your camera doesn't compensate well, the whole photo comes out with a color tint that looks unnatural.",
      itemsLabel: 'Common presets',
      items: [
        { name: 'Auto', description: 'The camera guesses — works well almost always, but can fail with mixed light.' },
        { name: 'Daylight', description: 'For outdoors with direct sun, no extra correction.' },
        { name: 'Cloudy', description: 'Adds a bit of warmth to compensate for the bluish tone of an overcast sky.' },
        { name: 'Shade', description: 'Adds even more warmth — shade is bluer than an overcast sky.' },
        { name: 'Tungsten', description: 'For warm incandescent bulbs — subtracts orange from the image.' },
        { name: 'Fluorescent', description: 'For greenish tube lights — subtracts green from the image.' },
      ],
      tip: 'Indoors with mixed light (like in night or studio portrait) it\'s easier to place your subject near a single dominant source than to try to correct several mixed light colors in one photo.',
      note:
        'Correcting isn\'t always what you want: leaving a warm tint on purpose can give a photo a cozy feel, and a cool tint can give it a distant or nighttime feel. White balance is also a style tool, not just a technical correction.',
    },
    colorTheory: {
      intro:
        "You don't need to know how to paint to use color to your advantage — just understand a couple of basic relationships between colors and apply them when choosing where to stand and what to include in the frame.",
      sections: [
        {
          heading: 'Complementary colors',
          body: 'These sit opposite each other on the color wheel — orange and blue, red and green, yellow and purple. Placed together in a photo, they make each other pop and create contrast and energy. It\'s the most used combination in film (the classic "teal and orange").',
        },
        {
          heading: 'Analogous colors',
          body: 'These sit next to each other on the wheel — like yellow, orange, and red together. They create harmony and a calmer feeling, without the strong contrast of complementary colors.',
        },
        {
          heading: 'Warm vs. cool',
          body: 'Warm colors (red, orange, yellow) feel close, energetic, cozy. Cool colors (blue, green, purple) feel distant, calm, sometimes sad or nocturnal. Golden hour is warm; a city night with LED lights is cool.',
        },
      ],
      tip: 'Before you shoot, find the dominant color of your scene and decide whether you want the rest to support it (harmony) or contrast with it on purpose (energy) — instead of letting several colors compete without you having decided.',
    },
    compositionExtra: {
      intro: 'The rule of thirds is the starting point, not the ceiling. Here are other tools you can combine with it.',
      sections: [
        { heading: 'Leading lines', body: 'Paths, railings, shadows — any line that leads the eye toward your subject.' },
        { heading: 'Natural framing', body: 'Use something in the scene (a doorway, branches, an arch) to "frame" your subject within the photo.' },
        { heading: 'Negative space', body: 'Leave empty areas on purpose — it gives the subject room to "breathe" and creates a sense of minimalism or solitude.' },
        { heading: 'Layers of depth', body: 'Something in the foreground, something in the midground, something in the background — gives the photo a sense of space instead of looking flat.' },
      ],
      tip: "Don't try to use all of them at once. Pick the one that serves what you're trying to say with that particular photo.",
    },
    rawVsJpeg: {
      intro: 'This is the format your camera saves the photo in, and it changes how much you can correct afterward without losing quality.',
      items: [
        { name: 'JPEG', description: 'The camera processes and compresses the image automatically. Smaller files, ready to share, but less room to correct exposure or color afterward.' },
        { name: 'RAW', description: 'Saves all the information the sensor captured, unprocessed. Heavier files, you need to edit them in an app before sharing, but you can correct much more without losing quality.' },
      ],
      tip: 'If your camera allows it, shoot RAW + JPEG at the same time: you get the JPEG ready to share right away, and the RAW in case you want to seriously edit that photo later.',
    },
    stabilization: {
      intro: "The most common cause of blurry photos in beginners isn't focus — it's hand movement.",
      sections: [
        { heading: 'Elbows against your body', body: 'Not floating in the air — brace them against your own torso to reduce shake.' },
        { heading: 'Breathe and shoot in the pause', body: 'Exhale and take the photo in the natural pause between breaths.' },
        { heading: 'Basic minimum-speed rule', body: "Your shutter speed shouldn't be slower than 1 over your focal length (with 50mm, no slower than 1/50) without support. If your camera has a cropped sensor (APS-C, most entry-level cameras), multiply the focal length by 1.5 before doing the math — a 50mm lens on that camera behaves like 75mm for this rule." },
        { heading: 'Find support in low light', body: 'A wall, table, or railing helps more than just maxing out ISO.' },
      ],
      tip: 'This is exactly what the stability warning in Night Portrait mode is watching for on your behalf.',
    },
    longExposure: {
      intro: "When the shutter stays open for more than a second or two, anything moving in the scene blurs while whatever is still stays sharp — it's the technique behind light trails, silky waterfalls, and star trails.",
      sections: [
        {
          heading: 'Tripod required',
          body: "Past roughly 1 second, not even the steadiest hand keeps the shot from blurring. Without a completely fixed support, this technique doesn't work — it's the flip side of what you saw in \"How to hold the camera.\"",
        },
        {
          heading: 'Bulb mode (B)',
          body: "For exposures longer than 30 seconds (where M mode caps out on most cameras), Bulb mode keeps the shutter open for as long as you hold the shutter button. Use a remote release or the camera's timer so you don't touch it directly and introduce shake.",
        },
        {
          heading: 'ND (neutral density) filter',
          body: "During the day there's too much light to expose for several seconds without blowing out the shot. An ND filter darkens the lens like sunglasses for your camera, letting you use slow shutter speeds even in full sun.",
        },
        {
          heading: 'ISO at its lowest',
          body: "With the shutter open that long, you don't need any help from ISO — keep it at your camera's base value (usually 100) for the least possible noise.",
        },
        {
          heading: 'Typical times by effect',
          body: "Car light trails at night: 10-30 sec. Silky waterfall or river: 1-4 sec. Clouds with visible motion: 30 sec-2 min. Star trails: 15-25 min, or several 30-sec shots stacked together later in editing.",
        },
      ],
      tip: "Start with something simple: running water in daylight with an ND filter, or car lights at night without needing a filter at all — you don't need to wait for a starry night for your first long exposure.",
    },
    histogram: {
      intro: "It's a graph that shows how well-exposed your photo is, without depending on how bright your camera screen looks under the sun.",
      sections: [
        { heading: 'Horizontal axis', body: 'Goes from pure black (left) to pure white (right).' },
        { heading: 'Vertical axis', body: 'Shows how many pixels of your photo have that tone.' },
        { heading: 'How to read it', body: 'If the graph piles up against the left, your photo is underexposed. Against the right, overexposed.' },
      ],
      tip: 'There\'s no "correct" histogram shape — a night scene will normally pile up on the left. Use it to confirm you didn\'t lose detail by accident, not to chase a perfect shape.',
    },
    flash: {
      intro:
        "Flash has a bad reputation among beginners because used poorly it looks flat and artificial — but used well it solves problems that not even maxing out ISO can fix, especially with harsh shadows or backlighting.",
      sections: [
        {
          heading: 'Auto flash',
          body: "The camera decides whether to fire based on the light it detects. Convenient, but unpredictable: sometimes it fires when you didn't want it to (ruining a background that already looked fine), and sometimes it doesn't fire when it would have helped (backlighting).",
        },
        {
          heading: 'Fill flash',
          body: 'Forces the flash even in good light, to "fill in" harsh shadows — midday sun on a face, or a backlit subject with a very bright background. It\'s the most underrated use of flash for beginners.',
        },
        {
          heading: 'Flash off',
          body: 'Turns the flash off completely. Use it when ambient light is already enough, in places where flash is disruptive or banned (concerts, museums, theaters), or when you\'d rather raise ISO than flatten the scene with direct light.',
        },
        {
          heading: 'Slow sync',
          body: "Combines flash with a slow shutter speed: the flash freezes the subject, but the shutter stays open long enough to also capture the ambient background light. It's what keeps the background from going pitch black in a night flash photo.",
        },
        {
          heading: 'Bounce flash',
          body: "If your flash is external and can tilt, point it at the ceiling or a nearby wall instead of straight at the subject. The bounced light arrives much softer, without the harsh direct-flash shadow.",
        },
      ],
      tip: "General rule: if you're close to your subject (under 3-4 meters / 10-13 feet) and there are harsh shadows or backlighting, fill flash helps more than it hurts. If you're far away or outdoors at night, flash almost never reaches far enough — raising ISO or finding a real light source, like in Night Portrait mode, works better.",
    },
    lightModifiers: {
      intro:
        "All of this is external lighting gear — you don't need it to get started. Studio Portrait mode already teaches you to get good results with just a window or a lamp. This is the reference for when you want to take the next step with an external flash or a continuous light.",
      items: [
        {
          name: 'Shoot-through umbrella',
          description: 'Light fires straight through it. Spreads light over a wide, soft area — easy to carry, good for group portraits.',
        },
        {
          name: 'Reflective umbrella',
          description: 'Light bounces inside it (lined in silver or white) before reaching the subject. More controlled than shoot-through, with more contrast.',
        },
        {
          name: 'Softbox',
          description: 'A box with a diffuser on the front. Gives the softest, most controlled light of all — the studio-portrait standard.',
        },
        {
          name: 'Beauty dish',
          description: 'A shallow reflector dish. Harder light than a softbox but with more texture and punch — heavily used in fashion and beauty.',
        },
        {
          name: 'Honeycomb grid',
          description: "Placed over another modifier to narrow the beam and keep light from spilling where you don't want it — controls direction, not softness.",
        },
        {
          name: 'Snoot',
          description: 'A cone or tube that concentrates light into a small circle — for lighting a single detail and leaving everything else in shadow.',
        },
        {
          name: 'Reflector',
          description: "Doesn't emit light, it bounces it. The cheapest and most versatile — a white, silver, or gold panel that fills shadows using the light you already have.",
        },
        {
          name: 'Diffuser panel',
          description: 'Placed between the light source and the subject (not on the flash) to soften any harsh light, including direct sun.',
        },
      ],
      tip: "Before buying any of these, an improvised reflector (a sheet of white foam board, or even a bedsheet) does 80% of the job for a fraction of the cost — the same logic as Studio Portrait mode: use what you already have before buying new gear.",
    },
    goldenBlueHour: {
      intro: "This app's Landscape mode already mentions \"golden hour\" — here's the full explanation of when it happens and why so many photographers plan their day around it.",
      sections: [
        {
          heading: 'Golden hour',
          body: "The roughly one-hour window after sunrise and before sunset, when the sun sits low in the sky. Warm, soft light with long shadows — the favorite for portrait and landscape, and the reason almost no professional shoots at noon if they can avoid it.",
        },
        {
          heading: 'Blue hour',
          body: "The 20-30 minutes right before sunrise or after sunset, when the sun is no longer visible but the sky still holds light. Deep blue tone, heavily used in city and architecture photography, because already-lit artificial lights contrast nicely against the blue sky.",
        },
        {
          heading: 'Finding the exact time',
          body: "It varies by location and time of year — it's not always \"6pm.\" Your phone's weather app usually shows sunset time, and specialized apps like PhotoPills calculate the exact golden and blue hour for wherever you're standing.",
        },
      ],
      tip: "Golden hour lasts almost a full hour; blue hour lasts much less, about 20-30 minutes. If you're heading out for blue hour, get there early — it ends fast and doesn't warn you.",
    },
    doubleExposure: {
      intro: 'Combining two different shots into a single frame — a silhouette with a texture, a face with a landscape — to create an image that neither photo could tell on its own.',
      sections: [
        {
          heading: 'In-camera multiple exposure mode',
          body: 'Many cameras (check the shooting menu) have a built-in multiple exposure mode that combines 2 or more shots automatically using a blend mode (additive, average, darken, lighten). Shoot both frames back to back, without moving the camera, if you want them to line up in the same frame.',
        },
        {
          heading: 'The dark-background, bright-subject rule',
          body: 'The first shot works best with a dark or plain background and a well-lit subject — a silhouette, a face against black. The second shot (the texture, landscape, pattern) will show up mostly in the dark areas of the first one.',
        },
        {
          heading: "If your camera doesn't have the mode",
          body: 'You can get the same effect by combining two photos afterward in an editing app, using a blend mode like "Lighten" or "Screen" — it gives you more control than doing it in-camera, at the cost of not seeing the result on the spot.',
        },
      ],
      tip: "The result is fairly unpredictable at first — treat it as something to experiment with and repeat several times, not something that comes out perfect on the first try.",
    },
    styles: {
      intro:
        "These aren't rules, they're starting points. Try several, mix what you like from each, and over time you'll notice which one you naturally lean toward — that's your style.",
      items: [
        {
          name: 'Minimalist',
          description: 'Simple composition, lots of empty space, few elements, neutral colors.',
          extra: 'Frame with the rule of thirds, leaving most of the frame empty on purpose. Medium aperture, nothing competing with the subject.',
        },
        {
          name: 'High contrast',
          description: 'Deep shadows, strong highlights, often black and white.',
          extra: 'Look for hard light (direct sun, a single strong source). Low ISO. Works great with Night Portrait mode.',
        },
        {
          name: 'Warm and nostalgic',
          description: 'Orange and yellow tones, soft light, a sense of memory.',
          extra: 'Shoot at golden hour. Set white balance to "Cloudy" even in sun, to exaggerate the warmth.',
        },
        {
          name: 'Vibrant and saturated',
          description: 'Intense, eye-catching colors, ideal for content that needs to stand out.',
          extra: 'Good flat light (not too hard), well-defined analogous or complementary colors in the scene.',
        },
        {
          name: 'Cinematic',
          description: 'Desaturated colors with a color tint, shallow depth of field.',
          extra: 'Wide aperture (f/1.8–f/2.8), one dominant complementary color (bluish background, warm skin), deliberate framing.',
        },
        {
          name: 'Documentary / natural',
          description: 'Unmodified available light, realistic colors, spontaneous moments.',
          extra: 'Auto white balance, whatever light is already there, without asking anyone to pose.',
        },
      ],
    },
  },
  paywall: {
    badge: 'PRO',
    title: 'Pro mode',
    subtitle:
      'Panning, action portrait, night portrait, studio portrait, and focus — one-time unlock, forever, no subscription.',
    unlockButton: 'Unlock Pro',
    restoreButton: 'Restore purchase',
    purchasing: 'Processing purchase…',
    restoring: 'Restoring…',
    purchaseError: "Couldn't complete the purchase. Try again.",
    restoreNotFound: "We couldn't find a Pro purchase to restore.",
    restoreSuccess: "You're all set — Pro unlocked.",
    priceUnavailable: 'Price unavailable',
  },
  language: { es: 'ES', en: 'EN', pt: 'PT' },
};

const pt: Translations = {
  appName: 'Encuadre',
  modeSelect: {
    subtitle:
      'Escolha o que você quer aprender a fazer com a sua câmera. Aponte o celular para a sua cena e eu explico ao vivo o que está acontecendo com a luz.',
  },
  common: {
    back: '‹ Modos',
    close: 'Fechar',
    continue: 'Continuar',
  },
  a11y: {
    backToModes: 'Voltar aos modos',
    openTutorial: 'Abrir tutorial',
    switchToEnglish: 'Mudar idioma para inglês',
    switchToSpanish: 'Mudar idioma para espanhol',
    switchToPortuguese: 'Mudar idioma para português',
    openConcepts: 'Abrir Conceitos',
    closeExposureTriangle: 'Fechar o triângulo de exposição',
    toggleKitLensTip: 'Mostrar ou ocultar a dica para lente kit',
    isoSlider: 'Controle deslizante de ISO',
    apertureSlider: 'Controle deslizante de abertura',
    shutterSlider: 'Controle deslizante de velocidade do obturador',
    lockedMode: 'Modo Pro, bloqueado',
    closePaywall: 'Fechar tela do Pro',
  },
  permission: {
    title: 'O Encuadre precisa da sua câmera',
    body: 'Usamos só para ver a cena ao vivo enquanto explico a luz e o movimento. Nada é salvo nem enviado para nenhum servidor.',
    button: 'Continuar',
    settingsTitle: 'A permissão da câmera está desativada',
    settingsBody: 'Você já recusou uma vez, então o sistema não pergunta de novo automaticamente. Ative nas Configurações para poder usar o Encuadre.',
    settingsButton: 'Abrir Configurações',
  },
  modes: {
    retrato: {
      title: 'Retrato ao ar livre',
      subtitle: 'Separe o seu sujeito do fundo',
      description:
        'Aponte para o lugar onde você vai fazer o retrato. Eu explico como equilibrar abertura e ISO de acordo com a luz que há agora, com orientação de composição incluída.',
    },
    paisaje: {
      title: 'Paisagem / hora dourada',
      subtitle: 'A cena toda em foco',
      description:
        'Aponte para a paisagem. Eu explico como manter tudo nítido, do primeiro ao último plano, com a luz deste momento.',
    },
    barrido: {
      title: 'Panorâmica (panning)',
      subtitle: 'Fundo com movimento, sujeito nítido',
      description:
        'Mova o celular como se estivesse acompanhando o seu sujeito. Vou sentir a velocidade e a firmeza do seu movimento para sugerir a velocidade do obturador.',
    },
    accion: {
      title: 'Retrato de ação',
      subtitle: 'Congele o movimento',
      description:
        'O celular não consegue medir a velocidade do seu sujeito, então me diga você mesmo e eu combino isso com a luz de agora.',
    },
    retratoNocturno: {
      title: 'Retrato noturno',
      subtitle: 'Trabalhe com pouca luz sem perder o sujeito',
      description:
        'Aponte para a cena noturna. Eu explico como aproveitar as fontes de luz que existem e quando o ISO deve assumir o peso no lugar do obturador.',
    },
    retratoEstudio: {
      title: 'Retrato em estúdio / interiores',
      subtitle: 'Controle a direção da luz',
      description:
        'Aponte para o seu sujeito em ambiente interno. Eu explico como usar a janela ou a sua fonte de luz como se fosse um estúdio, sem equipamento especializado.',
    },
    enfoque: {
      title: 'Foco',
      subtitle: 'Escolha o modo de foco certo',
      description:
        'Aponte para o seu sujeito e me diga com que velocidade ele se move. Eu ajudo você a escolher entre foco de uma só vez ou contínuo, e aviso se a luz vai dificultar o foco da sua câmera.',
    },
  },
  lightBands: {
    muy_oscuro: 'Muito escuro (noite, interior sem luz)',
    interior: 'Interior com luz',
    exterior_nublado: 'Exterior nublado / sombra',
    sol_directo: 'Sol direto',
  },
  lightPicker: { label: 'Como está a luz agora?' },
  subjectSpeed: {
    label: 'Com que velocidade o seu sujeito se move?',
    lento: 'Lento (caminhando)',
    medio: 'Médio (correndo)',
    rapido: 'Rápido (veículo, esporte)',
  },
  chips: { iso: 'ISO', aperture: 'Abertura', shutter: 'Obturador', focus: 'Foco' },
  guidance: {
    retrato: {
      oscuro: {
        headline: 'Pouca luz: priorize uma abertura grande',
        detail:
          'Com essa luz, uma abertura grande (número f baixo) deixa entrar mais luz e ainda separa o seu sujeito do fundo. Aumente o ISO só o necessário para que a velocidade não caia demais e a foto não saia tremida.',
      },
      medio: {
        headline: 'Luz confortável para retrato',
        detail:
          'Com essa luz você pode escolher a abertura de acordo com o quanto de fundo quer desfocar, sem se preocupar tanto com o ISO. Abertura maior = mais desfoque de fundo.',
      },
      brillante: {
        headline: 'Muita luz: cuidado com as sombras duras',
        detail:
          'Com sol direto a luz pode ficar dura no rosto. Feche um pouco a abertura para não superexpor e procure sombra suave ou luz lateral, se puder.',
      },
    },
    paisaje: {
      oscuro: {
        headline: 'Pouca luz: você vai precisar de apoio firme',
        detail:
          'Para paisagem você quase sempre quer abertura fechada (tudo em foco), mas com pouca luz isso significa velocidades lentas. Apoie o cotovelo ou use um tripé/superfície fixa para a foto não sair tremida.',
      },
      medio: {
        headline: 'Boa luz para a hora dourada',
        detail:
          'Essa luz suave é ideal para paisagem. Feche a abertura para que todo o enquadramento fique nítido, do perto ao longe, e mantenha o ISO baixo para evitar ruído.',
      },
      brillante: {
        headline: 'Sol alto: contraste forte',
        detail:
          'Nesse horário o contraste entre céu e sombras é alto. Feche bastante a abertura para ter nitidez de ponta a ponta e cuide para o céu não estourar.',
      },
    },
    barrido: {
      detail:
        'A chave da panorâmica é uma velocidade do obturador lenta combinada com um movimento suave que acompanhe o sujeito na mesma velocidade. Quanto mais lento o obturador, mais o fundo se esfuma — mas também é mais fácil o sujeito sair borrado se a sua mão não acompanhar bem.',
      headlineSteady: 'O seu movimento ainda está muito parado',
      headlineFast: 'Bom ritmo de panorâmica detectado',
      headlineNormal: 'Continue movendo o celular para sentir o ritmo',
    },
    accion: {
      detail:
        'Para congelar o movimento, o que manda é a velocidade do obturador. Quanto mais rápido o seu sujeito se move, mais rápida precisa ser a velocidade — e isso vai exigir aumentar o ISO ou abrir a abertura para compensar a luz que você perde.',
      headlineLento: 'Sujeito lento: priorize a velocidade do obturador',
      headlineMedio: 'Sujeito médio: priorize a velocidade do obturador',
      headlineRapido: 'Sujeito rápido: priorize a velocidade do obturador',
    },
    retratoNocturno: {
      oscuro: {
        headline: 'Muito pouca luz: priorize que o seu sujeito fique parado',
        detail:
          'Com essa escuridão, quase toda a luz que você tiver vai vir de uma fonte pontual (poste, janela, letreiro). Aproxime o seu sujeito dessa fonte em vez de simplesmente subir o ISO ao máximo. Mantenha o obturador em 1/60 ou mais rápido para a pessoa não sair tremida — deixe que o ISO absorva o que faltar, não o obturador.',
      },
      medio: {
        headline: 'Luz urbana noturna: cuidado com o balanço de branco',
        detail:
          'As luzes da rua misturam cores diferentes (quente de sódio, fria de LED). Se puder, posicione o seu sujeito perto de uma única fonte de luz dominante para simplificar a cor da pele.',
      },
      brillante: {
        headline: 'Cena noturna bem iluminada',
        detail:
          'Com letreiros ou vitrines por perto você tem luz suficiente para trabalhar com tranquilidade. Cuide para a luz colorida não tingir demais a pele — ande alguns passos para achar o ângulo com a melhor cor.',
      },
      shakeWarning:
        'Estou percebendo que o celular está se mexendo bastante — apoie-se em algo firme ou encoste o cotovelo no corpo; com essa luz qualquer tremor aparece muito mais.',
    },
    retratoEstudio: {
      oscuro: {
        headline: 'Ambiente muito escuro: você vai precisar de mais luz',
        detail:
          'Em interiores escuros quase nunca há luz ambiente suficiente. Aproxime o seu sujeito de uma janela ou use uma luminária ou ring light como fonte principal — subir só o ISO sem uma fonte de luz real vai deixar a foto com muito ruído.',
      },
      medio: {
        headline: 'Boa luz de estúdio ou de janela',
        detail:
          'Essa é uma luz confortável para retrato em ambiente interno. Coloque a janela ou a fonte de luz ao lado do sujeito, num ângulo de uns 45°, em vez de de frente — assim o rosto ganha volume e não fica chapado.',
      },
      brillante: {
        headline: 'Luz direta forte perto de uma janela',
        detail:
          'Perto de uma janela com sol direto a luz pode ficar muito contrastada. Use uma cortina fina, papel branco ou qualquer tecido translúcido para suavizá-la antes que chegue ao sujeito.',
      },
    },
    enfoque: {
      lento: {
        headline: 'Sujeito parado: use foco de uma só vez (AF-S)',
        detail:
          'Com o sujeito parado, o foco de uma só vez (AF-S / One-Shot) é mais preciso: a câmera foca uma vez, quando você aperta o disparador até a metade, e fica travada ali. Escolha um único ponto de foco sobre o olho ou a parte mais importante do sujeito em vez de deixar a câmera adivinhar.',
      },
      medio: {
        headline: 'Sujeito em movimento: considere o foco contínuo (AF-C)',
        detail:
          'Com movimento moderado, o foco contínuo (AF-C / AI Servo) continua ajustando enquanto você mantém o disparador na metade, assim você não perde o sujeito se ele se mexer. Se a sua câmera permitir, use um ponto de foco pequeno para ter mais precisão.',
      },
      rapido: {
        headline: 'Sujeito rápido: o foco contínuo (AF-C) é quase obrigatório',
        detail:
          'Com um sujeito rápido, o foco de uma só vez vai ficar para trás. Use foco contínuo (AF-C / AI Servo) e considere uma área de foco mais ampla para a câmera não perder o sujeito entre pontos individuais.',
      },
      lowLightWarning:
        'Com tão pouca luz, o autofoco pode falhar ou "ficar procurando" sem travar — aponte para uma borda de alto contraste perto do seu sujeito ou mude para foco manual, se a sua câmera permitir.',
    },
  },
  exposureTriangle: {
    openButton: 'Ver o triângulo ao vivo',
    title: 'Triângulo de exposição',
    hint: 'Mova qualquer controle. Os outros dois se ajustam sozinhos para manter a mesma exposição — assim você vê a troca real entre eles.',
    simulationDisclosure: 'Simulação ilustrativa: a sua câmera real não muda. O desfoque das bordas representa o efeito da abertura — não depende de onde o seu sujeito está no enquadramento.',
    isoHint: 'Aumenta o ruído da imagem',
    apertureHint: 'Controla o quanto do fundo fica desfocado',
    shutterHint: 'Congela ou borra o movimento',
    correctExposure: 'Exposição correta — igual a quando você abriu o triângulo',
    underExposedOne: 'Ficaria 1 stop mais escura',
    underExposedMany: 'Ficaria {n} stops mais escura',
    overExposedOne: 'Ficaria 1 stop mais clara',
    overExposedMany: 'Ficaria {n} stops mais clara',
    limitReachedHint: 'Um dos controles chegou ao limite e não consegue compensar mais — é assim que a foto real seria afetada.',
  },
  tutorial: {
    title: 'Como usar o Encuadre',
    skip: 'Pular',
    next: 'Próximo',
    start: 'Começar',
    reopenLabel: '?',
    steps: [
      {
        title: 'Bem-vindo ao Encuadre',
        body: 'O seu companheiro para aprender a usar a sua câmera de verdade. Ele não substitui as suas decisões, ajuda você a entendê-las.',
      },
      {
        title: 'Escolha o que quer aprender',
        body: 'Cada modo ensina uma técnica diferente: retrato externo, noturno ou de estúdio, paisagem, panorâmica ou ação. Escolha um para começar.',
      },
      {
        title: 'Aponte o celular para a cena',
        body: 'Usamos a luz e o movimento que o seu celular capta — nada é salvo nem enviado para nenhum servidor.',
      },
      {
        title: 'Leia a explicação ao vivo',
        body: 'O cartão de baixo diz o que ajustar na sua câmera real e por quê, não só qual número usar.',
      },
      {
        title: 'Nem tudo é apontar a câmera',
        body: 'O banner "Conceitos" na tela principal tem 19 temas de referência — do triângulo de exposição aos estilos fotográficos. Vale a pena explorar, principalmente se algum termo técnico ainda não ficou claro.',
      },
    ],
  },
  lens: {
    label: 'Lente sugerida',
    kitLensLabel: 'Com a sua lente kit',
    retrato: {
      type: 'Fixa (prime), f/1.8 ou mais aberta, se puder',
      tip: 'Com essa distância focal o rosto não deforma e o fundo desfoca com facilidade.',
      kitLensTip:
        'Use a ponta mais longa do zoom (uns 55mm) e chegue um pouco mais perto do sujeito. Você não vai ter tanto desfoque quanto com f/1.8, mas afastar o sujeito do fundo ajuda quase tanto quanto a abertura.',
    },
    paisaje: {
      type: 'Grande angular, zoom ou fixa — priorize nitidez de canto a canto',
      tip: 'A grande angular exagera a profundidade e deixa entrar mais da cena, do primeiro ao último plano.',
      kitLensTip:
        'Boas notícias: a sua lente kit já cobre essa faixa na ponta mais curta (cerca de 18mm). Você não precisa de mais nada para este modo.',
    },
    barrido: {
      type: 'Zoom versátil — permite reenquadrar rápido enquanto acompanha o sujeito',
      tip: 'Se o seu sujeito passa longe de você, uma teleobjetiva (70–200mm) dá mais alcance.',
      kitLensTip:
        'A sua lente kit (cerca de 18-55mm) cobre bem essa faixa — não precisa trocá-la para praticar panorâmica.',
    },
    accion: {
      type: 'Teleobjetiva, de preferência com abertura f/2.8 constante',
      tip: 'A distância focal longa permite ficar longe da ação sem perder o enquadramento, e uma abertura rápida ajuda a compensar a alta velocidade do obturador.',
      kitLensTip:
        'Você não vai chegar a 200mm nem a f/2.8, então chegue fisicamente mais perto do que o ideal e suba o ISO mais do que o sugerido para compensar a abertura mais fechada. A velocidade do obturador continua sendo o mais importante para congelar o movimento.',
    },
    retratoNocturno: {
      type: 'Fixa de 35–50mm, a mais aberta que você tiver (f/1.8 ou melhor)',
      tip: 'À noite cada stop de abertura conta mais do que de dia — uma lente rápida e um pouco mais angular do que a de retrato comum capta mais luz e funciona melhor em espaços apertados da rua.',
      kitLensTip:
        'A abertura da lente kit (f/3.5–5.6) vai ficar curta para essa luz — você vai precisar subir bastante o ISO para compensar. Use a abertura mais ampla disponível e chegue perto das fontes de luz em vez de depender só do ISO.',
    },
    retratoEstudio: {
      type: 'Fixa de 35–50mm, abertura grande para separar do fundo',
      tip: 'Em interiores o espaço costuma ser menor do que ao ar livre — uma focal mais curta do que a do retrato externo permite enquadrar sem encostar na parede.',
      kitLensTip:
        'A lente kit funciona bem aqui porque 35–50mm já está dentro da faixa dela — use apenas o menor número f disponível nessa distância focal para ter alguma separação do fundo.',
    },
    enfoque: {
      type: 'Qualquer lente com autofoco confiável — um zoom padrão (24-70mm ou a lente kit) serve para praticar',
      tip: 'Aqui a velocidade do autofoco importa mais do que a abertura — lentes mais novas ou de linha superior focam mais rápido e "procuram" menos com pouca luz.',
      kitLensTip:
        'A sua lente kit funciona bem para isso — o resultado depende mais do modo que você escolhe na câmera (AF-S vs. AF-C) e de onde você coloca o ponto de foco do que da lente em si.',
    },
  },
  concepts: {
    sectionTitle: 'Conceitos',
    sectionSubtitle:
      'Nem tudo se aprende apontando a câmera. Estes são os conceitos que ajudam você a encontrar o seu próprio estilo, não só a expor bem.',
    reopenLabel: '📖',
    topics: {
      exposureTriangle: {
        title: 'Triângulo de exposição',
        subtitle: 'ISO, abertura e obturador, em resumo',
      },
      cameraModes: {
        title: 'Modos da câmera',
        subtitle: 'O que significam M, A/Av, S/Tv, P e Auto',
      },
      sceneModes: {
        title: 'Modos de cena',
        subtitle: 'Os ícones do seletor: rostinho, montanha, corredor...',
      },
      meteringModes: {
        title: 'Modos de medição',
        subtitle: 'Como a câmera decide o que é "exposto corretamente"',
      },
      exposureCompensation: {
        title: 'Compensação de exposição',
        subtitle: 'Quando o fotômetro da sua câmera erra',
      },
      depthOfField: {
        title: 'Profundidade de campo',
        subtitle: 'Quanto da foto fica nítido',
      },
      focusModes: {
        title: 'Modos de foco',
        subtitle: 'Por que suas fotos saem borradas mesmo sem você se mexer',
      },
      whiteBalance: {
        title: 'Balanço de branco',
        subtitle: 'Fazer o branco parecer branco (ou não, de propósito)',
      },
      colorTheory: {
        title: 'Teoria das cores',
        subtitle: 'Como as cores do seu enquadramento trabalham juntas',
      },
      compositionExtra: {
        title: 'Composição, além dos terços',
        subtitle: 'Linhas, enquadramento natural, espaço e camadas',
      },
      rawVsJpeg: {
        title: 'RAW vs. JPEG',
        subtitle: 'Qual formato usar e por quê',
      },
      stabilization: {
        title: 'Como segurar a câmera',
        subtitle: 'A causa nº 1 de fotos borradas, e como evitá-la',
      },
      longExposure: {
        title: 'Longa exposição',
        subtitle: 'Rastros de luz, água sedosa, rastros de estrelas',
      },
      histogram: {
        title: 'O histograma',
        subtitle: 'Confirme a sua exposição sem confiar na tela',
      },
      flash: {
        title: 'Uso do flash',
        subtitle: 'Modos de flash e quando cada um ajuda',
      },
      lightModifiers: {
        title: 'Modificadores de luz',
        subtitle: 'Sombrinhas, softbox e grids — para mais adiante',
      },
      goldenBlueHour: {
        title: 'Hora dourada e hora azul',
        subtitle: 'Quando acontecem e por que todo mundo as persegue',
      },
      doubleExposure: {
        title: 'Dupla exposição',
        subtitle: 'Duas fotos, uma só imagem',
      },
      styles: {
        title: 'Estilos fotográficos',
        subtitle: 'Um ponto de partida para encontrar o seu',
      },
    },
    exposureTriangle: {
      intro:
        'ISO, abertura e velocidade do obturador são as três variáveis que controlam quanta luz chega à sua foto — e cada uma traz um efeito colateral. Os modos de retrato deste app têm um simulador em que você os move com o dedo e vê como se compensam em tempo real; este é o resumo em texto.',
      sections: [
        {
          heading: 'ISO — sensibilidade à luz',
          body: 'Quanto mais alto, mais sensível o sensor fica à luz — mas o efeito colateral é ruído/granulação na imagem. Aumente só o necessário.',
        },
        {
          heading: 'Abertura — tamanho da abertura da lente',
          body: 'Mede-se em números f (f/1.8, f/8...). Quanto menor o número, mais aberta a abertura e mais luz entra — e o efeito colateral é menos profundidade de campo (fundo mais desfocado).',
        },
        {
          heading: 'Obturador — por quanto tempo a luz entra',
          body: 'Velocidades rápidas (1/1000) congelam o movimento; velocidades lentas (1/15) o borram. O efeito colateral de baixar demais é que até o tremor da sua mão aparece.',
        },
      ],
      tip: 'Aumente um e, para manter a mesma exposição, você precisa diminuir a combinação dos outros dois — por isso é um triângulo, e não três controles soltos.',
    },
    cameraModes: {
      intro: 'Essas letras no seletor da sua câmera são justamente o que este app ajuda você a entender de verdade. Cada uma dá um nível diferente de controle. Atenção: nem todas as marcas usam a mesma letra para a mesma coisa — onde for o caso, marcamos com a inicial da sua marca (N, S ou C) qual letra procurar no seu seletor.',
      items: [
        { name: 'Auto', description: 'A câmera decide tudo. Bom para começar, mas você não aprende o porquê de nada.' },
        { name: 'P — Programa', description: 'A câmera escolhe abertura e velocidade; você controla ISO, flash e outros ajustes. Um passo acima do Auto.' },
        {
          name: 'A / Av — Prioridade de abertura',
          description: 'Você escolhe a abertura (controla a profundidade de campo) e a câmera ajusta a velocidade. O mais usado para retrato e paisagem.',
          brandNote: 'N · S usam "A"  —  C usa "Av"',
        },
        {
          name: 'S / Tv — Prioridade de obturador',
          description: 'Você escolhe a velocidade (controla o movimento) e a câmera ajusta a abertura. O mais usado para ação e panorâmica.',
          brandNote: 'N · S usam "S"  —  C usa "Tv"',
        },
        { name: 'M — Manual', description: 'Você controla os três. É justamente o que este app está ajudando você a fazer com critério, e não de cabeça.' },
      ],
      tip: 'Se você quer sair do Auto sem se sentir sobrecarregado, experimente o A/Av primeiro — é onde você ganha mais controle com o mínimo de coisas para pensar.',
    },
    sceneModes: {
      intro: 'Além de M/A/S/P, muitas câmeras de entrada têm ícones no seletor (rostinho, montanha, corredor...) — cada um é uma combinação automática pensada para uma situação específica. Costumam ser a primeira coisa que um iniciante toca, antes de chegar aos modos com letras.',
      items: [
        { name: 'Retrato (ícone de rostinho)', description: 'Abre a abertura automaticamente para desfocar o fundo e separar o sujeito.' },
        { name: 'Paisagem (ícone de montanha)', description: 'Fecha a abertura para que todo o enquadramento fique nítido, do perto ao longe.' },
        { name: 'Esporte / Ação (ícone de corredor)', description: 'Prioriza uma velocidade de obturador rápida para congelar o movimento.' },
        { name: 'Macro (ícone de flor)', description: 'Foca o mais perto possível da lente, para fotografar pequenos detalhes.' },
        { name: 'Noite (ícone de estrela ou lua)', description: 'Usa velocidades mais lentas e, às vezes, flash com sincronização lenta, automaticamente.' },
      ],
      tip: 'Esses modos fazem exatamente o que você já aprendeu a fazer sozinho no A/Av, S/Tv e M — só que a câmera decide sozinha, e você fica preso a uma única combinação fixa por cena.',
    },
    meteringModes: {
      intro: 'Quando a câmera "decide" uma exposição em P, A/Av ou S/Tv, algo precisa medir a luz da cena primeiro. O modo de medição define qual parte do enquadramento a câmera usa para essa medição.',
      sections: [
        {
          heading: 'Medição matricial / avaliativa',
          body: 'Faz a média da cena inteira, dando um pouco mais de peso a onde você está focando. É a padrão e funciona bem na maioria das vezes.',
        },
        {
          heading: 'Medição ponderada ao centro',
          body: 'Prioriza o centro do enquadramento e ignora um pouco as bordas. Útil quando o sujeito está centralizado e o fundo tem um brilho bem diferente.',
        },
        {
          heading: 'Medição pontual',
          body: 'Mede apenas um ponto bem pequeno, normalmente onde está o seu ponto de foco. Para cenas de alto contraste, em que você precisa expor exatamente para o sujeito sem que o fundo influencie.',
        },
      ],
      tip: 'Se a sua câmera continua errando com um fundo muito claro ou muito escuro mesmo depois de compensar a exposição, mudar para medição pontual sobre o sujeito costuma resolver mais rápido.',
    },
    exposureCompensation: {
      intro: 'O fotômetro da sua câmera assume que, em média, toda cena é um cinza médio. Isso falha justamente nas cenas que mais importam: muita neve, muita praia ou um fundo muito escuro. A compensação de exposição (+/-) é como você diz a ela "o que você decidiu está errado, corrija".',
      sections: [
        {
          heading: 'Por que o fotômetro se engana',
          body: 'Uma cena com muito branco (neve, praia, parede branca) faz o fotômetro "escurecer demais" tentando levá-la ao cinza — a foto sai cinza e sem vida se você não compensar para +. Uma cena com muito preto faz o contrário: sai superexposta se você não compensar para -.',
        },
        {
          heading: 'Como usar',
          body: 'Procure o controle +/- (um seletor, um botão ou um ícone na tela). Funciona em P, A/Av e S/Tv — no Manual não se aplica, porque ali você já decide os três parâmetros diretamente.',
        },
        {
          heading: 'Regra prática',
          body: 'Muito branco no enquadramento → compense positivo (+1, +2). Muito preto ou escuro → compense negativo. Cena equilibrada → não mexa em nada.',
        },
      ],
      tip: 'Confira o histograma depois de compensar, e não só a tela da câmera — sob o sol, a tela quase sempre mente e parece mais escura do que a foto realmente está.',
    },
    depthOfField: {
      intro: 'É o quanto da sua foto parece nítido da frente para o fundo — não só o sujeito.',
      sections: [
        { heading: 'Abertura', body: 'Mais aberta (f/1.8) = menos profundidade de campo, fundo mais desfocado. Mais fechada (f/11) = mais profundidade de campo, tudo nítido.' },
        { heading: 'Distância focal', body: 'Quanto mais zoom (teleobjetiva), menos profundidade de campo com a mesma abertura.' },
        { heading: 'Distância até o sujeito', body: 'Quanto mais perto você estiver do seu sujeito, menos profundidade de campo.' },
      ],
      tip: 'Os três se somam: uma lente de 85mm, abertura f/1.8, perto do sujeito, dá o desfoque de fundo mais forte possível.',
    },
    focusModes: {
      intro: '"Saiu borrada" nem sempre é um problema de exposição ou de mão tremida — muitas vezes é que a câmera focou onde você não queria. O foco tem seus próprios modos, tão importantes quanto o triângulo de exposição.',
      sections: [
        {
          heading: 'Foco de uma só vez (AF-S / One-Shot)',
          body: 'A câmera foca uma vez, quando você aperta o disparador até a metade, e fica travada ali. Ideal para sujeitos parados — retrato, paisagem, produto.',
        },
        {
          heading: 'Foco contínuo (AF-C / AI Servo)',
          body: 'A câmera continua ajustando o foco durante todo o tempo em que você mantém o disparador na metade, acompanhando o sujeito se ele se mexer. Para ação e panorâmica.',
        },
        {
          heading: 'Ponto único vs. área ampla',
          body: 'Em vez de deixar a câmera adivinhar o que focar, você pode escolher manualmente um único ponto — por exemplo, sobre o olho do sujeito. A área ampla é mais rápida, mas menos precisa.',
        },
        {
          heading: 'Foco manual',
          body: 'Girar você mesmo o anel da lente. Útil quando o autofoco se confunde: pouca luz, vidro no meio, padrões repetitivos ou fotografia macro bem de perto.',
        },
      ],
      tip: 'Para retrato, foque sempre no olho mais próximo da câmera — é a primeira coisa que o olho humano procura ao ver uma foto de uma pessoa, mesmo que o resto saia um pouco desfocado.',
    },
    whiteBalance: {
      intro:
        'Cada fonte de luz tem uma temperatura de cor diferente: uma vela é bem quente (alaranjada), o céu nublado é frio (azulado). O balanço de branco diz à câmera o quão quente ou fria é a luz, para que o branco pareça realmente branco. Se a sua câmera não compensa bem, a foto inteira sai com um tom de cor que não parece natural.',
      itemsLabel: 'Predefinições comuns',
      items: [
        { name: 'Auto', description: 'A câmera adivinha — funciona bem quase sempre, mas pode falhar com luz mista.' },
        { name: 'Luz do dia', description: 'Para exteriores com sol direto, sem correção extra.' },
        { name: 'Nublado', description: 'Acrescenta um pouco de calor para compensar o tom azulado do céu encoberto.' },
        { name: 'Sombra', description: 'Acrescenta ainda mais calor — a sombra é mais azul do que o céu nublado.' },
        { name: 'Tungstênio', description: 'Para lâmpadas incandescentes quentes — tira laranja da imagem.' },
        { name: 'Fluorescente', description: 'Para lâmpadas tubulares esverdeadas — tira verde da imagem.' },
      ],
      tip: 'Em interiores com luz mista (como no retrato noturno ou de estúdio) é mais fácil posicionar o seu sujeito perto de uma única fonte dominante do que tentar corrigir várias cores de luz misturadas numa só foto.',
      note:
        'Nem sempre "corrigir" é o que você quer: deixar um tom quente de propósito pode dar à foto um clima aconchegante, e um tom frio pode dar um clima distante ou noturno. O balanço de branco também é uma ferramenta de estilo, e não só de correção técnica.',
    },
    colorTheory: {
      intro:
        'Você não precisa saber pintar para usar a cor a seu favor — basta entender algumas relações básicas entre as cores e aplicá-las ao escolher onde ficar e o que incluir no enquadramento.',
      sections: [
        {
          heading: 'Cores complementares',
          body: 'São as que ficam opostas no círculo cromático — laranja e azul, vermelho e verde, amarelo e roxo. Colocadas juntas numa foto, realçam uma à outra e criam contraste e energia. É a combinação mais usada no cinema (o clássico "teal and orange").',
        },
        {
          heading: 'Cores análogas',
          body: 'São as que ficam lado a lado no círculo — como amarelo, laranja e vermelho juntos. Criam harmonia e uma sensação mais calma, sem o contraste forte das complementares.',
        },
        {
          heading: 'Quentes vs. frias',
          body: 'As quentes (vermelho, laranja, amarelo) parecem próximas, enérgicas, aconchegantes. As frias (azul, verde, roxo) parecem distantes, calmas, às vezes tristes ou noturnas. A hora dourada é quente; uma noite de cidade com luzes de LED é fria.',
        },
      ],
      tip: 'Antes de disparar, descubra qual é a cor dominante da sua cena e decida se você quer que o resto a acompanhe (harmonia) ou contraste com ela de propósito (energia) — em vez de deixar várias cores competirem sem que você tenha decidido.',
    },
    compositionExtra: {
      intro: 'A regra dos terços é o ponto de partida, não o teto. Estes são outros recursos que você pode combinar com ela.',
      sections: [
        { heading: 'Linhas de condução', body: 'Caminhos, corrimãos, sombras — qualquer linha que leve o olhar até o seu sujeito.' },
        { heading: 'Moldura natural', body: 'Use algo da cena (uma porta, galhos, um arco) para "emoldurar" o seu sujeito dentro da foto.' },
        { heading: 'Espaço negativo', body: 'Deixe áreas vazias de propósito — dá ao sujeito espaço para "respirar" e cria uma sensação de minimalismo ou solidão.' },
        { heading: 'Camadas de profundidade', body: 'Algo em primeiro plano, algo em plano médio, algo ao fundo — dá à foto uma sensação de espaço em vez de parecer chapada.' },
      ],
      tip: 'Não tente usar todos de uma vez. Escolha o que serve para o que você quer contar com aquela foto em particular.',
    },
    rawVsJpeg: {
      intro: 'É o formato em que a sua câmera salva a foto, e muda o quanto você pode corrigir depois sem perder qualidade.',
      items: [
        { name: 'JPEG', description: 'A câmera processa e comprime a imagem automaticamente. Arquivos menores, prontos para compartilhar, mas com menos margem para corrigir exposição ou cor depois.' },
        { name: 'RAW', description: 'Guarda toda a informação que o sensor captou, sem processar. Arquivos mais pesados, você precisa editá-los num app antes de compartilhar, mas pode corrigir muito mais sem perder qualidade.' },
      ],
      tip: 'Se a sua câmera permitir, fotografe em RAW + JPEG ao mesmo tempo: você tem o JPEG pronto para compartilhar na hora e o RAW caso queira editar essa foto de verdade depois.',
    },
    stabilization: {
      intro: 'A causa mais comum de fotos borradas em iniciantes não é o foco — é o movimento das mãos.',
      sections: [
        { heading: 'Cotovelos junto ao corpo', body: 'Não soltos no ar — apoie-os contra o próprio tronco para reduzir o tremor.' },
        { heading: 'Respire e dispare na pausa', body: 'Solte o ar e tire a foto no momento natural de pausa entre as respirações.' },
        { heading: 'Regra básica de velocidade mínima', body: 'A velocidade do obturador não deve ser mais lenta que 1 sobre a sua distância focal (com 50mm, não mais lenta que 1/50) sem apoio. Se a sua câmera tem sensor cortado (APS-C, a maioria das câmeras de entrada), multiplique a focal por 1,5 antes de fazer a conta — uma 50mm nessa câmera se comporta como 75mm para esta regra.' },
        { heading: 'Procure apoio com pouca luz', body: 'Uma parede, mesa ou corrimão ajuda mais do que simplesmente subir o ISO ao máximo.' },
      ],
      tip: 'É justamente isso que o aviso de estabilidade do modo Retrato noturno está vigiando por você.',
    },
    longExposure: {
      intro: 'Quando o obturador fica aberto por mais de um ou dois segundos, tudo o que se move na cena se esfuma enquanto o que está parado fica nítido — é a técnica por trás de rastros de luz, cachoeiras sedosas e rastros de estrelas.',
      sections: [
        {
          heading: 'Tripé obrigatório',
          body: 'A partir de aproximadamente 1 segundo, nem a mão mais firme evita que a foto saia tremida. Sem um apoio totalmente fixo, essa técnica não funciona — é o outro lado do que você viu em "Como segurar a câmera".',
        },
        {
          heading: 'Modo Bulb (B)',
          body: 'Para exposições de mais de 30 segundos (onde o modo M chega ao limite na maioria das câmeras), o modo Bulb mantém o obturador aberto enquanto você mantiver o disparador pressionado. Use um disparador remoto ou o temporizador da câmera para não encostar nela e evitar vibração.',
        },
        {
          heading: 'Filtro ND (densidade neutra)',
          body: 'De dia há luz demais para expor por vários segundos sem estourar a foto. Um filtro ND escurece a lente como óculos de sol para a sua câmera, permitindo usar velocidades lentas mesmo com sol forte.',
        },
        {
          heading: 'ISO no mínimo',
          body: 'Com o obturador aberto por tanto tempo, você não precisa de ajuda do ISO — mantenha-o no valor base da sua câmera (normalmente 100) para ter o menor ruído possível.',
        },
        {
          heading: 'Tempos típicos por efeito',
          body: 'Rastros de carros à noite: 10-30 seg. Cachoeira ou rio com efeito sedoso: 1-4 seg. Nuvens com movimento visível: 30 seg-2 min. Rastros de estrelas: 15-25 min, ou várias fotos de 30 seg combinadas depois na edição.',
        },
      ],
      tip: 'Comece com algo simples: água corrente de dia com um filtro ND, ou luzes de carros à noite sem precisar de filtro — não é preciso esperar uma noite estrelada para a sua primeira longa exposição.',
    },
    histogram: {
      intro: 'É um gráfico que mostra o quão bem exposta está a sua foto, sem depender do quão brilhante a tela da câmera parece sob o sol.',
      sections: [
        { heading: 'Eixo horizontal', body: 'Vai do preto puro (esquerda) ao branco puro (direita).' },
        { heading: 'Eixo vertical', body: 'Mostra quantos pixels da sua foto têm aquele tom.' },
        { heading: 'Como ler', body: 'Se o gráfico se acumula encostado na esquerda, a sua foto está subexposta. Encostado na direita, superexposta.' },
      ],
      tip: 'Não existe um formato "correto" de histograma — uma cena noturna normalmente se acumula à esquerda. Use-o para confirmar que você não perdeu detalhe sem querer, e não para perseguir um formato perfeito.',
    },
    flash: {
      intro:
        'O flash tem má fama entre iniciantes porque, mal usado, parece chapado e artificial — mas bem usado resolve problemas que nem subir o ISO ao máximo consegue resolver, principalmente com sombras duras ou contraluz.',
      sections: [
        {
          heading: 'Flash automático',
          body: 'A câmera decide se dispara com base na luz que detecta. Prático, mas imprevisível: às vezes dispara sem necessidade (estragando um fundo que já estava bom) e às vezes não dispara quando ajudaria (contraluz).',
        },
        {
          heading: 'Flash de preenchimento (fill flash)',
          body: 'Força o flash mesmo com boa luz, para "preencher" sombras duras — sol do meio-dia sobre o rosto, ou um sujeito em contraluz com o fundo muito claro. É o uso de flash mais subestimado pelos iniciantes.',
        },
        {
          heading: 'Flash desligado',
          body: 'Desliga o flash por completo. Use quando a luz ambiente já é suficiente, em lugares onde o flash incomoda ou é proibido (shows, museus, teatros), ou quando você prefere subir o ISO a achatar a cena com luz direta.',
        },
        {
          heading: 'Sincronização lenta (slow sync)',
          body: 'Combina o flash com uma velocidade de obturador lenta: o flash congela o sujeito, mas o obturador continua aberto tempo suficiente para captar também a luz ambiente do fundo. É o que evita que o fundo fique preto numa foto noturna com flash.',
        },
        {
          heading: 'Flash rebatido (bounce)',
          body: 'Se o seu flash é externo e pode ser inclinado, aponte-o para o teto ou para uma parede próxima em vez de direto no sujeito. A luz rebatida chega muito mais suave, sem a sombra dura característica do flash direto.',
        },
      ],
      tip: 'Regra geral: se você está perto do seu sujeito (menos de 3-4 metros) e há sombras duras ou contraluz, o flash de preenchimento ajuda mais do que atrapalha. Se está longe ou ao ar livre à noite, o flash quase nunca alcança longe o bastante — nesse caso é melhor subir o ISO ou procurar uma fonte de luz real, como no modo Retrato noturno.',
    },
    lightModifiers: {
      intro:
        'Tudo isto é equipamento de iluminação externa — você não precisa dele para começar. O modo Retrato em estúdio já ensina a conseguir bons resultados só com uma janela ou uma luminária. Esta é a referência para quando você quiser dar o próximo passo com um flash externo ou uma luz contínua.',
      items: [
        {
          name: 'Sombrinha translúcida',
          description: 'A luz é disparada através dela. Espalha a luz numa área ampla e suave — fácil de transportar, boa para retratos em grupo.',
        },
        {
          name: 'Sombrinha refletora',
          description: 'A luz rebate dentro dela (forrada de prata ou branco) antes de chegar ao sujeito. Mais controlada que a translúcida, com mais contraste.',
        },
        {
          name: 'Softbox',
          description: 'Uma caixa com difusor na frente. Dá a luz mais suave e controlada de todas — o padrão para retrato de estúdio.',
        },
        {
          name: 'Beauty dish',
          description: 'Um prato refletor raso. Luz mais dura que a de um softbox, mas com mais textura e brilho — muito usado em moda e beleza.',
        },
        {
          name: 'Grid colmeia (honeycomb)',
          description: 'Colocado sobre outro modificador para estreitar o feixe de luz e evitar que se espalhe onde você não quer — controla a direção, não a suavidade.',
        },
        {
          name: 'Snoot',
          description: 'Um cone ou tubo que concentra a luz num círculo bem pequeno — para iluminar um único detalhe e deixar todo o resto na sombra.',
        },
        {
          name: 'Rebatedor',
          description: 'Não emite luz, rebate. O mais barato e versátil — um painel branco, prateado ou dourado que preenche sombras usando a luz que você já tem.',
        },
        {
          name: 'Painel difusor',
          description: 'Colocado entre a fonte de luz e o sujeito (e não no flash) para suavizar qualquer luz dura, inclusive o sol direto.',
        },
      ],
      tip: 'Antes de comprar qualquer um desses, um rebatedor improvisado (uma folha de isopor branca ou até um lençol) faz 80% do trabalho por uma fração do custo — a mesma lógica do modo Retrato em estúdio: use o que você já tem antes de comprar equipamento novo.',
    },
    goldenBlueHour: {
      intro: 'O modo Paisagem deste app já menciona a "hora dourada" — esta é a explicação completa de quando ela acontece e por que tantos fotógrafos organizam o dia em torno dela.',
      sections: [
        {
          heading: 'Hora dourada',
          body: 'A hora aproximada depois do nascer do sol e antes do pôr do sol, quando o sol está baixo no céu. Luz quente, suave, com sombras longas — a favorita para retrato e paisagem, e o motivo pelo qual quase nenhum profissional fotografa ao meio-dia se puder evitar.',
        },
        {
          heading: 'Hora azul',
          body: 'Os 20-30 minutos logo antes do nascer do sol ou depois do pôr do sol, quando o sol já não aparece mas o céu ainda guarda luz. Tom azul profundo, muito usado em fotografia de cidade e arquitetura, porque as luzes artificiais já acesas contrastam bem com o céu.',
        },
        {
          heading: 'Como descobrir o horário exato',
          body: 'Varia conforme o local e a época do ano — nem sempre é "18h". O app de clima do seu celular costuma mostrar o horário do pôr do sol, e apps especializados como o PhotoPills calculam também a hora dourada e a hora azul exatas para onde você estiver.',
        },
      ],
      tip: 'A hora dourada dura quase uma hora; a hora azul dura bem menos, uns 20-30 minutos. Se você vai sair para a hora azul, chegue com antecedência — ela acaba rápido e não avisa.',
    },
    doubleExposure: {
      intro: 'Combinar duas fotos diferentes num único quadro — uma silhueta com uma textura, um rosto com uma paisagem — para criar uma imagem que nenhuma das duas fotos sozinha poderia contar.',
      sections: [
        {
          heading: 'Modo de múltipla exposição na câmera',
          body: 'Muitas câmeras (confira o menu de disparo) têm um modo de exposição múltipla integrado que combina 2 ou mais fotos automaticamente usando um modo de mesclagem (aditivo, média, escurecer, clarear). Faça as duas fotos em sequência, sem mover a câmera, se quiser que se encaixem no mesmo enquadramento.',
        },
        {
          heading: 'A regra do fundo escuro e do sujeito claro',
          body: 'A primeira foto funciona melhor com um fundo escuro ou liso e um sujeito bem iluminado — uma silhueta, um rosto contra um fundo preto. A segunda foto (a textura, a paisagem, o padrão) vai aparecer principalmente nas áreas escuras da primeira.',
        },
        {
          heading: 'Se a sua câmera não tem o modo',
          body: 'Dá para conseguir o mesmo efeito combinando duas fotos depois, num app de edição, usando um modo de mesclagem como "Clarear" ou "Tela" — dá mais controle do que fazer na câmera, ao custo de não ver o resultado na hora.',
        },
      ],
      tip: 'O resultado é bastante imprevisível no começo — encare como algo para experimentar e repetir várias vezes, e não como algo que sai perfeito de primeira.',
    },
    styles: {
      intro:
        'Isto não são regras, são pontos de partida. Experimente vários, misture o que você gostar de cada um e, com o tempo, você vai perceber para qual tende naturalmente — esse é o seu estilo.',
      items: [
        {
          name: 'Minimalista',
          description: 'Composição simples, muito espaço vazio, poucos elementos, cores neutras.',
          extra: 'Enquadre com a regra dos terços, deixando a maior parte do quadro vazia de propósito. Abertura média, nada competindo com o sujeito.',
        },
        {
          name: 'Alto contraste',
          description: 'Sombras profundas, luzes marcadas, muitas vezes em preto e branco.',
          extra: 'Procure luz dura (sol direto, uma única fonte forte). ISO baixo. Funciona muito bem com o modo Retrato noturno.',
        },
        {
          name: 'Quente e nostálgico',
          description: 'Tons de laranja e amarelo, luz suave, sensação de lembrança.',
          extra: 'Fotografe na hora dourada. Balanço de branco em "Nublado" mesmo com sol, para exagerar o calor.',
        },
        {
          name: 'Vibrante e saturado',
          description: 'Cores intensas e chamativas, ideal para conteúdo que precisa se destacar.',
          extra: 'Boa luz difusa (não muito dura), cores análogas ou complementares bem definidas na cena.',
        },
        {
          name: 'Cinematográfico',
          description: 'Cores dessaturadas com um tom de cor, pouca profundidade de campo.',
          extra: 'Abertura grande (f/1.8–f/2.8), uma cor complementar dominante (fundo azulado, pele quente), enquadramento deliberado.',
        },
        {
          name: 'Documental / natural',
          description: 'Luz disponível sem modificar, cores realistas, momentos espontâneos.',
          extra: 'Balanço de branco automático, a luz que já está ali, sem pedir para ninguém posar.',
        },
      ],
    },
  },
  paywall: {
    badge: 'PRO',
    title: 'Modo Pro',
    subtitle:
      'Panorâmica, retrato de ação, retrato noturno, retrato em estúdio e foco — desbloqueio único, para sempre, sem assinatura.',
    unlockButton: 'Desbloquear Pro',
    restoreButton: 'Restaurar compra',
    purchasing: 'Processando compra…',
    restoring: 'Restaurando…',
    purchaseError: 'Não foi possível concluir a compra. Tente de novo.',
    restoreNotFound: 'Não encontramos nenhuma compra do Pro para restaurar.',
    restoreSuccess: 'Pronto! Você já tem o Pro.',
    priceUnavailable: 'Preço indisponível',
  },
  language: { es: 'ES', en: 'EN', pt: 'PT' },
};

export const DICTIONARIES = { es, en, pt };
