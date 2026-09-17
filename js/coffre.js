// Le coffre local : la date de départ et les cases cochées restent sur l'appareil.
// Rien n'est envoyé nulle part ; tout est effaçable (bouton Réinitialiser).
const Coffre = (function(){
  var CLE = "ensemble-pour-entreprendre.v1";

  function lire(){
    try{
      var brut = window.localStorage.getItem(CLE);
      if(brut){
        var lu = JSON.parse(brut);
        if(lu && typeof lu === "object"){
          return {
            depart: typeof lu.depart === "string" ? lu.depart : "",
            coches: lu.coches && typeof lu.coches === "object" ? lu.coches : {}
          };
        }
      }
    }catch(erreur){ /* stockage indisponible : on continue sans */ }
    return { depart:"", coches:{} };
  }

  function enregistrer(etat){
    try{ window.localStorage.setItem(CLE, JSON.stringify(etat)); }catch(erreur){ /* rien */ }
  }

  function effacer(){
    try{ window.localStorage.removeItem(CLE); }catch(erreur){ /* rien */ }
  }

  return { CLE:CLE, lire:lire, enregistrer:enregistrer, effacer:effacer };
})();
