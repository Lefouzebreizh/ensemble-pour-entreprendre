// Moteur de la page : questionnaire d'orientation, parcours en huit étapes,
// checklist datée. Il ne connaît que la forme des données (ETAPES, PISTES) ;
// il ne contient aucun contenu en dur. Voir js/data/ et js/main.js.
// Appelé par js/main.js une fois les données chargées.
function demarrerLeMoteur(){
  "use strict";

  /* ---------------- Formulaire d'orientation ---------------- */
  var formulaire = document.getElementById("formulaire");
  var resultat = document.getElementById("resultat");

  function reinitialiserFormulaire(){
    formulaire.reset();
    resultat.hidden = true;
    resultat.innerHTML = "";
  }

  formulaire.addEventListener("submit", function(evenement){
    evenement.preventDefault();
    if(!formulaire.reportValidity()){ return; }

    var donnees = new FormData(formulaire);
    var q1 = donnees.get("q1");
    var q3 = donnees.get("q3");
    var q4 = donnees.get("q4");

    /* Règles d'orientation, volontairement structurelles :
       - une SASU est unipersonnelle, donc « à plusieurs » oriente vers une
         société pluripersonnelle (SAS ou SARL) ;
       - la TVA ne départage pas les statuts : une micro-entreprise peut
         facturer la TVA, la question ne pèse donc pas ici ;
       - la protection du patrimoine ne départage plus les statuts depuis la
         séparation automatique des patrimoines de l'entrepreneur individuel. */
    var piste;
    if(q1 === "plusieurs" || q4 === "oui"){
      piste = "societe";
    } else if(q3 === "charges" || q3 === "remuneration"){
      piste = "eurl";
    } else {
      piste = "micro";
    }

    var p = PISTES[piste];
    var html = "";
    html += "<h3>Piste d'orientation : " + p.titre + "</h3>";
    html += "<p class=\"titre-liste\">Pourquoi cette piste</p><ul>";
    p.pourquoi.forEach(function(l){ html += "<li>" + l + "</li>"; });
    html += "</ul>";
    html += "<p class=\"titre-liste\">Points de vigilance</p><ul>";
    p.vigilance.forEach(function(l){ html += "<li>" + l + "</li>"; });
    html += "</ul>";
    html += "<p><strong>C'est une orientation, pas une décision.</strong> Aucun plafond, aucun taux ni aucun délai n'est avancé ici : " +
            "ces valeurs dépendent de ton activité et de ta situation, et se vérifient à la source.</p>";
    html += "<p><a href=\"https://entreprendre.service-public.gouv.fr/\">Comparer les statuts — service-public.gouv.fr</a></p>";
    html += "<p><button type=\"button\" class=\"secondaire\" id=\"effacer-resultat\">Refaire le questionnaire</button></p>";

    resultat.innerHTML = html;
    resultat.hidden = false;
    document.getElementById("effacer-resultat").addEventListener("click", reinitialiserFormulaire);
    resultat.scrollIntoView({block:"nearest"});
  });

  /* ---------------- Parcours ---------------- */
  var zoneEtapes = document.getElementById("etapes");

  ETAPES.forEach(function(etape, indice){
    var article = document.createElement("article");
    article.className = "carte etape";
    var h = "";
    h += "<p class=\"num\">Étape " + (indice + 1) + " sur " + ETAPES.length + "</p>";
    h += "<h3>" + etape.titre + "</h3>";

    if(etape.avertissement){
      h += "<div class=\"avertissement\"><p><strong>Rappel :</strong> ce parcours est un outil d'orientation et de préparation. " +
           "Il ne remplace ni un conseil juridique, ni un conseil comptable, ni un conseil fiscal. Ce que tu coches ici n'est pas un acte juridique : " +
           "les formalités se font auprès des organismes officiels.</p></div>";
    }

    h += "<p class=\"titre-liste\">À faire</p><ul>";
    etape.faire.forEach(function(l){ h += "<li>" + l + "</li>"; });
    h += "</ul>";

    h += "<p class=\"titre-liste\">Documents à préparer</p><ul>";
    etape.documents.forEach(function(l){ h += "<li>" + l + "</li>"; });
    h += "</ul>";

    h += "<p class=\"repere\"><b>Repère de travail :</b> " + etape.repere +
         "<span class=\"verifier\">à vérifier à la source</span></p>";

    h += "<p class=\"liens\">";
    etape.liens.forEach(function(lien){
      h += "<a href=\"" + lien.u + "\" rel=\"noopener\">" + lien.t + "</a>";
    });
    h += "</p>";

    article.innerHTML = h;
    zoneEtapes.appendChild(article);
  });

  /* ---------------- Checklist avec dates ---------------- */
  var champDepart = document.getElementById("depart");
  var zoneGroupes = document.getElementById("groupes");
  var jauge = document.getElementById("jauge");
  var jaugeRemplie = document.getElementById("jauge-remplie");
  var compte = document.getElementById("compte");

  var etat = Coffre.lire();

  function enregistrer(){ Coffre.enregistrer(etat); }

  function cleCase(etapeId, indice){
    return etapeId + "::" + indice;
  }

  function toutesLesCases(){
    var liste = [];
    ETAPES.forEach(function(etape){
      etape.faire.forEach(function(_, indice){ liste.push(cleCase(etape.id, indice)); });
    });
    return liste;
  }

  function majJauge(){
    var cases = toutesLesCases();
    var total = cases.length;
    var faites = 0;
    cases.forEach(function(cle){ if(etat.coches[cle]){ faites += 1; } });
    var pourcent = total ? Math.round((faites / total) * 100) : 0;
    jaugeRemplie.style.width = pourcent + "%";
    jauge.setAttribute("aria-valuenow", String(pourcent));
    compte.textContent = faites + " point" + (faites > 1 ? "s" : "") + " sur " + total +
                         " — " + pourcent + " %";
  }

  function construireChecklist(){
    zoneGroupes.innerHTML = "";
    ETAPES.forEach(function(etape, indiceEtape){
      var groupe = document.createElement("div");
      groupe.className = "groupe-checklist";

      var date = dateDuRepere(etat.depart, etape.semaines);
      var entete = "<h3>" + (indiceEtape + 1) + ". " + etape.titre + "</h3>";
      if(date){
        entete += "<p class=\"repere\">Semaine du <b>" + date + "</b> — plan de travail, pas une échéance légale.</p>";
      }
      groupe.innerHTML = entete;

      etape.faire.forEach(function(libelle, indice){
        var cle = cleCase(etape.id, indice);
        var identifiant = "case-" + etape.id + "-" + indice;
        var ligne = document.createElement("label");
        ligne.className = "check";
        ligne.setAttribute("for", identifiant);
        var boite = document.createElement("input");
        boite.type = "checkbox";
        boite.id = identifiant;
        boite.checked = !!etat.coches[cle];
        boite.addEventListener("change", function(){
          if(boite.checked){ etat.coches[cle] = true; } else { delete etat.coches[cle]; }
          enregistrer();
          majJauge();
        });
        var texte = document.createElement("span");
        texte.textContent = libelle;
        ligne.appendChild(boite);
        ligne.appendChild(texte);
        groupe.appendChild(ligne);
      });

      zoneGroupes.appendChild(groupe);
    });
    majJauge();
  }

  champDepart.value = etat.depart || "";
  champDepart.addEventListener("change", function(){
    etat.depart = champDepart.value || "";
    enregistrer();
    construireChecklist();
  });

  document.getElementById("reinitialiser").addEventListener("click", function(){
    if(!window.confirm("Tout décocher et effacer la date de départ ?")){ return; }
    etat = { depart:"", coches:{} };
    champDepart.value = "";
    Coffre.effacer();
    construireChecklist();
  });

  construireChecklist();
}
