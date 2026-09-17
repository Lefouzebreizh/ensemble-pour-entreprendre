// Étape « dossier » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_DOSSIER = {
      id:"dossier",
      titre:"Préparer son dossier",
      faire:[
        "Décrire l'activité en une phrase claire",
        "Choisir un nom et vérifier sa disponibilité",
        "Rassembler les pièces demandées",
        "Rédiger les statuts si tu crées une société — avec un accompagnement professionnel"
      ],
      documents:[
        "Pièce d'identité",
        "Justificatif de domicile",
        "Les pièces complémentaires réclamées par le guichet unique, selon ta situation"
      ],
      repere:"Avant le dépôt",
      semaines:1,
      liens:[
        {t:"Guichet unique — INPI", u:"https://procedures.inpi.fr/"},
        {t:"INPI", u:"https://www.inpi.fr/"}
      ]
    };
