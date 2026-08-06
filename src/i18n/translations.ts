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
    openConcepts: 'Abrir Conceptos',
    closeExposureTriangle: 'Cerrar el triángulo de exposición',
    toggleKitLensTip: 'Mostrar u ocultar el consejo para lente de kit',
    isoSlider: 'Control deslizable de ISO',
    apertureSlider: 'Control deslizable de apertura',
    shutterSlider: 'Control deslizable de velocidad de obturación',
  },
  permission: {
    title: 'Encuadre necesita tu cámara',
    body: 'La usamos solo para ver la escena en vivo mientras te explico la luz y el movimiento. Nunca se guarda ni se envía a ningún servidor.',
    button: 'Dar permiso de cámara',
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
  chips: { iso: 'ISO', aperture: 'Apertura', shutter: 'Obturador' },
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
        body: 'El banner "Conceptos" en la pantalla principal tiene 17 temas de referencia — desde el triángulo de exposición hasta estilos fotográficos. Vale la pena explorarlo, sobre todo si algo del vocabulario técnico no te queda claro.',
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
  language: { es: 'ES', en: 'EN' },
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
    openConcepts: 'Open Concepts',
    closeExposureTriangle: 'Close the exposure triangle',
    toggleKitLensTip: 'Show or hide the kit lens tip',
    isoSlider: 'ISO slider',
    apertureSlider: 'Aperture slider',
    shutterSlider: 'Shutter speed slider',
  },
  permission: {
    title: 'Encuadre needs your camera',
    body: "We only use it to see the scene live while explaining light and motion. Nothing is ever saved or sent to any server.",
    button: 'Grant camera permission',
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
  chips: { iso: 'ISO', aperture: 'Aperture', shutter: 'Shutter' },
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
        body: 'The "Concepts" banner on the main screen has 17 reference topics — from the exposure triangle to photographic styles. Worth exploring, especially if any of the technical vocabulary isn\'t clear yet.',
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
  language: { es: 'ES', en: 'EN' },
};

export const DICTIONARIES = { es, en };
