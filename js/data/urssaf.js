// Étape « urssaf » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_URSSAF = {
      id:"urssaf",
      titre:"Urssaf",
      faire:[
        "Créer son compte",
        "Déclarer l'activité selon le régime retenu",
        "Organiser ses déclarations périodiques",
        "Vérifier ta protection sociale de dirigeant : régime des indépendants ou assimilé salarié, selon le statut",
        "Vérifier ses options et ses échéances dans l'espace en ligne"
      ],
      documents:[
        "Numéro d'identification de l'entreprise, une fois attribué",
        "Coordonnées bancaires"
      ],
      repere:"Après l'immatriculation — les périodicités dépendent du régime et se vérifient à la source",
      semaines:3,
      liens:[
        {t:"Urssaf", u:"https://www.urssaf.fr/"},
        {t:"Auto-entrepreneur — Urssaf", u:"https://www.autoentrepreneur.urssaf.fr/"}
      ]
    };
