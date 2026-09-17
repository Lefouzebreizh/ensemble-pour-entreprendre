# Ensemble pour entreprendre — « Créer son activité sans se perdre »

Outil d'**orientation et de préparation** destiné à quelqu'un qui crée une
activité et ne sait pas par où commencer. Une page unique, sans dépendance,
sans réseau, sans compte.

## Comment l'ouvrir

Double-cliquez sur `index.html`. C'est tout : le fichier s'ouvre dans votre
navigateur et fonctionne hors ligne. Il n'y a ni installation, ni serveur, ni
connexion à monter.

Sur téléphone, ouvrez le fichier depuis l'application de fichiers : la page est
conçue d'abord pour un écran étroit.

## Ce que fait la page

**Un écran d'accueil à cartes.** La page s'ouvre sur quatre cartes — « Je ne
sais pas encore quel statut choisir », « Mon activité est réglementée », « Je
veux les huit étapes », « J'ai déjà commencé » — et le contenu ne s'affiche
qu'une fois une carte choisie. Le lien « Revenir à l'accueil » ramène aux
cartes. Chaque carte est un simple lien d'ancrage : **la page fonctionne sans
JavaScript**, les parties s'affichent par `:target`.

**Le chemin des huit étapes, en vidéo.** À droite de l'accueil, une vidéo
(`chemin-des-huit-etapes.mp4`, 4,45 Mo) montre la route de nuit qui traverse les
dossiers et mène à l'entreprise qui se construit. Elle se lance seule, en
boucle, sans son (`autoplay muted loop playsinline`). Si le système demande de
réduire les mouvements, elle reste en pause sur sa première image.

La page n'est donc plus un fichier unique : elle s'accompagne de ce fichier
vidéo. Le reste — HTML, CSS, JavaScript — tient toujours dans `index.html`.

Puis quatre parties, dans l'ordre où un créateur se pose les questions.

**1. Mon orientation de statut.** Six questions — seul ou à plusieurs, nature de
l'activité, priorité, associés, TVA, salariés — et une piste parmi trois :
micro-entreprise, SASU ou SAS, EURL ou SARL. Le résultat dit **pourquoi** cette
piste et **ce qu'il faut surveiller**, jamais « c'est votre statut ». Trois
réponses pèsent vraiment dans la recommandation — seul ou à plusieurs, la
priorité, l'arrivée d'associés ; les autres servent à préciser le projet, et la
page le dit.

**2. Si ton activité est réglementée.** Un chapitre à part : qualifications du
bâtiment et assurance décennale, professions libérales réglementées, activités
soumises à autorisation. Le parcours ne les remplace pas, il les complète.

**3. Le parcours en huit étapes.**
1. Choisir son statut
2. Préparer son dossier
3. Formalités : guichet unique et annonce légale
4. Urssaf
5. Impôts
6. Banque
7. Assurances
8. Checklist finale

Chaque étape porte quatre éléments : **ce qu'il y a à faire**, les **documents à
préparer**, un **repère de travail**, et le **lien officiel**.

**4. Ma checklist, avec mes dates.** Vous entrez une date de départ ; les
repères se calculent à partir d'elle (« semaine du… »). Les cases cochées et la
date sont conservées dans le navigateur, sur votre appareil uniquement. Un
bouton **Réinitialiser** efface tout, après confirmation.

## La règle qui tient la page

**Aucun montant, aucun taux, aucun délai légal, aucun numéro de formulaire n'est
affirmé.** C'est l'axe du document, pas une précaution de fin de page :

- partout où une valeur serait incertaine, la page écrit explicitement
  « à vérifier à la source » et renvoie vers l'organisme officiel ;
- les repères de dates ne sont pas des échéances légales : ils forment un **plan
  de travail**, et la page le répète à l'endroit où ils s'affichent ;
- les protections d'identité (plafond de chiffre d'affaires, déduction des
  charges, obligations d'assurance) sont présentées comme **à vérifier selon
  votre situation**, jamais comme des règles énoncées ;
- l'avertissement figure **sur l'écran d'accueil, juste sous les cartes**, et
  **de nouveau à l'étape 1**, celle du choix du statut.

## Choix de conception

- **Un seul fichier.** HTML, CSS et JavaScript réunis dans `index.html` : rien à
  compiler, rien à installer, aucun risque qu'une pièce manque au moment de
  l'ouvrir.
- **Aucune police ni ressource externe.** La page n'appelle rien sur le réseau.
- **Palette** : fond `#030913`, turquoise `#40e0d0` et violet `#b79bff` comme
  couleurs dominantes. **Ni orange ni jaune**, conformément à la consigne.
