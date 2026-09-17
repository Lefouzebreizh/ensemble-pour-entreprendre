// Étape « banque » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_BANQUE = {
      id:"banque",
      titre:"Banque",
      faire:[
        "Ouvrir un compte dédié à l'activité",
        "Pour une société, déposer le capital selon les modalités indiquées par l'établissement",
        "Séparer les flux personnels et professionnels"
      ],
      documents:[
        "Justificatif d'immatriculation",
        "Pièce d'identité",
        "Les documents réclamés par ton établissement"
      ],
      repere:"Avant les premiers encaissements",
      semaines:4,
      liens:[
        {t:"Entreprendre — service-public.gouv.fr", u:"https://entreprendre.service-public.gouv.fr/"}
      ]
    };
