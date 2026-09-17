// Étape « statut » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_STATUT = {
      id:"statut",
      titre:"Choisir son statut",
      avertissement:true,
      faire:[
        "Répondre au questionnaire d'orientation ci-dessus",
        "Comparer les trois pistes : micro-entreprise, SASU ou SAS, EURL ou SARL",
        "Noter les questions à poser à un professionnel avant de trancher"
      ],
      documents:[
        "Pièce d'identité",
        "Justificatif de domicile"
      ],
      repere:"Avant toute formalité",
      semaines:0,
      liens:[
        {t:"Entreprendre — service-public.gouv.fr", u:"https://entreprendre.service-public.gouv.fr/"},
        {t:"INPI", u:"https://www.inpi.fr/"}
      ]
    };
