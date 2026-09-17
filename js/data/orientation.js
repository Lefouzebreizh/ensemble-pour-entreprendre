// Les trois pistes d'orientation — pur contenu, listé par js/engine.js.
const PISTES = {
    micro:{
      titre:"Micro-entreprise (auto-entrepreneur)",
      pourquoi:[
        "Tu démarres seul, sans associé.",
        "Tu veux le moins de formalités possible.",
        "Tu n'as pas besoin de déduire tes charges pour l'instant."
      ],
      vigilance:[
        "Un plafond de chiffre d'affaires encadre ce régime : vérifie-le à la source, il dépend de ton activité.",
        "La déduction des charges réelles n'est pas possible de la même façon qu'en société.",
        "Certaines activités en sont exclues ou relèvent d'un régime particulier."
      ]
    },
    societe:{
      titre:"Société par actions : SASU si tu es seul, SAS si vous êtes plusieurs",
      pourquoi:[
        "Tu démarres à plusieurs, ou tu veux pouvoir accueillir de nouveaux associés facilement.",
        "La souplesse de fonctionnement et de répartition des parts compte pour toi.",
        "Tu veux arbitrer entre rémunération et dividendes."
      ],
      vigilance:[
        "Une SASU est unipersonnelle : dès qu'un deuxième associé entre, elle devient une SAS.",
        "Des statuts écrits sont nécessaires : fais-les relire avant signature.",
        "Les règles sociales du dirigeant diffèrent de celles d'une entreprise individuelle.",
        "La comptabilité et les obligations déclaratives sont plus lourdes."
      ]
    },
    eurl:{
      titre:"EURL ou SARL (société à responsabilité limitée)",
      pourquoi:[
        "Tu démarres seul, mais tu veux déduire tes charges et piloter finement.",
        "Tu cherches un cadre plus encadré que la société par actions.",
        "Tu prévois des revenus qui rendent la micro-entreprise inadaptée — à vérifier à la source avec des chiffres réels."
      ],
      vigilance:[
        "La protection de ton patrimoine personnel ne dépend plus du statut : l'entrepreneur individuel bénéficie d'une séparation automatique des patrimoines — à vérifier à la source.",
        "Des statuts écrits sont nécessaires : fais-les relire avant signature.",
        "Le passage de l'entreprise individuelle à la société ne se défait pas d'un clic.",
        "Les obligations comptables sont plus lourdes qu'en micro-entreprise."
      ]
    }
  };
