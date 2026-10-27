// Banco de Preguntas para el Reto Exprés - BacterioReto
// Basado en el syllabus de 2do semestre de Bacteriología y Laboratorio Clínico

export const questionsData = [
  // --- MORFOLOGÍA BACTERIANA ---
  {
    id: "q-morf-01",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    badge: "Caso Clínico • Frotis",
    icono: "bubble_chart",
    enunciado: "En un frotis de exudado purulento de una herida quirúrgica teñido con Gram, observas al microscopio a 1000x cúmulos irregulares de cocos de color violeta intenso.",
    pregunta: "¿Cuál es la interpretación morfológica y taxonómica más probable de este hallazgo?",
    opciones: [
      "Estreptococos Gram positivos que se agruparon por exceso de calor.",
      "Cocos Gram positivos en racimos, característicos de la familia Staphylococcaceae.",
      "Diplococos Gram negativos que no se decoloraron adecuadamente.",
      "Bacilos Gram positivos esporulados observados en corte transversal."
    ],
    correcta: 1,
    explicacion: "Los cocos Gram positivos que se dividen en planos tridimensionales aleatorios forman racimos irregulares semejantes a racimos de uvas, un rasgo distintivo morfológico del género Staphylococcus (como S. aureus). Los estreptococos se dividen en un solo plano formando cadenas continuas.",
    tipParcial: "Regla mnemotécnica rápida: Racimos = Estafilococos (catalasa +); Cadenas lineales = Estreptococos (catalasa -)."
  },
  {
    id: "q-morf-02",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    badge: "Microscopía Urogenital",
    icono: "contrast",
    enunciado: "Al examinar una muestra de frotis uretral de un paciente masculino con uretritis aguda, observas numerosos polimorfonucleares (leucocitos) y dentro del citoplasma de varios de ellos se aprecian parejas de cocos Gram negativos con los lados contiguos aplanados.",
    pregunta: "¿A qué morfología y agente etiológico corresponde este patrón patognomónico?",
    opciones: [
      "Diplococos Gram negativos arriñonados compatibles con Neisseria gonorrhoeae.",
      "Cocos Gram positivos en parejas compatibles con Streptococcus pneumoniae.",
      "Coccobacilos Gram negativos pleomórficos compatibles con Haemophilus ducreyi.",
      "Espiroquetas móviles no visualizables en campo claro compatibles con Treponema."
    ],
    correcta: 0,
    explicacion: "La presencia de diplococos Gram negativos intracelulares con aspecto de 'granos de café' o arriñonados dentro de los leucocitos neutrófilos en secreción uretral masculina tiene una sensibilidad y especificidad superior al 95% para el diagnóstico presuntivo de gonorrea (Neisseria gonorrhoeae).",
    tipParcial: "Los diplococos arriñonados Gram (-) son Neisseria. Los diplococos lanceolados (forma de punta de lanza) Gram (+) son Streptococcus pneumoniae."
  },
  {
    id: "q-morf-03",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    badge: "Estructura Celular",
    icono: "fiber_manual_record",
    enunciado: "Estás observando un frotis de un cultivo de 48 horas en agar nutritivo teñido con Gram. Observas bacilos Gram positivos de gran tamaño, y en el interior de muchos de ellos se advierte una zona ovalada refringente que no tomó el colorante violeta ni la safranina.",
    pregunta: "¿Qué estructura bacteriana explica esta zona incolora y cómo debe teñirse específicamente?",
    opciones: [
      "Es una vacuola lipídica y se tiñe con tinción de Wright.",
      "Es una cápsula de polisacáridos y se tiñe con azul de metileno de Loeffler.",
      "Es una endospora bacteriana y requiere la tinción de Schaeffer-Fulton con calor.",
      "Es una inclusión de glucógeno y se confirma con la tinción de Ziehl-Neelsen."
    ],
    correcta: 2,
    explicacion: "Las endosporas bacterianas producidas por Bacillus y Clostridium poseen una corteza rica en dipicolinato de calcio impermeable a los colorantes en frío de la tinción de Gram, viéndose refringentes o vacías. Para teñirlas se necesita verde de malaquita forzado con vapor de agua (técnica de Schaeffer-Fulton).",
    tipParcial: "La espora es resistente al calor y a químicos, por lo que nunca se tiñe con la tinción de Gram convencional."
  },
  {
    id: "q-morf-04",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    badge: "Urocultivo",
    icono: "horizontal_rule",
    enunciado: "En un sedimento urinario teñido con Gram de una paciente con cistitis bacteriana, observas leucocitos abundantes acompañados de abundantes bastones delgados de color rosado/rojo con extremos redondeados.",
    pregunta: "¿Cuál es la clasificación morfológica correcta de este microorganismo predominante?",
    opciones: [
      "Bacilos Gram positivos fermentadores.",
      "Cocos Gram negativos en pares.",
      "Bacilos Gram negativos, compatibles con enterobacterias como Escherichia coli.",
      "Bacilos ácido-alcohol resistentes (BAAR)."
    ],
    correcta: 2,
    explicacion: "Escherichia coli es el agente causal de más del 80% de las infecciones urinarias no complicadas y corresponde morfológicamente a un bacilo Gram negativo recto de 1 a 3 µm con extremos redondeados, perteneciente a la familia Enterobacteriaceae.",
    tipParcial: "En infección urinaria comunitaria, bacilos Gram (-) en el Gram de orina sin centrifugar casi siempre es E. coli."
  },

  // --- TINCIÓN DE GRAM ---
  {
    id: "q-gram-01",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    badge: "Técnica de Laboratorio",
    icono: "colorize",
    enunciado: "Durante una práctica de laboratorio, un estudiante olvidó aplicar el reactivo Lugol (solución de yodo-yodurada) y continuó directamente con la decoloración con alcohol-acetona y la safranina en una cepa de Staphylococcus aureus.",
    pregunta: "¿Qué resultado erróneo observará al microscopio tras su omisión?",
    opciones: [
      "Los estafilococos se verán de color negro metálico insoluble.",
      "Las bacterias se lisarán por completo y no se verá nada en la lámina.",
      "Los estafilococos Gram positivos se verán rosados (falso Gram negativo).",
      "Los estafilococos retendrán el color violeta con mayor intensidad de lo normal."
    ],
    correcta: 2,
    explicacion: "El Lugol actúa como mordiente formando el complejo macromolecular cristal violeta-iodo (CV-I). Sin este complejo insoluble, las moléculas sueltas de cristal violeta son fácilmente lavadas de la pared celular por el alcohol-acetona, permitiendo que la safranina tiña a la bacteria de rosado (falso Gram negativo).",
    tipParcial: "Sin mordiente (Lugol), NINGUNA bacteria retiene el cristal violeta durante la decoloración."
  },
  {
    id: "q-gram-02",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    badge: "Paso Crítico",
    icono: "water_drop",
    enunciado: "En el procedimiento secuencial de la tinción de Gram (V-I-A-S), uno de los pasos requiere máxima precisión temporal porque un exceso de tiempo altera irreversiblemente el diagnóstico.",
    pregunta: "¿Cuál es este paso crítico y qué fenómeno químico ocurre en las bacterias Gram negativas?",
    opciones: [
      "El cristal violeta durante 3 minutos, que precipita las porinas de la pared.",
      "La decoloración con alcohol-acetona (15-30s), que disuelve los lípidos de la membrana externa.",
      "El lavado con agua destilada, que hidroliza el peptidoglicano por choque osmótico.",
      "La fijación con metanol, que destruye los ácidos teicoicos bacterianos."
    ],
    correcta: 1,
    explicacion: "El paso de decoloración con alcohol-acetona es el más crítico. En bacterias Gram negativas, el solvente orgánico disuelve la bicapa lipídica de la membrana externa y el fino peptidoglicano permite que el complejo CV-I difunda hacia afuera, dejando la bacteria incolora lista para recibir la safranina.",
    tipParcial: "Recuerda el orden exacto: V-I-A-S (Violeta 1 min -> Iodo/Lugol 1 min -> Alcohol-acetona 15-30 seg -> Safranina 1 min)."
  },
  {
    id: "q-gram-03",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    badge: "Bioquímica de Pared",
    icono: "layers",
    enunciado: "La diferencia fundamental de coloración entre bacterias Gram positivas (violetas) y Gram negativas (rosadas) se basa estrictamente en la arquitectura de su envoltura celular.",
    pregunta: "¿Cuál es la característica bioquímica de la pared celular responsable de la retención del cristal violeta?",
    opciones: [
      "Una gruesa capa de peptidoglicano (mureína) densamente entrecruzada que se deshidrata con el alcohol.",
      "Una membrana externa rica en lipopolisacáridos (LPS) cargados positivamente.",
      "La presencia de ácidos micólicos que forman una envoltura cerosa e impermeable.",
      "Una cápsula de ácido hialurónico que reacciona covalentemente con el yodo."
    ],
    correcta: 0,
    explicacion: "Las Gram (+) tienen una pared con 40 a 80 capas superpuestas de peptidoglicano (hasta 80 nm de espesor) enriquecida con ácidos teicoicos y lipoteicoicos. El alcohol deshidrata esta malla cerrando sus microporos, lo que atrapa físicamente el voluminoso complejo CV-I en su interior.",
    tipParcial: "Gram (+) = Peptidoglicano grueso + Ácidos teicoicos. Gram (-) = Peptidoglicano delgado + Membrana externa con LPS (Lípido A)."
  },
  {
    id: "q-gram-04",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    badge: "Control de Calidad",
    icono: "fact_check",
    enunciado: "Un laboratorista tiñe un cultivo de Bacillus subtilis de más de 72 horas de incubación. Al observar al microscopio, nota que muchos bacilos aparecen teñidos de rosado en lugar del violeta esperado para esta especie Gram positiva.",
    pregunta: "¿A qué se debe este fenómeno de variabilidad en la tinción de Gram?",
    opciones: [
      "A que la bacteria mutó su ADN y se convirtió en Gram negativa en el medio.",
      "Al envejecimiento celular y autólisis de la pared celular de peptidoglicano en cultivos viejos (>24h).",
      "A que la safranina desplazó activamente al cristal violeta por afinidad enzimática.",
      "A una contaminación cruzada con endosporas del medio ambiente."
    ],
    correcta: 1,
    explicacion: "En cultivos viejos (mayores a 18-24 horas), la síntesis de pared celular se detiene y las autolisinas bacterianas degradan parcialmente la capa de peptidoglicano. La pared dañada pierde la capacidad de retener el complejo CV-I, dando falsos resultados Gram negativos (tinción Gram variable).",
    tipParcial: "Para una tinción de Gram confiable, los cultivos bacterianos deben tener siempre entre 18 y 24 horas de crecimiento activo."
  },

  // --- MEDIOS DE CULTIVO ---
  {
    id: "q-med-01",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    badge: "Urocultivo • MacConkey",
    icono: "science",
    enunciado: "Siembras una muestra de orina en Agar MacConkey. Tras 24 horas a 37°C, observas colonias brillantes con una intensa coloración fucsia/rosada y un halo turbio de precipitación a su alrededor.",
    pregunta: "¿Cuál es el fundamento bioquímico que explica la coloración fucsia de estas colonias?",
    opciones: [
      "Producción de sulfuro de hidrógeno que precipita con sales de hierro.",
      "Fermentación activa de la lactosa que acidifica el medio y vira el indicador rojo neutro.",
      "Hemólisis beta producida por enzimas termolábiles de bacterias Gram positivas.",
      "Resistencia a sales biliares sin alteración del pH del medio."
    ],
    correcta: 1,
    explicacion: "El Agar MacConkey contiene lactosa como carbohidrato fermentable y rojo neutro como indicador de pH. Microorganismos como Escherichia coli o Klebsiella fermentan la lactosa produciendo ácidos mixtos. La caída de pH por debajo de 6.8 vira el rojo neutro a fucsia y precipita las sales biliares en el halo circundante.",
    tipParcial: "En MacConkey: Fucsia = Lactosa (+) (ej. E. coli, Klebsiella). Incoloras/Transparentes = Lactosa (-) (ej. Salmonella, Shigella, Pseudomonas)."
  },
  {
    id: "q-med-02",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    badge: "Hemólisis en Agar Sangre",
    icono: "bloodtype",
    enunciado: "En una placa de Agar Sangre de carnero al 5% inoculada con un hisopado faríngeo, observas colonias pequeñas rodeadas por una zona completamente clara y transparente donde los eritrocitos fueron lisados en su totalidad.",
    pregunta: "¿Qué tipo de hemólisis se evidencia y qué patógeno clásico produce este patrón?",
    opciones: [
      "Hemólisis Alfa (α) característica de Streptococcus pneumoniae.",
      "Hemólisis Beta (β) característica de Streptococcus pyogenes (Streptococo grupo A).",
      "Hemólisis Gamma (γ) producida por Enterococcus faecalis.",
      "Hemólisis Delta producida por bacilos coliformes fecales."
    ],
    correcta: 1,
    explicacion: "La lisis completa de los eritrocitos con halo totalmente transparente circundante se denomina Beta-hemólisis (β). Es producida por estreptolisinas (estreptolisina O y S) de Streptococcus pyogenes (causante de faringoamigdalitis estreptocócica).",
    tipParcial: "Alfa = halo verdoso/incompleto (metahemoglobina). Beta = halo transparente/completo. Gamma = sin lisis (eritrocitos intactos)."
  },
  {
    id: "q-med-03",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    badge: "Chapman • Selectivo",
    icono: "bakery_dining",
    enunciado: "El Agar Manitol Salado contiene NaCl al 7.5%, D-manitol y rojo de fenol. Tras inocular una muestra de frotis nasal, el agar cambia de color rojo a amarillo brillante alrededor de las colonias desarrolladas.",
    pregunta: "¿Qué propiedad selectiva y diferencial demuestra este viraje?",
    opciones: [
      "Tolerancia al cloruro de sodio y fermentación del manitol, indicativo de Staphylococcus aureus.",
      "Inhibición de cocos y crecimiento exclusivo de bacilos Gram negativos halófilos.",
      "Alcalinización del medio con consumo proteico por Streptococcus pneumoniae.",
      "Producción de hemolisinas que degradan el indicador rojo de fenol."
    ],
    correcta: 0,
    explicacion: "El 7.5% de NaCl selecciona bacterias halotolerantes del género Staphylococcus. La fermentación del manitol produce ácidos que bajan el pH y viran el indicador rojo de fenol a amarillo brillante, lo que diferencia a Staphylococcus aureus (manitol +) de Staphylococcus epidermidis (manitol -, medio sigue rojo).",
    tipParcial: "Manitol Salado: Halotolerante + Vira a amarillo = Staphylococcus aureus presuntivo."
  },
  {
    id: "q-med-04",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    badge: "Clasificación de Medios",
    icono: "category",
    enunciado: "En bacteriología clínica es indispensable diferenciar los tipos de medios de cultivo según su función analítica y composición.",
    pregunta: "¿Cuál de las siguientes afirmaciones describe con precisión a un medio de cultivo enriquecido?",
    opciones: [
      "Contiene inhibidores como antibióticos o colorantes para impedir selectivamente el crecimiento bacteriano.",
      "Añade sustancias altamente nutritivas (sangre, suero, extracto de levadura) que permiten el desarrollo de bacterias muy exigentes.",
      "Posee carbohidratos e indicadores ácido-base para clasificar metabólicamente las colonias.",
      "Tiene un soporte semisólido con muy bajo porcentaje de agar para evaluar movilidad flagelar."
    ],
    correcta: 1,
    explicacion: "Un medio enriquecido (como Agar Sangre o Agar Chocolate) contiene nutrientes complejos suplementarios (factores de crecimiento, hemina, vitaminas) requeridos por bacterias fastidiosas o exigentes nutricionalmente como Haemophilus o Neisseria para poder proliferar.",
    tipParcial: "Enriquecido = aporta nutrientes extra para exigentes. Selectivo = contiene sustancias que inhiben a unos y dejan crecer a otros."
  },

  // --- BIOSEGURIDAD EN EL LABORATORIO ---
  {
    id: "q-bio-01",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    badge: "Niveles de Contención",
    icono: "shield",
    enunciado: "En los laboratorios docentes de microbiología de pregrado donde se trabaja rutinariamente con patógenos humanos moderados como Staphylococcus aureus, Salmonella y Escherichia coli patógena.",
    pregunta: "¿Qué nivel de bioseguridad (BSL) se requiere como estándar mínimo de contención?",
    opciones: [
      "Nivel de Bioseguridad 1 (BSL-1), ya que son cepas de estudiantes.",
      "Nivel de Bioseguridad 2 (BSL-2), con acceso restringido, bata, guantes y autoclave disponible.",
      "Nivel de Bioseguridad 3 (BSL-3), con flujo de aire unidireccional y trajes espaciales.",
      "Nivel de Bioseguridad 4 (BSL-4), con cámaras de presión negativa absoluta."
    ],
    correcta: 1,
    explicacion: "El Nivel de Bioseguridad 2 (BSL-2) es el estándar internacional aplicable a laboratorios universitarios y clínicos que manipulan agentes del Grupo de Riesgo 2 (riesgo individual moderado, bajo riesgo comunitario, con tratamientos y medidas profilácticas eficaces disponibles).",
    tipParcial: "BSL-1: no patógenos (B. subtilis). BSL-2: clínica docente (S. aureus, Salmonella). BSL-3: aerosoles graves (M. tuberculosis). BSL-4: virus letales sin cura (Ébola)."
  },
  {
    id: "q-bio-02",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    badge: "Gestión de Residuos",
    icono: "delete_forever",
    enunciado: "Al terminar de procesar un hisopado faríngeo y realizar una tinción de Gram, te dispones a descartar la lámina portaobjetos rota accidentalmente y el hisopo de algodón con secreción del paciente.",
    pregunta: "¿Cuál es la segregación correcta de estos dos elementos según las normas de bioseguridad?",
    opciones: [
      "Ambos elementos van a la bolsa verde de residuos reciclables previa desinfección.",
      "La lámina rota va al contenedor rígido guardián de cortopunzantes y el hisopo va a la bolsa roja de biosanitarios.",
      "Ambos elementos van a la caneca gris ordinaria para incineración externa.",
      "El hisopo se lava en el grifo y la lámina se deposita en una caja de cartón sin rotular."
    ],
    correcta: 1,
    explicacion: "Todo material de vidrio quebrado, agujas, bisturís o lancetas con potencial riesgo biológico debe descartarse inmediatamente en el guardián de cortopunzantes (recipiente rígido de polipropileno rojo). El hisopo con secreción biológica corresponde a un residuo biosanitario que va a bolsa roja para tratamiento térmico en autoclave.",
    tipParcial: "Cortopunzantes (vidrio roto, agujas) = Guardián rígido rojo (máximo al 75% de llenado). Biosanitarios con fluidos = Bolsa roja."
  },
  {
    id: "q-bio-03",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    badge: "Parámetros Críticos",
    icono: "thermostat",
    enunciado: "Para esterilizar medios de cultivo de agar nutritivo y asegurar la destrucción de todas las formas de vida bacteriana, incluidas las endosporas termo-resistentes, se utiliza el autoclave.",
    pregunta: "¿Cuáles son las condiciones operativas estándar de tiempo, temperatura y presión en el autoclave?",
    opciones: [
      "100°C a presión atmosférica normal durante 60 minutos (ebullición continua).",
      "121°C a 15 libras por pulgada cuadrada (15 psi) de presión durante 15 a 20 minutos.",
      "180°C en calor seco durante 2 horas continuas con ventilación forzada.",
      "65°C a 5 psi durante 30 minutos (pasteurización flash)."
    ],
    correcta: 1,
    explicacion: "El calor húmedo bajo presión de vapor saturado a 121°C (equivalente a 1 atmósfera de sobrepresión o 15 psi / 103 kPa) durante 15 a 20 minutos garantiza la desnaturalización irreversible y coagulación proteica de todas las bacterias vegetativas y endosporas bacterianas.",
    tipParcial: "Parámetros obligatorios de examen: 121 °C, 15 psi (o libras de presión), 15 a 20 minutos."
  },
  {
    id: "q-bio-04",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    badge: "Emergencia en Mesón",
    icono: "warning",
    enunciado: "Durante una siembra bacteriana en el laboratorio, se cae al mesón de trabajo un tubo de ensayo que contenía un cultivo en caldo de Escherichia coli, generándose salpicaduras y rotura del tubo.",
    pregunta: "¿Cuál es el procedimiento inmediato y correcto de bioseguridad para atender este derrame biológico?",
    opciones: [
      "Limpiar inmediatamente con las manos desnudas usando papel periódico y arrojarlo al lavadero.",
      "Avisar a los compañeros, cubrir el derrame con toallas absorbentes, verter hipoclorito de sodio al 0.5% sobre el papel y dejar actuar 20-30 minutos antes de recoger con pinzas.",
      "Aplicar alcohol al 70% directamente con soplete y encender con el mechero de Bunsen para esterilizar.",
      "Secar el mesón con el secador de manos y continuar la siembra normalmente."
    ],
    correcta: 1,
    explicacion: "El protocolo de derrame biológico exige cubrir primero con material absorbente para evitar generar aerosoles o extender la contaminación, luego verter desinfectante clorado (hipoclorito al 0.5% o 5000 ppm) desde la periferia hacia el centro, respetar el tiempo de contacto mínimo de 20 minutos y recoger con guantes y pinzas hacia bolsa roja.",
    tipParcial: "Ante derrames: NUNCA verter el desinfectante a chorro directo sin cubrir primero con papel absorbente, pues eso generaría aerosoles infecciosos peligrosos."
  }
];
