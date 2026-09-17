// Repères de travail : les dates se calculent à partir de la date de départ,
// en dates locales (aucun décalage de fuseau). Aucun délai légal n'est affirmé.

function dateDuRepere(depart, semaines){
  if(!depart){ return ""; }
  var base = new Date(depart + "T00:00:00");
  if(isNaN(base.getTime())){ return ""; }
  base.setDate(base.getDate() + semaines * 7);
  return base.toLocaleDateString("fr-FR", { day:"numeric", month:"long", year:"numeric" });
}
