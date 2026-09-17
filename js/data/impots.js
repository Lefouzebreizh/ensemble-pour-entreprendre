// Étape « impots » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_IMPOTS = {
      id:"impots",
      titre:"Impôts",
      faire:[
        "Créer son espace professionnel",
        "Vérifier le régime fiscal retenu — impôt sur le revenu ou impôt sur les sociétés — et l'option éventuelle",
        "Déclarer son chiffre d'affaires ou ses résultats selon le régime",
        "Se renseigner sur les options disponibles",
        "Vérifier son régime de TVA : franchise en base ou réel, selon le chiffre d'affaires"
      ],
      documents:[
        "Numéro d'identification de l'entreprise",
        "Justificatifs de chiffre d'affaires ou de résultat"
      ],
      repere:"À l'ouverture de l'espace professionnel — régime, périodicité et options se vérifient à la source",
      semaines:4,
      liens:[
        {t:"impots.gouv.fr", u:"https://www.impots.gouv.fr/"}
      ]
    };
