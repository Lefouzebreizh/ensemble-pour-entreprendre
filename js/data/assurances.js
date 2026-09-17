// Étape « assurances » — pur contenu, zéro dépendance à l'affichage (voir js/engine.js).
// Ajouter une étape future = ajouter un fichier de ce type et l'inscrire dans ETAPES (js/main.js).
const ETAPE_ASSURANCES = {
      id:"assurances",
      titre:"Assurances",
      faire:[
        "Identifier les assurances obligatoires pour ton activité",
        "Vérifier la responsabilité civile professionnelle",
        "Étudier prévoyance et multirisque selon tes besoins",
        "Vérifier l'assurance décennale si ton activité relève du bâtiment"
      ],
      documents:[
        "Description précise de l'activité",
        "Les questionnaires de ton assureur"
      ],
      repere:"Avant le premier chantier, la première prestation ou la première vente",
      semaines:6,
      liens:[
        {t:"Entreprendre — service-public.gouv.fr", u:"https://entreprendre.service-public.gouv.fr/"}
      ]
    };
