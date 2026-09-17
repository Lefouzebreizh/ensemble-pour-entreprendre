// Évite le saut visuel au lancement : la scène ne se révèle qu'une fois un
// premier cadre de la vidéo décodé, et reste en pause sur sa première image
// si le système demande de réduire les mouvements.
// Tout est vérifié avant appel : une page ne doit jamais casser à cause d'une
// balise absente ou d'un navigateur qui ne connaît pas telle fonction.
(() => {
  const scene = document.getElementById("scene");
  const video = document.getElementById("chemin-video");
  if (!scene || !video) return;

  const revele = () => {
    if (scene.classList && typeof scene.classList.add === "function") {
      scene.classList.add("scene-video-ready");
    }
  };

  const calme = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  if (calme) {
    if (typeof video.pause === "function") video.pause();
    revele();
    return;
  }

  const pret = typeof HTMLMediaElement !== "undefined" &&
    video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
  if (pret) revele();
  else if (typeof video.addEventListener === "function") video.addEventListener("loadeddata", revele, { once: true });

  if (typeof video.play === "function") {
    video.play().catch(() => { /* l'image d'attente reste si l'autoplay est refusé */ });
  }
})();