- **Mobile d'abord, large ensuite.** Une colonne et des cibles tactiles larges
  sur téléphone ; au-delà de 900 px, la largeur utile monte à 1 180 px,
  l'accueil passe en deux colonnes (texte à gauche, animation à droite), les
  cartes et le parcours s'affichent en grille. Tout revient en une seule colonne
  sous 720 px.
- **Le contenu derrière les cartes, sans dépendre du script.** L'affichage de
  chaque partie repose sur `:target` en CSS ; le JavaScript ne sert qu'à
  l'animation et à la checklist.
- **Mouvement réduit respecté** : la règle `prefers-reduced-motion` coupe
  transitions et animations.
- **Accessibilité** : contrastes élevés, `fieldset` et `legend` pour le
  questionnaire, `label` explicites, focus visible, `aria-live` sur le résultat,
  et une barre de progression annoncée par `role="progressbar"`.
- **Tout en français**, jusqu'aux noms de variables et de fonctions du script.

## Sources citées dans la page

Toutes sont des adresses officielles, et aucune n'est un lien profond fragile :

- <https://entreprendre.service-public.gouv.fr/>
- <https://entreprendre.service-public.gouv.fr/vosdroits/F15252>
- <https://procedures.inpi.fr/>
- <https://www.inpi.fr/>
- <https://www.urssaf.fr/>
- <https://www.autoentrepreneur.urssaf.fr/>
- <https://www.impots.gouv.fr/>
- <https://annuaire-entreprises.data.gouv.fr/>

## Corrections juridiques du 17 septembre 2026

Une relecture du contenu, faite du point de vue d'un juriste comptable
spécialisé en création d'entreprise, a relevé **quatre erreurs de fond** et
**plusieurs oublis structurels**. Tout a été corrigé dans `index.html` :

- **La TVA** ne départage plus les statuts. Une micro-entreprise peut facturer
  la TVA : les deux sujets étaient mélangés. La recommandation est corrigée, et
  le formulaire le dit désormais explicitement.
- **« à plusieurs »** n'oriente plus vers une SASU — une SASU est
  **unipersonnelle**. La piste s'intitule « SASU si tu es seul, SAS si vous êtes
  plusieurs ».
- **« protéger mon patrimoine »** ne sert plus de critère : depuis la loi du
  14 février 2022, l'entrepreneur individuel bénéficie d'une **séparation
  automatique des patrimoines**. Le point est mentionné en vigilance.
- **Un lien mal étiqueté** (une fiche d'aide présentée comme un « comparateur de
  statuts ») a été corrigé.

Oublis comblés : déclaration des **bénéficiaires effectifs**, **régime fiscal**
(impôt sur le revenu ou impôt sur les sociétés) et son option, **régime de TVA**
(franchise en base ou réel), **protection sociale du dirigeant**, **cotisation
foncière des entreprises**, suivi annuel, et **assurance décennale**.

Ce que ces corrections ne sont pas : **une validation professionnelle**. Aucun
juriste, expert-comptable ou avocat inscrit n'a relu cette page. Elle reste un
outil d'orientation et de préparation.

## Vérifications automatiques du 17 septembre 2026

Audit relancé après les corrections juridiques et l'ajout du chapitre
« Si ton activité est réglementée », avec un DOM simulé sous Node :

- le script s'exécute **sans erreur** et produit **8 étapes**, **8 groupes** de
  checklist, **36 cases à cocher**, 8 repères de travail, 13 liens et
  8 mentions « à vérifier à la source » ;
- les **324 combinaisons** de réponses aux six questions affichent toutes une
  piste, sans exception ;
- la date de départ produit bien les 8 repères « semaine du… », en français, et
  le calcul part d'une date **locale** ;
- l'écriture de la mémorisation des cases est confirmée.

## Vérifications automatiques du 16 septembre 2026 (version antérieure)

*(Historique : ces compteurs décrivent la version d'avant les corrections
juridiques — 30 cases à cocher, pas 36 — et ne sont plus la référence.)*

Le script de la page a été exécuté hors navigateur, dans Node, avec un DOM
simulé : `.openclaw/tmp/auditer-page.mjs` puis
`.openclaw/tmp/auditer-persistance.mjs`. Ce qui en est ressorti :

- le script s'exécute **sans erreur** et produit **8 étapes**, **8 groupes** de
  checklist, **30 cases à cocher**, 8 repères de travail, 13 liens et
  8 mentions « à vérifier à la source » ;
