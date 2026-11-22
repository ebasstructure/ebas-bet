(function () {
  'use strict';

  var T = {
    fr: {
      'meta.title': "EBAS | Bureau d'études structure – béton armé, charpente métallique et bois",
      'meta.desc': "EBAS, bureau d'études structure : conception et exécution en béton armé, charpente métallique et bois, maîtrise d'œuvre, rénovation et réhabilitation.",
      'skip': 'Aller au contenu',
      'brand.aria': 'EBAS, retour en haut de page',
      'brand.sub': "Bureau d'études structure",
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.services': 'Nos services',
      'nav.contact': 'Nous contacter',
      'nav.toggle': 'Ouvrir le menu',
      'hero.title': '<span class="accent">Unis</span> pour bâtir<br>l\'art de <span class="accent italic">demain</span>',
      'hero.lead': 'Conception, exécution et rénovation de structures alliant rigueur technique et esthétique.',
      'hero.cta': 'Nous contacter',
      'about.title': "À propos d'EBAS",
      'about.sub': "Bureau d'Études Structures & Maîtrise d'Œuvre Complète",
      'about.intro': "EBAS (Ecology Building Art Sustainable) est un bureau d'études techniques et de maîtrise d'œuvre dédié à la conception, au dimensionnement et au pilotage d'ouvrages durables, sûrs et optimisés. Alliant rigueur scientifique, culture constructive et sens du détail, nous accompagnons nos clients depuis les premières études jusqu'à la livraison finale de leurs projets.",
      'about.missionT': "Notre mission",
      'about.mission': "Notre mission est de garantir la stabilité, la sécurité et la pérennité des constructions tout en optimisant les choix techniques, économiques et environnementaux. Nous intervenons aussi bien en conception qu'en exécution, en neuf comme en réhabilitation, et assurons également des missions de maîtrise d'œuvre complète pour offrir à nos clients un pilotage global, fluide et cohérent.",
      'about.expT': "Nos expertises",
      'about.exp1t': "Bureau d'Études Structures (Conception & Exécution) :",
      'about.exp1x': "Nous réalisons les études structurelles en béton armé, charpente métallique et structure bois, de la conception amont (faisabilité, APS, APD) jusqu'aux études d'exécution (PRO, DCE, notes de calcul, modélisation BIM et plans d'exécution) selon les normes en vigueur (Eurocodes).",
      'about.exp2t': "Maîtrise d'Œuvre Complète (MOE) :",
      'about.exp2x': "Nous prenons en charge le pilotage global de vos opérations de construction ou de rénovation, de l'analyse technique initiale et l'économie de la construction jusqu'à la direction de l'exécution des travaux (DET), la coordination, la gestion des interfaces et l'accompagnement à la réception (OPR).",
      'about.approachT': "Notre approche",
      'about.approach': "Chez EBAS, nous considérons que la performance technique et la qualité architecturale vont de pair. En travaillant en étroite collaboration avec les maîtres d'ouvrage, architectes, partenaires et entreprises du bâtiment, nous transformons les contraintes techniques en solutions fiables, constructibles et pérennes.",
      'services.title': 'Nos services',
      'services.sub': 'De la conception à la livraison, un accompagnement complet',
      'services.chipsAria': 'Matériaux et domaines',
      'chips.1': 'Béton armé', 'chips.2': 'Charpente métallique', 'chips.3': 'Charpente bois',
      'chips.4': 'Hybride acier-béton', 'chips.5': 'Bois-béton', 'chips.6': 'Rénovation',
      'card1.title': 'Conception',
      'card1.p1': 'Solutions sur mesure en béton armé, charpente métallique et bois.',
      'card1.p2': "Nos conceptions hybrides acier-béton et bois-béton allient robustesse et innovation pour des structures d'exception.",
      'card2.title': 'Exécution en béton armé',
      'card2.intro': 'Pendant la phase d\'exécution, nous réalisons :',
      'card2.l1t': "Plans d'exécution précis", 'card2.l1x': " : plans de coffrage, de ferraillage et d'assemblage, pour une mise en œuvre conforme aux spécifications.",
      'card2.l2t': 'Descente de charges', 'card2.l2x': ' : analyse rigoureuse pour une répartition équilibrée des forces, garantissant la stabilité et la sécurité de la structure.',
      'card2.l3t': 'Modélisation 3D avancée', 'card2.l3x': ' : visualisation exacte du projet, pour faciliter la compréhension et la réalisation.',
      'card3.title': "Maîtrise d'œuvre",
      'card3.p1': "Nous assurons le suivi technique de vos projets, en coordination avec les architectes, les entreprises et les autres intervenants.",
      'card4.title': 'Rénovation &amp; réhabilitation',
      'card4.intro': "Qu'il s'agisse d'une mise à jour ou d'une transformation profonde, notre savoir-faire couvre tout :",
      'card4.l1t': 'Rénovation légère', 'card4.l1x': ' : second œuvre.',
      'card4.l2t': 'Rénovation lourde', 'card4.l2x': ' : redéfinition de la structure, des fondations aux escaliers.',
      'card4.l3t': 'Tous types de constructions', 'card4.l3x': ' : bâtiment classé ou monument historique, préservés et modernisés.',
      'steps.title': 'Notre démarche',
      'steps.1.t': 'Étude', 'steps.1.p': 'Analyse du projet, des contraintes du site et des charges à reprendre.',
      'steps.2.t': 'Conception', 'steps.2.p': 'Dimensionnement et choix de la solution structurelle : béton armé, acier, bois ou hybride.',
      'steps.3.t': 'Exécution et suivi', 'steps.3.p': "Plans d'exécution, descente de charges, modélisation 3D et accompagnement jusqu'à la réalisation.",
      'cta.title': 'Vous avez un projet de structure ?',
      'cta.text': 'Parlons de votre bâtiment, de sa rénovation ou de votre futur chantier.',
      'contact.title': 'Nous contacter',
      'contact.sub': 'Discutons de votre prochain projet',
      'form.name': 'Nom et prénom', 'form.email': 'Email', 'form.phone': 'Téléphone (facultatif)',
      'form.type': 'Type de projet', 'form.choose': 'Choisir…',
      'form.opt1': 'Nouveau projet (conception)', 'form.opt2': 'Exécution béton armé', 'form.opt3': "Maîtrise d'œuvre",
      'form.opt4': 'Rénovation / réhabilitation', 'form.opt5': 'Autre',
      'form.message': 'Message', 'form.submit': 'Envoyer',
      'form.sending': 'Envoi en cours…',
      'form.success': 'Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.',
      'form.error': "Une erreur est survenue. Merci de réessayer ou de nous écrire directement par email.",
      'form.notConfigured': "Le formulaire n'est pas encore configuré. Merci de nous écrire directement par email.",
      'contact.address': 'Adresse', 'contact.phoneLabel': 'Téléphone :', 'contact.emailLabel': 'Email :',
      'contact.mapTitle': "Localisation d'EBAS sur Google Maps", 'contact.directions': 'Itinéraire',
      'footer.rights': "© {year} EBAS, bureau d'études structure. Tous droits réservés.",
      'footer.about': 'À propos', 'footer.services': 'Services', 'footer.contact': 'Contact', 'footer.legal': 'Mentions légales'
    },

    en: {
      'meta.title': 'EBAS | Structural engineering office – reinforced concrete, steel and timber framing',
      'meta.desc': 'EBAS, structural engineering office: design and execution in reinforced concrete, steel and timber framing, project management, renovation and rehabilitation.',
      'skip': 'Skip to content',
      'brand.aria': 'EBAS, back to top',
      'brand.sub': 'Structural engineering office',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.contact': 'Contact us',
      'nav.toggle': 'Open menu',
      'hero.title': '<span class="accent">Together</span>, we build<br>the art of <span class="accent italic">tomorrow</span>',
      'hero.lead': 'Design, execution and renovation of structures combining technical rigour and aesthetics.',
      'hero.cta': 'Contact us',
      'about.title': 'About EBAS',
      'about.sub': "Structural Engineering Office & Full Project Management",
      'about.intro': "EBAS (Ecology Building Art Sustainable) is a technical engineering and project management office dedicated to the design, sizing and management of durable, safe and optimised structures. Combining scientific rigour, constructive culture and attention to detail, we support our clients from the first studies through to the final handover of their projects.",
      'about.missionT': "Our mission",
      'about.mission': "Our mission is to ensure the stability, safety and longevity of buildings while optimising technical, economic and environmental choices. We work on design as well as execution, for new builds and renovations alike, and also provide full project management services to give our clients overall, smooth and coherent oversight.",
      'about.expT': "Our expertise",
      'about.exp1t': "Structural engineering (design & execution):",
      'about.exp1x': "We carry out structural studies in reinforced concrete, steel framing and timber structures, from early design (feasibility, APS, APD) through to execution studies (PRO, DCE, calculation notes, BIM modelling and execution drawings) in accordance with current standards (Eurocodes).",
      'about.exp2t': "Full project management (MOE):",
      'about.exp2x': "We take charge of the overall management of your construction or renovation operations, from initial technical analysis and construction economics through to technical site supervision (DET), coordination, interface management and support through to handover (OPR).",
      'about.approachT': "Our approach",
      'about.approach': "At EBAS, we believe technical performance and architectural quality go hand in hand. Working closely with project owners, architects, partners and building contractors, we turn technical constraints into reliable, buildable and lasting solutions.",
      'services.title': 'Our services',
      'services.sub': 'From design to delivery, full support',
      'services.chipsAria': 'Materials and fields',
      'chips.1': 'Reinforced concrete', 'chips.2': 'Steel framing', 'chips.3': 'Timber framing',
      'chips.4': 'Steel-concrete hybrid', 'chips.5': 'Timber-concrete', 'chips.6': 'Renovation',
      'card1.title': 'Design',
      'card1.p1': 'Tailor-made solutions in reinforced concrete, steel and timber framing.',
      'card1.p2': 'Our steel-concrete and timber-concrete hybrid designs combine strength and innovation for exceptional structures.',
      'card2.title': 'Reinforced concrete execution',
      'card2.intro': 'During the execution phase, we produce:',
      'card2.l1t': 'Precise execution drawings', 'card2.l1x': ': formwork, reinforcement and assembly drawings, for construction that complies with the specifications.',
      'card2.l2t': 'Load analysis', 'card2.l2x': ': rigorous analysis for a balanced distribution of forces, ensuring the stability and safety of the structure.',
      'card2.l3t': 'Advanced 3D modelling', 'card2.l3x': ': exact visualisation of the project, to make it easier to understand and build.',
      'card3.title': 'Project management',
      'card3.p1': 'We provide technical oversight of your projects, in coordination with architects, contractors and other stakeholders.',
      'card4.title': 'Renovation &amp; rehabilitation',
      'card4.intro': 'Whether it is an update or a deep transformation, our expertise covers it all:',
      'card4.l1t': 'Light renovation', 'card4.l1x': ': non-structural works (second fix).',
      'card4.l2t': 'Major renovation', 'card4.l2x': ': restructuring, from foundations to staircases.',
      'card4.l3t': 'All types of buildings', 'card4.l3x': ': listed buildings and historic monuments, preserved and modernised.',
      'steps.title': 'Our approach',
      'steps.1.t': 'Study', 'steps.1.p': 'Analysis of the project, site constraints and loads to carry.',
      'steps.2.t': 'Design', 'steps.2.p': 'Sizing and choice of the structural solution: reinforced concrete, steel, timber or hybrid.',
      'steps.3.t': 'Execution and follow-up', 'steps.3.p': 'Execution drawings, load analysis, 3D modelling and support through to completion.',
      'cta.title': 'Do you have a structural project?',
      'cta.text': 'Let\'s talk about your building, its renovation or your future site.',
      'contact.title': 'Contact us',
      'contact.sub': "Let's discuss your next project",
      'form.name': 'Full name', 'form.email': 'Email', 'form.phone': 'Phone (optional)',
      'form.type': 'Project type', 'form.choose': 'Choose…',
      'form.opt1': 'New project (design)', 'form.opt2': 'Reinforced concrete execution', 'form.opt3': 'Project management',
      'form.opt4': 'Renovation / rehabilitation', 'form.opt5': 'Other',
      'form.message': 'Message', 'form.submit': 'Send',
      'form.sending': 'Sending…',
      'form.success': 'Thank you, your message has been sent. We will reply shortly.',
      'form.error': 'An error occurred. Please try again or email us directly.',
      'form.notConfigured': 'The form is not configured yet. Please email us directly.',
      'contact.address': 'Address', 'contact.phoneLabel': 'Phone:', 'contact.emailLabel': 'Email:',
      'contact.mapTitle': 'EBAS location on Google Maps', 'contact.directions': 'Directions',
      'footer.rights': '© {year} EBAS, structural engineering office. All rights reserved.',
      'footer.about': 'About', 'footer.services': 'Services', 'footer.contact': 'Contact', 'footer.legal': 'Legal notice'
    },

    es: {
      'meta.title': 'EBAS | Oficina de ingeniería estructural – hormigón armado, estructura metálica y de madera',
      'meta.desc': 'EBAS, oficina de ingeniería estructural: diseño y ejecución en hormigón armado, estructura metálica y de madera, dirección de obra, rehabilitación y renovación.',
      'skip': 'Ir al contenido',
      'brand.aria': 'EBAS, volver arriba',
      'brand.sub': 'Oficina de ingeniería estructural',
      'nav.home': 'Inicio',
      'nav.about': 'Sobre nosotros',
      'nav.services': 'Servicios',
      'nav.contact': 'Contacto',
      'nav.toggle': 'Abrir el menú',
      'hero.title': '<span class="accent">Unidos</span> para construir<br>el arte del <span class="accent italic">mañana</span>',
      'hero.lead': 'Diseño, ejecución y renovación de estructuras que combinan rigor técnico y estética.',
      'hero.cta': 'Contacto',
      'about.title': 'Sobre EBAS',
      'about.sub': "Oficina de Ingeniería de Estructuras y Dirección de Obra Completa",
      'about.intro': "EBAS (Ecology Building Art Sustainable) es una oficina técnica de ingeniería y dirección de obra dedicada al diseño, dimensionamiento y dirección de construcciones duraderas, seguras y optimizadas. Combinando rigor científico, cultura constructiva y atención al detalle, acompañamos a nuestros clientes desde los primeros estudios hasta la entrega final de sus proyectos.",
      'about.missionT': "Nuestra misión",
      'about.mission': "Nuestra misión es garantizar la estabilidad, la seguridad y la durabilidad de las construcciones, optimizando al mismo tiempo las decisiones técnicas, económicas y ambientales. Intervenimos tanto en el diseño como en la ejecución, en obra nueva y en rehabilitación, y ofrecemos también servicios de dirección de obra completa para dar a nuestros clientes un seguimiento global, fluido y coherente.",
      'about.expT': "Nuestras especialidades",
      'about.exp1t': "Ingeniería de estructuras (diseño y ejecución):",
      'about.exp1x': "Realizamos estudios estructurales en hormigón armado, estructura metálica y estructura de madera, desde el diseño previo (viabilidad, APS, APD) hasta los estudios de ejecución (PRO, DCE, notas de cálculo, modelado BIM y planos de ejecución), conforme a la normativa vigente (Eurocódigos).",
      'about.exp2t': "Dirección de obra completa (MOE):",
      'about.exp2x': "Nos encargamos de la gestión global de sus operaciones de construcción o rehabilitación, desde el análisis técnico inicial y la economía de la construcción hasta la dirección técnica de la ejecución (DET), la coordinación, la gestión de interfaces y el acompañamiento en la recepción (OPR).",
      'about.approachT': "Nuestro enfoque",
      'about.approach': "En EBAS creemos que el rendimiento técnico y la calidad arquitectónica van de la mano. Trabajando estrechamente con los promotores, arquitectos, socios y empresas de la construcción, convertimos las limitaciones técnicas en soluciones fiables, construibles y duraderas.",
      'services.title': 'Nuestros servicios',
      'services.sub': 'Del diseño a la entrega, acompañamiento completo',
      'services.chipsAria': 'Materiales y ámbitos',
      'chips.1': 'Hormigón armado', 'chips.2': 'Estructura metálica', 'chips.3': 'Estructura de madera',
      'chips.4': 'Híbrido acero-hormigón', 'chips.5': 'Madera-hormigón', 'chips.6': 'Rehabilitación',
      'card1.title': 'Diseño',
      'card1.p1': 'Soluciones a medida en hormigón armado, estructura metálica y de madera.',
      'card1.p2': 'Nuestros diseños híbridos acero-hormigón y madera-hormigón combinan robustez e innovación para estructuras excepcionales.',
      'card2.title': 'Ejecución en hormigón armado',
      'card2.intro': 'Durante la fase de ejecución, realizamos:',
      'card2.l1t': 'Planos de ejecución precisos', 'card2.l1x': ': planos de encofrado, armado y montaje, para una puesta en obra conforme a las especificaciones.',
      'card2.l2t': 'Análisis de cargas', 'card2.l2x': ': análisis riguroso para un reparto equilibrado de las fuerzas, que garantiza la estabilidad y la seguridad de la estructura.',
      'card2.l3t': 'Modelado 3D avanzado', 'card2.l3x': ': visualización exacta del proyecto, para facilitar su comprensión y ejecución.',
      'card3.title': 'Dirección de obra',
      'card3.p1': 'Garantizamos el seguimiento técnico de sus proyectos, en coordinación con arquitectos, empresas y demás intervinientes.',
      'card4.title': 'Renovación y rehabilitación',
      'card4.intro': 'Ya se trate de una actualización o de una transformación profunda, nuestra experiencia lo cubre todo:',
      'card4.l1t': 'Renovación ligera', 'card4.l1x': ': trabajos de acabado (no estructurales).',
      'card4.l2t': 'Renovación integral', 'card4.l2x': ': redefinición de la estructura, desde las cimentaciones hasta las escaleras.',
      'card4.l3t': 'Todo tipo de construcciones', 'card4.l3x': ': edificios catalogados y monumentos históricos, preservados y modernizados.',
      'steps.title': 'Nuestro método',
      'steps.1.t': 'Estudio', 'steps.1.p': 'Análisis del proyecto, de las limitaciones del terreno y de las cargas a soportar.',
      'steps.2.t': 'Diseño', 'steps.2.p': 'Dimensionamiento y elección de la solución estructural: hormigón armado, acero, madera o híbrida.',
      'steps.3.t': 'Ejecución y seguimiento', 'steps.3.p': 'Planos de ejecución, análisis de cargas, modelado 3D y acompañamiento hasta la finalización.',
      'cta.title': '¿Tiene un proyecto de estructura?',
      'cta.text': 'Hablemos de su edificio, de su renovación o de su futura obra.',
      'contact.title': 'Contacto',
      'contact.sub': 'Hablemos de su próximo proyecto',
      'form.name': 'Nombre y apellidos', 'form.email': 'Correo electrónico', 'form.phone': 'Teléfono (opcional)',
      'form.type': 'Tipo de proyecto', 'form.choose': 'Elegir…',
      'form.opt1': 'Nuevo proyecto (diseño)', 'form.opt2': 'Ejecución en hormigón armado', 'form.opt3': 'Dirección de obra',
      'form.opt4': 'Renovación / rehabilitación', 'form.opt5': 'Otro',
      'form.message': 'Mensaje', 'form.submit': 'Enviar',
      'form.sending': 'Enviando…',
      'form.success': 'Gracias, su mensaje se ha enviado. Le responderemos pronto.',
      'form.error': 'Se ha producido un error. Inténtelo de nuevo o escríbanos directamente por correo.',
      'form.notConfigured': 'El formulario aún no está configurado. Escríbanos directamente por correo.',
      'contact.address': 'Dirección', 'contact.phoneLabel': 'Teléfono:', 'contact.emailLabel': 'Correo:',
      'contact.mapTitle': 'Ubicación de EBAS en Google Maps', 'contact.directions': 'Cómo llegar',
      'footer.rights': '© {year} EBAS, oficina de ingeniería estructural. Todos los derechos reservados.',
      'footer.about': 'Sobre nosotros', 'footer.services': 'Servicios', 'footer.contact': 'Contacto', 'footer.legal': 'Aviso legal'
    }
  };

  var LANGS = ['fr', 'en', 'es'];
  var current = 'fr';

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem('ebas-lang'); } catch (e) { /* stockage indisponible */ }
    if (LANGS.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : 'fr';
  }

  // Accès global utilisé par main.js (messages du formulaire)
  window.t = function (key) {
    var txt = (T[current] && T[current][key]) || T.fr[key] || key;
    return txt.replace('{year}', new Date().getFullYear());
  };

  function setText(sel, attr, fn) {
    document.querySelectorAll(sel).forEach(function (el) { fn(el, el.getAttribute(attr)); });
  }

  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = window.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = window.t(el.getAttribute('data-i18n-html'));
    });
    setText('[data-i18n-aria]', 'data-i18n-aria', function (el, key) { el.setAttribute('aria-label', window.t(key)); });
    setText('[data-i18n-title]', 'data-i18n-title', function (el, key) { el.setAttribute('title', window.t(key)); });

    // Le libellé du bouton menu suit l'état ouvert/fermé géré par main.js
    var toggle = document.querySelector('.nav-toggle');
    if (toggle && toggle.getAttribute('aria-expanded') !== 'true') {
      toggle.setAttribute('aria-label', window.t('nav.toggle'));
    }

    document.title = window.t('meta.title');
    var set = function (sel, val) { var m = document.querySelector(sel); if (m) m.setAttribute('content', val); };
    set('meta[name="description"]', window.t('meta.desc'));
    set('meta[property="og:title"]', window.t('meta.title'));
    set('meta[property="og:description"]', window.t('meta.desc'));

    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('active', on);
    });

    try { localStorage.setItem('ebas-lang', lang); } catch (e) { /* ignore */ }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
    apply(detect());
  });
})();
