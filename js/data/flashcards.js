// Banco de Fichas de Estudio Clínicas - BacterioReto
// Basado en el syllabus de 2do semestre de Bacteriología y Laboratorio Clínico

export const flashcardsData = [
  // --- TEMA 1: MORFOLOGÍA BACTERIANA ---
  {
    id: "morf-01",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    titulo: "Cocos Gram (+) en Racimos",
    subtitulo: "Agrupación estafilocócica clásica",
    badge: "Gram (+)",
    badgeColor: "primary",
    icono: "bubble_chart",
    tiempo: "División en planos múltiples",
    anverso: {
      concepto: "Agrupación en racimos de uva irregulares tras división tridimensional.",
      destacado: "Staphylococcus spp.",
      nota: "Inmóviles, no forman esporas, catalasa (+)."
    },
    reverso: {
      mecanismo: "La bacteria se divide en planos perpendiculares irregulares y las células hijas permanecen adheridas por puentes de peptidoglicano.",
      relevancia: "Diferenciación inmediata: si es racimo y catalasa positiva, orienta fuertemente hacia la familia Staphylococcaceae frente a estreptococos.",
      microorganismoClave: "Staphylococcus aureus (coagulasa +) y Staphylococcus epidermidis (coagulasa -).",
      tipParcial: "Recuerda: Racimos = Estafilo (uva en griego). Cadenas = Estrepto (cadena flexible en griego)."
    }
  },
  {
    id: "morf-02",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    titulo: "Cocos Gram (+) en Cadenas",
    subtitulo: "Agrupación estreptocócica",
    badge: "Gram (+)",
    badgeColor: "primary",
    icono: "linear_scale",
    tiempo: "División en plano único",
    anverso: {
      concepto: "Esferas dispuestas en parejas o cadenas lineales de longitud variable.",
      destacado: "Streptococcus spp. & Enterococcus spp.",
      nota: "Catalasa (-), fermentadores lácticos obligados o facultativos."
    },
    reverso: {
      mecanismo: "La división celular ocurre estrictamente a lo largo de un solo eje geométrico, impidiendo la separación completa de las células hijas.",
      relevancia: "Al frotis de exudado faríngeo o pus, observar cadenas de cocos Gram (+) sugiere Streptococcus pyogenes (Grupo A) o Streptococcus agalactiae (Grupo B).",
      microorganismoClave: "Streptococcus pyogenes, Streptococcus pneumoniae (en pares), Enterococcus faecalis.",
      tipParcial: "La prueba rápida de catalasa diferencia racimos de cadenas: Estafilo = Catalasa (+), Estrepto = Catalasa (-)."
    }
  },
  {
    id: "morf-03",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    titulo: "Diplococos Gram (-) Arriñonados",
    subtitulo: "Morfología en grano de café",
    badge: "Gram (-)",
    badgeColor: "tertiary",
    icono: "contrast",
    tiempo: "Intracelulares frecuentes",
    anverso: {
      concepto: "Pares de cocos Gram negativos con caras contiguas aplanadas o cóncavas.",
      destacado: "Neisseria spp. & Moraxella catarrhalis",
      nota: "Oxidasa (+), muy exigentes nutricionalmente."
    },
    reverso: {
      mecanismo: "Células que se dividen por un plano y permanecen apareadas, asemejando dos granos de café unidos por su cara plana.",
      relevancia: "El hallazgo de diplococos Gram (-) dentro de leucocitos polimorfonucleares en frotis uretral o LCR es diagnóstico de urgencia presuntiva.",
      microorganismoClave: "Neisseria meningitidis (meningitis) y Neisseria gonorrhoeae (gonorrea).",
      tipParcial: "En secreción uretral masculina: diplococos Gram (-) intracelulares en PMN confirma gonorrea con >95% de especificidad."
    }
  },
  {
    id: "morf-04",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    titulo: "Bacilos Gram (-) Rectos",
    subtitulo: "Enterobacterias y bacilos no fermentadores",
    badge: "Gram (-)",
    badgeColor: "tertiary",
    icono: "horizontal_rule",
    tiempo: "Extremos redondeados",
    anverso: {
      concepto: "Bastoncillos cilíndricos aislados o en pares, con pared externa rica en LPS.",
      destacado: "E. coli, Klebsiella, Pseudomonas",
      nota: "Forma más prevalente en urocultivos e infecciones intrahospitalarias."
    },
    reverso: {
      mecanismo: "Pared delgada de peptidoglicano rodeada por una membrana externa con lipopolisacárido (endotoxina bacteriana).",
      relevancia: "Comprende la inmensa mayoría de patógenos del tracto digestivo y urinario. Su tamaño oscila típicamente entre 1-3 µm de longitud.",
      microorganismoClave: "Escherichia coli, Salmonella enterica, Klebsiella pneumoniae, Pseudomonas aeruginosa.",
      tipParcial: "E. coli es bacilo Gram (-) fermentador de glucosa y lactosa; Pseudomonas aeruginosa es no fermentador (oxidasa +)."
    }
  },
  {
    id: "morf-05",
    tema: "morfologia",
    temaLabel: "Morfología Bacteriana",
    titulo: "Bacilos Gram (+) Esporulados",
    subtitulo: "Formadores de endosporas resistentes",
    badge: "Gram (+)",
    badgeColor: "primary",
    icono: "fiber_manual_record",
    tiempo: "Resistencia térmica extrema",
    anverso: {
      concepto: "Grandes bacilos rectos Gram positivos capaces de producir endosporas refringentes.",
      destacado: "Bacillus spp. (aerobio) & Clostridium spp. (anaerobio)",
      nota: "La espora no se tiñe con Gram y se ve como un espacio transparente dentro del bacilo."
    },
    reverso: {
      mecanismo: "Ante estrés nutricional activan la esporogénesis, formando una capa gruesa de dipicolinato de calcio resistente al calor, radiación y desecación.",
      relevancia: "Cruciales en microbiología industrial y médica: el autoclave (121°C) es el único método que asegura la destrucción de estas endosporas.",
      microorganismoClave: "Bacillus anthracis (ántrax), Clostridium tetani (tétanos), Clostridium botulinum.",
      tipParcial: "Para teñir esporas NO se usa Gram: se utiliza la tinción especial de Schaeffer-Fulton (Verde de malaquita + calor)."
    }
  },

  // --- TEMA 2: TINCIÓN DE GRAM ---
  {
    id: "gram-01",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    titulo: "Paso 1: Cristal Violeta",
    subtitulo: "Colorante básico primario",
    badge: "V - I - A - S",
    badgeColor: "primary",
    icono: "colorize",
    tiempo: "1 minuto (60 seg)",
    anverso: {
      concepto: "Solución de cristal violeta al 1% con fenol.",
      destacado: "Todas las células se tiñen de violeta intenso.",
      nota: "Penetra activamente en el citoplasma de todas las bacterias."
    },
    reverso: {
      mecanismo: "El catión del cristal violeta se une electrostáticamente a los ácidos teicoicos cargados negativamente y al citoplasma de las bacterias.",
      relevancia: "Establece la tinción basal. Si suspendes el procedimiento en este punto, tanto Gram positivas como Gram negativas lucen violetas al microscopio.",
      microorganismoClave: "Aplica universalmente a frotis fijados previamente al calor.",
      tipParcial: "Si no fijas con calor antes del cristal violeta, la muestra se desprende de la lámina durante los lavados con agua corriente."
    }
  },
  {
    id: "gram-02",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    titulo: "Paso 2: Lugol (Mordiente)",
    subtitulo: "Fijador iodo-iodurado",
    badge: "V - I - A - S",
    badgeColor: "secondary",
    icono: "lock",
    tiempo: "1 minuto (60 seg)",
    anverso: {
      concepto: "Solución de yodo y yoduro de potasio en agua.",
      destacado: "Forma el complejo insoluble Cristal Violeta - Iodo (CV-I).",
      nota: "El mordiente no tiñe por sí mismo: aumenta la afinidad química."
    },
    reverso: {
      mecanismo: "Las moléculas de yodo ingresan a la célula y forman complejos multiméricos macromoleculares grandes con el cristal violeta (complejo CV-I).",
      relevancia: "Este complejo voluminoso queda atrapado dentro de la densa malla de mureína (peptidoglicano) de las bacterias Gram positivas.",
      microorganismoClave: "Ambos tipos de células continúan luciendo violeta-azuladas oscuras.",
      tipParcial: "Sin lugol, el cristal violeta no se fija y el alcohol lavará el colorante incluso de las Gram positivas (falso Gram negativo)."
    }
  },
  {
    id: "gram-03",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    titulo: "Paso 3: Alcohol-Acetona (Crítico)",
    subtitulo: "Agente decolorante diferencial",
    badge: "Paso Crítico",
    badgeColor: "tertiary",
    icono: "water_drop",
    tiempo: "15 a 30 segundos (¡Muy breve!)",
    anverso: {
      concepto: "Mezcla de etanol y acetona (normalmente proporción 1:1 o 7:3).",
      destacado: "Diferencia: Gram (+) quedan violeta, Gram (-) se decoloran.",
      nota: "El paso más sensible a errores técnicos de todo el laboratorio."
    },
    reverso: {
      mecanismo: "En Gram (+), deshidrata el peptidoglicano cerrando los poros y reteniendo el CV-I. En Gram (-), disuelve los lípidos de la membrana externa y el complejo escapa por la delgada pared.",
      relevancia: "Si decoloras poco tiempo, las Gram (-) retendrán violeta (falso Gram +). Si decoloras en exceso, deslavarás también a las Gram (+) (falso Gram -).",
      microorganismoClave: "Marca el punto de bifurcación diagnóstica real entre ambos linajes bacterianos.",
      tipParcial: "Pregunta fija de examen: ¿Qué le pasa a la pared de una Gram negativa al agregar alcohol-acetona? Se disuelven los lípidos de su membrana externa."
    }
  },
  {
    id: "gram-04",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    titulo: "Paso 4: Safranina (Contraste)",
    subtitulo: "Colorante secundario rosado/rojo",
    badge: "V - I - A - S",
    badgeColor: "tertiary",
    icono: "brush",
    tiempo: "1 minuto (60 seg)",
    anverso: {
      concepto: "Solución hidroalcohólica de safranin-O al 0.5%.",
      destacado: "Tiñe selectivamente las células decoloradas de rosado/rojo.",
      nota: "Las Gram (+) no se alteran porque el violeta es ópticamente dominante."
    },
    reverso: {
      mecanismo: "Colorante básico catiónico que impregna el citoplasma de las bacterias que quedaron incoloras tras el paso de decoloración.",
      relevancia: "Permite visualizar los bacilos y cocos Gram negativos (como E. coli, Neisseria o Pseudomonas) en contraste óptico perfecto con el fondo del microscopio.",
      microorganismoClave: "En frotis sanguíneos, el núcleo de los leucocitos también toma tinción rosada o violeta pálida.",
      tipParcial: "Como alternativa a la safranina se puede usar fucsina básica (0.1%), que ofrece mayor nitidez en bacterias Gram negativas fastidiosas como Legionella o Campylobacter."
    }
  },
  {
    id: "gram-05",
    tema: "gram",
    temaLabel: "Tinción de Gram",
    titulo: "Estructura de la Pared Celular",
    subtitulo: "Gram positiva vs Gram negativa",
    badge: "Bioquímica",
    badgeColor: "secondary",
    icono: "layers",
    tiempo: "Fundamento Teórico",
    anverso: {
      concepto: "Gram (+): Peptidoglicano grueso (40-80 capas) + ácidos teicoicos.",
      destacado: "Gram (-): Peptidoglicano fino (1-2 capas) + membrana externa con LPS.",
      nota: "El espacio periplásmico es mucho más amplio y complejo en Gram (-)."
    },
    reverso: {
      mecanismo: "El peptidoglicano (mureína) está formado por cadenas alternadas de NAG y NAM unidas por enlaces beta-1,4 y entrecruzadas por puentes de tetrapéptidos.",
      relevancia: "Explica la sensibilidad diferencial a antibióticos: las Gram (+) son muy sensibles a betalactámicos por su pared expuesta; las Gram (-) tienen barrera de membrana externa y porinas.",
      microorganismoClave: "El Lipopolisacárido (LPS) de Gram (-) está formado por Lípido A (endotoxina tóxica), Core polisacárido y Antígeno O.",
      tipParcial: "¿Qué componente del LPS provoca choque séptico y fiebre? El Lípido A (endotoxina)."
    }
  },

  // --- TEMA 3: MEDIOS DE CULTIVO ---
  {
    id: "med-01",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    titulo: "Agar MacConkey",
    subtitulo: "Selectivo y diferencial para enterobacterias",
    badge: "Selectivo/Dif.",
    badgeColor: "primary",
    icono: "science",
    tiempo: "35-37°C / 18-24 horas",
    anverso: {
      concepto: "Inhibe Gram (+) y diferencia Gram (-) por fermentación de lactosa.",
      destacado: "Lactosa (+) = Colonias fucsia/rosadas con halo de precipitado.",
      nota: "Lactosa (-) = Colonias transparentes, beige o incoloras."
    },
    reverso: {
      mecanismo: "Selectividad: Cristal violeta y sales biliares impiden el crecimiento de Gram (+). Diferencial: Lactosa + indicador rojo neutro. Al fermentar lactosa se generan ácidos que viran el indicador a fucsia.",
      relevancia: "Medio de primera elección en urocultivos y coprocultivos ante sospecha de enterobacterias patógenas.",
      microorganismoClave: "Lactosa (+): E. coli, Klebsiella pneumoniae. Lactosa (-): Salmonella spp., Shigella spp., Proteus spp., Pseudomonas aeruginosa.",
      tipParcial: "Recuerda: E. coli da colonias fucsia con halo turbio de sales biliares precipitadas en MacConkey por alta producción ácida."
    }
  },
  {
    id: "med-02",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    titulo: "Agar Sangre de Carnero (5%)",
    subtitulo: "Medio enriquecido y diferencial de hemólisis",
    badge: "Enriquecido",
    badgeColor: "tertiary",
    icono: "bloodtype",
    tiempo: "35-37°C / 24 horas",
    anverso: {
      concepto: "Base de agar tripticasa soya suplementada con sangre ovina desfibrinada al 5%.",
      destacado: "Permite crecer a bacterias exigentes y clasificar por tipo de hemólisis.",
      nota: "Se usa como medio universal de aislamiento primario en muestras clínicas."
    },
    reverso: {
      mecanismo: "Alfa (α): Hemólisis parcial, halo verdoso por reducción de hemoglobina a metahemoglobina (S. pneumoniae, viridans). Beta (β): Lisis total de eritrocitos, halo transparente claro (S. pyogenes, S. agalactiae, S. aureus). Gamma (γ): Sin hemólisis (Enterococcus faecalis).",
      relevancia: "Clave para clasificar clínicamente a los estreptococos según la propuesta histórica de Brown.",
      microorganismoClave: "Streptococcus pyogenes = Beta-hemolítico sensible a bacitracina (taxo A).",
      tipParcial: "¡Cuidado! Alfa = verde/parcial. Beta = transparente/total. Gamma = nada (medio intacto)."
    }
  },
  {
    id: "med-03",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    titulo: "Agar Manitol Salado (Chapman)",
    subtitulo: "Selectivo y diferencial para estafilococos",
    badge: "Hipersalino",
    badgeColor: "secondary",
    icono: "bakery_dining",
    tiempo: "35-37°C / 24-48 horas",
    anverso: {
      concepto: "Alta concentración de Cloruro de Sodio (NaCl 7.5%) + D-Manitol.",
      destacado: "Viraje a amarillo = Fermentador de Manitol (S. aureus).",
      nota: "Colonias rojas/rosadas = No fermentador (S. epidermidis)."
    },
    reverso: {
      mecanismo: "Selectividad: 7.5% de NaCl crea una presión osmótica intolerable para la mayoría de bacterias salvo el género halófilo facultativo Staphylococcus. Diferencial: Rojo de fenol vira de rojo a amarillo brillante a pH ácido <6.8 cuando se fermenta el manitol.",
      relevancia: "Permite la pesquisa rápida de Staphylococcus aureus en portadores nasales y frotis de heridas.",
      microorganismoClave: "Staphylococcus aureus = Halotolerante y Manitol (+). Staphylococcus epidermidis = Halotolerante pero Manitol (-).",
      tipParcial: "¿Quién vira a amarillo en Agar Salado Manitol? Únicamente Staphylococcus aureus y algunas cepas raras como S. saprophyticus."
    }
  },
  {
    id: "med-04",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    titulo: "Agar Eosina Azul de Metileno (EMB)",
    subtitulo: "Diferenciación selectiva de bacilos entéricos",
    badge: "Diferencial",
    badgeColor: "primary",
    icono: "colorize",
    tiempo: "35-37°C / 24 horas",
    anverso: {
      concepto: "Colorantes Eosina Y y Azul de Metileno + Lactosa y Sacarosa.",
      destacado: "E. coli produce colonias con característico brillo verde metálico.",
      nota: "Inhibe la gran mayoría de bacterias Gram positivas."
    },
    reverso: {
      mecanismo: "Los colorantes actúan como inhibidores débiles de Gram (+) y como indicadores de pH. Las bacterias que fermentan rápidamente la lactosa precipitan ambos colorantes formando un complejo con reflejo verde esmeralda iridiscente.",
      relevancia: "Patognomónico para identificación presuntiva rápida de Escherichia coli en microbiología de aguas y alimentos.",
      microorganismoClave: "Escherichia coli (brillo verde metálico), Klebsiella (colonias mucoides oscuras sin brillo metálico).",
      tipParcial: "Si en una pregunta te mencionan 'colonias oscuras con brillo verde metálico', la respuesta inmediata es Escherichia coli en agar EMB."
    }
  },
  {
    id: "med-05",
    tema: "medios",
    temaLabel: "Medios de Cultivo",
    titulo: "Agar Chocolate",
    subtitulo: "Medio altamente enriquecido para exigentes",
    badge: "Enriquecido",
    badgeColor: "secondary",
    icono: "coffee",
    tiempo: "35-37°C / 5% CO2 (vela)",
    anverso: {
      concepto: "Agar sangre calentado a 80°C hasta lisar los glóbulos rojos.",
      destacado: "Libera Factores X (hemina) y V (NAD) indispensables para fastidiosos.",
      nota: "Su color marrón chocolate se debe a la desnaturalización de la hemoglobina."
    },
    reverso: {
      mecanismo: "La lisis térmica de los eritrocitos inactiva enzimas que degradan el NAD y libera los factores esenciales que bacterias como Haemophilus influenzae y Neisseria gonorrhoeae no pueden sintetizar por sí mismas.",
      relevancia: "Esencial para el cultivo de líquidos estériles críticos como Líquido Cefalorraquídeo (LCR) y líquido sinovial.",
      microorganismoClave: "Haemophilus influenzae (requiere Factor X y Factor V) y Neisseria meningitidis.",
      tipParcial: "El agar chocolate NO contiene chocolate comercial; se llama así exclusivamente por su color marrón tras el calentamiento de la sangre."
    }
  },

  // --- TEMA 4: BIOSEGURIDAD EN EL LABORATORIO ---
  {
    id: "bio-01",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    titulo: "Niveles de Bioseguridad (BSL-1 a BSL-4)",
    subtitulo: "Clasificación de riesgo de la OMS y CDC",
    badge: "Normativa",
    badgeColor: "secondary",
    icono: "shield",
    tiempo: "Estándar Universal",
    anverso: {
      concepto: "4 niveles progresivos según la patogenicidad y vía de transmisión.",
      destacado: "BSL-2: Nivel estándar en docencia y laboratorios clínicos universitarios.",
      nota: "BSL-3 requiere presión negativa y BSL-4 trajes de presión positiva."
    },
    reverso: {
      mecanismo: "BSL-1: Agentes sin riesgo conocido en adultos sanos (ej. Bacillus subtilis, E. coli K12). BSL-2: Patógenos humanos con riesgo moderado, transmitidos por ingestión o percutánea (ej. Staphylococcus aureus, Salmonella, Hepatitis B). BSL-3: Patógenos con riesgo letal transmitidos por aerosoles (ej. Mycobacterium tuberculosis). BSL-4: Virus letales sin cura ni vacuna (ej. Ébola, Marburgo).",
      relevancia: "Garantiza la contención física del agente biológico para proteger al laboratorista y a la comunidad.",
      microorganismoClave: "En el laboratorio universitario de 2do semestre trabajas en condiciones de BSL-2.",
      tipParcial: "¿En qué nivel se ubica Mycobacterium tuberculosis? En BSL-3 (Nivel de Bioseguridad 3) por su fácil transmisión por aerosoles inhalatorios."
    }
  },
  {
    id: "bio-02",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    titulo: "Segregación y Código de Residuos",
    subtitulo: "Gestión ambiental hospitalaria y de laboratorio",
    badge: "Gestión",
    badgeColor: "tertiary",
    icono: "delete_forever",
    tiempo: "Descarte Correcto",
    anverso: {
      concepto: "Bolsa Roja: Residuos biosanitarios con riesgo biológico infeccioso.",
      destacado: "Guardián de Cortopunzantes: Agujas, lancetas, bisturís y láminas rotas.",
      nota: "Bolsa Verde/Gris: Residuos ordinarios y reciclables no contaminados."
    },
    reverso: {
      mecanismo: "Los residuos biológicos se inactivan mediante autoclave previa disposición final para evitar la contaminación de napas subterráneas o contagio del personal de aseo.",
      relevancia: "El guardián es un recipiente plástico rígido e impermeable con cierre hermético que NUNCA debe llenarse más allá de sus 3/4 partes (75% de capacidad).",
      microorganismoClave: "Cultivos bacterianos en cajas de Petri, aplicadores, gasas con sangre y torundas van siempre a Bolsa Roja.",
      tipParcial: "¡Nunca re-encapuchar una aguja hipodérmica con las dos manos! Se descarta directamente en el guardián cortopunzante."
    }
  },
  {
    id: "bio-03",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    titulo: "Esterilización en Autoclave",
    subtitulo: "Calor húmedo a presión",
    badge: "Esterilización",
    badgeColor: "primary",
    icono: "thermostat",
    tiempo: "121°C • 15 psi • 15 a 20 min",
    anverso: {
      concepto: "Método de elección para esterilizar medios de cultivo e inactivar desechos.",
      destacado: "Parámetros obligatorios: 121°C, 1 atmósfera (15 lb/in² o psi), 15-20 min.",
      nota: "Desnaturaliza irreversiblemente todas las proteínas celulares y esporas."
    },
    reverso: {
      mecanismo: "El vapor saturado de agua a presión tiene una alta capacidad de penetración y transferencia térmica latente, desnaturalizando enzimas vitales y coagulando el protoplasma bacteriano.",
      relevancia: "Para el control biológico periódico de eficacia de la autoclave se emplean ampollas con esporas del termófilo Geobacillus stearothermophilus.",
      microorganismoClave: "Es el único procedimiento capaz de aniquilar endosporas bacterianas de Bacillus y Clostridium de forma rutinaria.",
      tipParcial: "Parámetros de memoria para el parcial: 121 grados centígrados, 15 libras de presión (psi), durante mínimo 15 a 20 minutos."
    }
  },
  {
    id: "bio-04",
    tema: "bioseguridad",
    temaLabel: "Bioseguridad en el Laboratorio",
    titulo: "Manejo de Derrames Biológicos",
    subtitulo: "Protocolo de contingencia inmediata en mesón",
    badge: "Protocolo",
    badgeColor: "tertiary",
    icono: "warning",
    tiempo: "20 minutos de acción",
    anverso: {
      concepto: "Acción inmediata ante rotura de tubos o vuelco de cultivos vivos en el mesón.",
      destacado: "1. Notificar y evacuar aerosoles. 2. Cubrir con toallas. 3. Hipoclorito 0.5%.",
      nota: "Dejar actuar el desinfectante un mínimo de 20 a 30 minutos."
    },
    reverso: {
      mecanismo: "El hipoclorito de sodio genera ácido hipocloroso (HOCl) libre que oxida grupos sulfhidrilo esenciales en proteínas de la membrana y daña el ácido nucleico viral/bacteriano.",
      relevancia: "Cubrir primero con papel absorbente evita que al verter el líquido desinfectante se salpique el inóculo infeccioso o se generen aerosoles peligrosos.",
      microorganismoClave: "Todo el material usado en la limpieza se descarta directamente en bolsa roja para autoclave.",
      tipParcial: "¿Qué concentración de hipoclorito se usa para derrames de sangre o cultivos concentrados? Hipoclorito al 0.5% (5000 ppm de cloro activo) o al 1% en sangre franca."
    }
  }
];