- les **324 combinaisons** de réponses aux six questions affichent toutes une
  piste, sans exception ;
- la date de départ produit bien les 8 repères « semaine du… », en français, et
  le calcul part d'une date **locale** (pas de décalage de fuseau) ;
- trois cases cochées sont **retrouvées après rechargement** (jauge à 10 %), et
  **Réinitialiser** n'efface rien si la confirmation est refusée, mais efface
  tout — cases, date, stockage — si elle est acceptée.

Ce que cela ne remplace pas : l'**affichage réel** dans un navigateur. Aucun
rendu, aucune capture, aucun lecteur d'écran n'a été utilisé ici ; la
vérification visuelle reste celle décrite juste en dessous, en deux minutes.

## Refonte du 17 septembre 2026 (accueil à cartes et animation)

`index.html` a reçu son écran d'accueil, l'animation du chemin et la mise en
page large. Les trois audits ont été rejoués après la refonte, et ils passent :

- **audit de la page** : script exécuté **sans erreur** dans le DOM simulé →
  8 étapes, 8 groupes, **36 cases à cocher**, 8 repères, 13 liens, 8 mentions
  « à vérifier à la source » ; **324 combinaisons → 324 pistes, 0 exception** ;
- **audit de persistance** : 36 cases créées, 3 cases cochées **retrouvées après
  rechargement** (jauge à 8 %), date restaurée ; « Réinitialiser » n'efface rien
  si la confirmation est refusée, efface tout si elle est acceptée ;
- **contrôle du vocabulaire** : 61 marques de tutoiement ; cinq lignes signalées
  dont **quatre faux positifs** (le mot `faites` dans les variables du script) et
  une seule occurrence légitime, « SAS si vous êtes plusieurs », qui désigne les
  **associés** et non le lecteur.

## Ce que ces audits ne prouvent pas

Le contenu de la vidéo, évidemment : elle est jouée telle quelle, sans
traitement. Et l'aspect final reste à regarder à l'œil, comme le reste du rendu.

## Ce qui n'a pas pu être vérifié

Dit franchement, parce que la page elle-même ne promet rien qu'elle ne puisse
tenir :

1. **La page n'a pas été ouverte dans un navigateur ici.** L'environnement
   d'écriture n'exécute pas de navigateur : ni aperçu, ni rendu, ni test
   JavaScript. Le fichier a été écrit et sa structure relue — pas essayé.
2. **Le contenu juridique n'a été validé par personne.** Ni par un juriste, ni
   par un comptable, ni par un expert-comptable. Il décrit des étapes et des
   démarches usuelles ; il n'énonce volontairement aucune règle chiffrée.
3. **Les adresses officielles ont été testées le 16 septembre 2026** : sept des
   huit répondent en 200 (certaines redirigent vers leur page d'accueil, ce qui
   est normal). La huitième, `annuaire-entreprises.data.gouv.fr`, n'a pas pu
   être lue par l'outil de récupération — page construite en JavaScript. Cela ne
   prouve pas qu'elle est morte, seulement qu'elle n'a pas pu être contrôlée
   ainsi. Si une adresse ne répond plus un jour, la recherche du nom de
   l'organisme suffit à la retrouver.
4. **Le stockage local dépend du navigateur.** En navigation privée ou si le
   stockage est désactivé, les cases cochées ne seront pas conservées d'une
   visite à l'autre — la page fonctionne malgré tout.

## Vérifier soi-même, en deux minutes

1. Ouvrir `index.html` dans un navigateur : l'écran d'accueil s'affiche, avec ses
   quatre cartes et l'animation du chemin.
2. Cliquer une carte : la partie correspondante apparaît ; « Revenir à
   l'accueil » ramène aux cartes. Recharger la page directement sur `#parcours` :
   la bonne partie doit s'ouvrir seule, sans passer par les cartes.
3. Répondre aux six questions : un résultat doit s'afficher sous le formulaire,
   avec « pourquoi » et « points de vigilance ».
4. Sur un écran large : accueil en deux colonnes, cartes et parcours en grille.
   Rétrécir la fenêtre sous 720 px : tout doit repasser en une colonne.
5. Entrer une date de départ dans la checklist : les mentions « semaine du… »
   doivent apparaître sous chaque titre d'étape.
6. Cocher trois ou quatre cases, recharger la page : les cases doivent rester
   cochées et la barre de progression conserver sa valeur.
7. Appuyer sur **Réinitialiser** : tout revient à zéro après confirmation.
