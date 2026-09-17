// Étape « formalites » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_FORMALITES = {
      id:"formalites",
      titre:"Formalités : guichet unique et annonce légale",
      faire:[
        "Déposer la déclaration sur le guichet unique",
        "Publier une annonce légale si tu crées une société — vérifie si ta situation l'exige",
        "Déclarer les bénéficiaires effectifs si tu crées une société",
        "Suivre l'état du dossier et répondre aux demandes de complément"
      ],
      documents:[
        "Le dossier préparé à l'étape précédente",
        "Les justificatifs réclamés par le guichet unique"
      ],
      repere:"Dès que le dossier est complet — un dossier incomplet suspend le traitement",
      semaines:2,
      liens:[
        {t:"Guichet unique — INPI", u:"https://procedures.inpi.fr/"},
        {t:"Aide à la création d'entreprise — service-public", u:"https://entreprendre.service-public.gouv.fr/vosdroits/F15252"}
      ]
    };
