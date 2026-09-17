// Étape « final » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_FINAL = {
      id:"final",
      titre:"Checklist finale",
      faire:[
        "Vérifier l'immatriculation et récupérer le justificatif",
        "Activer les accès en ligne utiles",
        "Vérifier les mentions légales de tes documents",
        "Mettre en place la facturation",
        "Planifier les déclarations à venir",
        "Archiver les pièces justificatives",
        "Vérifier la cotisation foncière des entreprises et son échéance",
        "Prévoir le suivi annuel : déclarations, comptes et assemblées si tu es en société"
      ],
      documents:[
        "Justificatif d'immatriculation",
        "Statuts, si société",
        "Contrats et assurances"
      ],
      repere:"Une fois l'immatriculation obtenue",
      semaines:8,
      liens:[
        {t:"Annuaire des entreprises", u:"https://annuaire-entreprises.data.gouv.fr/"},
        {t:"impots.gouv.fr", u:"https://www.impots.gouv.fr/"}
      ]
    };
