# 🎮 JS Quest

Progression gamifiée en JavaScript : **100 niveaux**, **10 mondes**, un **boss** à la fin de chaque monde.
Objectif : progresser et évaluer mon niveau réel, projet après projet.

---

## 📜 Règles du jeu

### Généralités
- Tout est en **vanilla JS**, sauf mention contraire dans l'énoncé (Express au niveau 54, par exemple).
- Les niveaux se font **dans l'ordre**.
- Pour passer au monde suivant, il faut **battre le boss avec au moins 2 ⭐**.
- Un niveau peut être **rejoué** plus tard pour récupérer les étoiles manquantes.

### Les étoiles (0 à 3 par niveau)
| Étoile | Nom | Condition |
|---|---|---|
| ⭐ 1 | **Ça marche** | Toutes les fonctionnalités de l'énoncé fonctionnent. Sans cette étoile, le niveau n'est **pas validé**. |
| ⭐ 2 | **Fait seul** | Uniquement de la doc a été utilisée : pas de tuto du projet, pas de code copié, aucun indice demandé. |
| ⭐ 3 | **Propre** | Les cas limites sont gérés (champ vide, double clic, saisie absurde, redimensionnement…), il n'y a aucune erreur dans la console et le code est lisible (noms clairs, pas de duplication, fonctions courtes). |

**Score** : 300 ⭐ au maximum. Le niveau réel se lit avec le niveau atteint **et** le total d'étoiles.

### Ce qui est autorisé ou interdit

✅ **Autorisé (c'est de la doc)**
- MDN, la doc de Node.js, la doc officielle des librairies et des API utilisées
- Les articles qui expliquent un concept (pas le projet lui-même)
- Stack Overflow pour une question technique précise
- Mon propre code des niveaux précédents
- Claude **en « Mode doc : »** : explication de concepts, d'API et de syntaxe, avec des exemples isolés qui ne sont jamais appliqués au projet
- Les algorithmes (minimax, A\*, backtracking…) : lire leur principe et leur pseudo-code est autorisé, **mais l'implémentation JS vient de moi**

❌ **Interdit (sous peine de perdre la ⭐ 2)**
- Un tuto qui réalise le projet (« Créer un Snake en JS »)
- Un repo GitHub ou un CodePen du même projet
- Demander du code à une IA, ou lui faire corriger le projet

📐 **Maths** : chercher une formule mathématique générique (aléatoire, distance, trigo, collisions…) est autorisé, la ⭐ 2 est conservée. Son intégration dans le projet reste mon travail.

🆘 **Joker indice** : si je bloque plus d'une heure pendant la construction, je peux demander un **indice sans code** à Claude. Le niveau peut être validé, mais la ⭐ 2 est perdue.

### Workflow
1. Un dossier par niveau : `monde-XX-nom/NN-projet/`
2. Un fichier `NOTE.md` par niveau, **rédigé avant l'évaluation** : ce que j'ai appris, mes difficultés, **les aides utilisées (en toute honnêteté)**. Il décrit la première version du niveau. Les échanges de correction avec Claude n'y figurent pas et **ne retirent pas la ⭐ 2**.
3. Un commit final par niveau : `niveau NN : nom du projet ✅`
4. Je demande l'évaluation à Claude : « évalue les niveaux NN à NN »

### Rythme des évaluations
- Les niveaux sont évalués **par lots** (par exemple les niveaux 1 à 4, puis 5 à 9), et **le boss à part**.
- Je **joue l'utilisateur pénible** avant chaque envoi (voir la checklist dans `MEMENTO.md`).

---

## 🤖 Instructions pour Claude (l'arbitre)

Quand je te demande d'évaluer un ou plusieurs niveaux :

1. **Lis** ce README, le `MEMENTO.md` (ce que j'ai déjà appris), l'énoncé de chaque niveau (dans la liste ci-dessous), le code du dossier et son `NOTE.md`.
2. **⭐ 1 (Ça marche)** : vérifie que **toutes** les fonctionnalités de l'énoncé sont présentes et fonctionnent. S'il en manque une, le niveau n'est pas validé : dis précisément laquelle.
3. **⭐ 2 (Fait seul)** : base-toi sur le `NOTE.md`, qui est rédigé avant toute correction. Si une aide interdite ou un indice y apparaît, l'étoile n'est pas accordée. En cas de doute (code qui ressemble fortement à un tuto connu), signale-le. Les échanges de correction avec toi ne retirent pas cette étoile.
4. **⭐ 3 (Propre)** : sois **exigeant**, comme pour un code qu'on montrerait en exemple à des élèves. Teste mentalement les cas limites, repère les erreurs possibles en console, la duplication, les noms flous, les fonctions trop longues et les mécanismes empilés là où une solution simple existe.
5. **Deux catégories de remarques** :
   - **Points cosmétiques** (nommage, `console.log`, code commenté, variable inutilisée, petite duplication, indentation) : signale-les **directement**.
   - **Points logiques** (bugs, cas limites, robustesse, conception) : donne d'abord **la catégorie et le nombre de points**, puis le détail **seulement si je le demande**.
6. **Régressions** : à chaque nouvelle vérification, contrôle aussi que mes corrections n'ont rien cassé, et signale toute régression en priorité.
7. **Ne donne jamais de code corrigé**, seulement des pistes.
8. **L'orthographe** des textes affichés n'est pas évaluée.
9. **Pas de complaisance** : une étoile non méritée fausse l'évaluation de mon niveau. Les micro-détails facultatifs peuvent être signalés sans bloquer l'étoile.
10. **Récapitulatif** : termine par le score (niveau validé, total d'étoiles) et la ligne à mettre à jour dans ce README.

En dehors des évaluations, si ma question commence par **« Mode doc : »**, réponds comme une documentation : concept, API, syntaxe et exemple isolé, **jamais appliqué à mon projet**.

---

## 🗺️ Les niveaux

Légende : `☆☆☆` = pas encore fait · `⭐☆☆` = 1 étoile · `⭐⭐☆` = 2 étoiles · `⭐⭐⭐` = 3 étoiles

### 🌱 Monde 1 : Le Village (Novice)
- `⭐⭐⭐` **01** · Compteur de clics : +, −, reset, et pas de valeur négative
- `⭐⭐⭐` **02** · Convertisseur °C ↔ °F en temps réel
- `⭐⭐⭐` **03** · Générateur de mot de passe : longueur, options (chiffres, symboles…) et bouton copier
- `⭐⭐⭐` **04** · Lanceur de dés : nombre de dés et de faces au choix, total affiché
- `⭐⭐⭐` **05** · Horloge numérique, avec la date en français
- `☆☆☆` **06** · Chronomètre : start, pause, reset et enregistrement des tours
- `☆☆☆` **07** · Pierre-feuille-ciseaux contre l'ordi, avec score
- `☆☆☆` **08** · Devine le nombre : indices plus/moins, compteur d'essais, 3 difficultés
- `☆☆☆` **09** · Calculatrice simple : 4 opérations, décimales, utilisable au clavier
- `☆☆☆` **10** · 👹 **BOSS : Todo-list** (ajout, édition, suppression, filtres, sauvegarde en localStorage)

### 🌲 Monde 2 : La Forêt (Apprenti)
- `☆☆☆` **11** · Quiz QCM avec barre de progression et score final
- `☆☆☆` **12** · Galerie d'images avec lightbox et navigation aux flèches du clavier
- `☆☆☆` **13** · FAQ en accordéon et système d'onglets
- `☆☆☆` **14** · Compte à rebours jusqu'à une date choisie
- `☆☆☆` **15** · Thème clair/sombre mémorisé d'une visite à l'autre
- `☆☆☆` **16** · Minuteur Pomodoro avec son et cycles
- `☆☆☆` **17** · Carrousel automatique, mis en pause au survol
- `☆☆☆` **18** · Memory : paires de cartes qui se retournent, coups et chrono
- `☆☆☆` **19** · Morpion à 2 joueurs, avec détection de victoire et de match nul
- `☆☆☆` **20** · 👹 **BOSS : Formulaire d'inscription multi-étapes** (validation en temps réel, jauge de force du mot de passe, récapitulatif final)

### 🏰 Monde 3 : La Cité (Aventurier)
- `☆☆☆` **21** · Calculatrice scientifique : parenthèses, priorités, historique
- `☆☆☆` **22** · Gestionnaire de dépenses : catégories, totaux, filtres par mois
- `☆☆☆` **23** · Tableau triable par colonne, avec recherche en direct
- `☆☆☆` **24** · Pendu avec dessin progressif
- `☆☆☆` **25** · Morpion contre une IA imbattable (minimax)
- `☆☆☆` **26** · Générateur de noms de héros, de villes et de sorts façon JRPG
- `☆☆☆` **27** · Éditeur Markdown avec aperçu en direct (parser maison basique)
- `☆☆☆` **28** · Calendrier mensuel avec ajout d'événements
- `☆☆☆` **29** · Undo/redo sur un éditeur de texte simple
- `☆☆☆` **30** · 👹 **BOSS : Kanban** (colonnes, drag & drop, sauvegarde)

### ⚔️ Monde 4 : L'Arène (Guerrier), dans le canvas
- `☆☆☆` **31** · Appli de dessin : couleurs, taille du pinceau, gomme, export PNG
- `☆☆☆` **32** · Balles qui rebondissent avec gravité
- `☆☆☆` **33** · Pong à 2 joueurs
- `☆☆☆` **34** · Snake : vitesse croissante, high score
- `☆☆☆` **35** · Flappy Bird
- `☆☆☆` **36** · Casse-briques : plusieurs niveaux, bonus qui tombent
- `☆☆☆` **37** · Space Invaders
- `☆☆☆` **38** · Feu d'artifice en particules
- `☆☆☆` **39** · Démineur : propagation des cases vides, drapeaux, 3 tailles de grille
- `☆☆☆` **40** · 👹 **BOSS : 2048** (animations et swipe sur mobile)

### 🌐 Monde 5 : Le Port (Explorateur), en asynchrone et avec des API
- `☆☆☆` **41** · Appli météo branchée sur l'API Open-Meteo
- `☆☆☆` **42** · Recherche de films avec debounce
- `☆☆☆` **43** · Pokédex (PokéAPI) avec scroll infini
- `☆☆☆` **44** · Loader, gestion des erreurs et retry automatique sur une appli réseau
- `☆☆☆` **45** · Upload d'images par drag & drop, avec aperçu
- `☆☆☆` **46** · Lecteur audio custom : playlist, barre de progression, volume
- `☆☆☆` **47** · Notes hors ligne stockées dans IndexedDB
- `☆☆☆` **48** · Traducteur ou dictionnaire avec historique des recherches
- `☆☆☆` **49** · Pool de requêtes limitées à N en parallèle, avec visualisation
- `☆☆☆` **50** · 👹 **BOSS : Dashboard multi-API** (graphiques dessinés à la main dans le canvas)

### 🖥️ Monde 6 : La Forge (Artisan), avec Node.js
- `☆☆☆` **51** · CLI qui compte les mots, les lignes et les caractères d'un fichier
- `☆☆☆` **52** · Renommeur de fichiers en masse, avec motifs
- `☆☆☆` **53** · Serveur HTTP sans framework : routes et fichiers statiques
- `☆☆☆` **54** · API REST CRUD avec Express
- `☆☆☆` **55** · Authentification avec hash des mots de passe et JWT
- `☆☆☆` **56** · Raccourcisseur d'URL avec statistiques de clics
- `☆☆☆` **57** · Traitement d'un énorme CSV avec les streams
- `☆☆☆` **58** · Tests automatisés de ton API avec `node:test`
- `☆☆☆` **59** · Chat temps réel en WebSocket
- `☆☆☆` **60** · 👹 **BOSS : Blog full-stack** (API, front vanilla, comptes, commentaires)

### 🧠 Monde 7 : La Tour des Mages (Sage), côté algorithmes
- `☆☆☆` **61** · Visualiseur d'algorithmes de tri (avec des générateurs)
- `☆☆☆` **62** · Générateur de labyrinthes aléatoires
- `☆☆☆` **63** · Pathfinding A\* interactif : tu dessines les murs à la souris
- `☆☆☆` **64** · Jeu de la vie de Conway
- `☆☆☆` **65** · Sudoku : solveur par backtracking et générateur de grilles
- `☆☆☆` **66** · Fractale de Mandelbrot zoomable
- `☆☆☆` **67** · Simulation de nuée d'oiseaux (boids)
- `☆☆☆` **68** · Tetris
- `☆☆☆` **69** · Éditeur de pixel art avec calques et undo/redo
- `☆☆☆` **70** · 👹 **BOSS : Calculatrice graphique** (parser d'expressions maison et tracé de f(x))

### 🏗️ Monde 8 : L'Atelier (Architecte)
- `☆☆☆` **71** · EventEmitter et système pub/sub
- `☆☆☆` **72** · Store façon Redux avec time travel
- `☆☆☆` **73** · Routeur SPA maison
- `☆☆☆` **74** · Composants réutilisables en Web Components
- `☆☆☆` **75** · Moteur de templates (`{{ variable }}`, boucles, conditions)
- `☆☆☆` **76** · Signals réactifs : `signal`, `computed`, `effect`
- `☆☆☆` **77** · Liste virtualisée de 100 000 lignes, toujours fluide
- `☆☆☆` **78** · Système de plugins pour une appli existante
- `☆☆☆` **79** · Virtual DOM avec algorithme de diff
- `☆☆☆` **80** · 👹 **BOSS : Mini framework réactif** (avec une vraie appli construite dessus)

### 🐉 Monde 9 : Les Terres Sauvages (Héros), jeux avancés
- `☆☆☆` **81** · Platformer : gravité, sauts, collisions sur des tuiles
- `☆☆☆` **82** · Éditeur de niveaux en tilemap, avec export JSON
- `☆☆☆` **83** · Combat au tour par tour façon JRPG : classes, sorts, IA ennemie
- `☆☆☆` **84** · Shoot'em up avec des patterns de balles
- `☆☆☆` **85** · Raycaster à la Wolfenstein 3D
- `☆☆☆` **86** · Jeu d'échecs avec les règles complètes (roque, prise en passant, pat)
- `☆☆☆` **87** · IA d'échecs : minimax avec élagage alpha-bêta
- `☆☆☆` **88** · Jeu multijoueur en temps réel sur le réseau
- `☆☆☆` **89** · Système de sauvegarde et de chargement d'une partie complète
- `☆☆☆` **90** · 👹 **BOSS : Mini-JRPG complet** (carte, dialogues, combats, inventaire, sauvegarde)

### 👑 Monde 10 : Le Panthéon (Légende)
- `☆☆☆` **91** · Parser JSON maison
- `☆☆☆` **92** · Interpréteur d'un mini langage de ton invention
- `☆☆☆` **93** · Bundler minimal : graphe de dépendances des modules ES
- `☆☆☆` **94** · Éditeur de code avec coloration syntaxique
- `☆☆☆` **95** · Tableur avec formules et recalcul des dépendances
- `☆☆☆` **96** · Édition collaborative en temps réel entre 2 navigateurs
- `☆☆☆` **97** · Moteur 3D wireframe sans librairie : projection et rotation
- `☆☆☆` **98** · Émulateur CHIP-8
- `☆☆☆` **99** · Moteur de jeu 2D réutilisable : scènes, sprites, input, son
- `☆☆☆` **100** · 🐲 **BOSS FINAL : Ton jeu en ligne**, construit sur ton moteur, avec comptes, classement et déploiement sur ton VPS

---

## 🏆 Rangs

| Niveaux | Rang |
|---|---|
| 1 à 20 | Bases maîtrisées |
| 21 à 40 | Dev front autonome |
| 41 à 60 | Full-stack |
| 61 à 80 | Senior |
| 81 à 100 | Légende |

**Total : 15 / 300 ⭐**

---

## 🔮 Pronostic de Claude

- **14/11/2026, après le niveau 5** : niveau 75 environ, avec 220 à 250 ⭐ (revu à la hausse depuis 180 à 200 ⭐, grâce à la persévérance sur les ⭐ 3). Premier pic au niveau 25 (minimax), vrai mur au monde 7 (algorithmique), test décisif au monde 8 (architecture).

---

## 💬 Prompt pour une nouvelle conversation

```
Je fais une progression gamifiée en JavaScript et tu es l'arbitre qui évalue mes niveaux.
Repo : https://github.com/digital-skylines/claude-exercices
Lis le README.md (règles et instructions pour toi) et le MEMENTO.md, puis évalue les niveaux NN à NN (le boss à part).
```

## 💬 Prompt pour mettre à jour le README

```
Mets à jour le README.md de mon repo https://github.com/digital-skylines/claude-exercices à partir de la version actuelle du repo :
- Les étoiles de chaque niveau évalué dans cette conversation
- Le total d'étoiles
- Les nouvelles règles décidées dans cette conversation (dans « Règles du jeu » et dans « Instructions pour Claude »)
- Le pronostic : ajoute une nouvelle ligne datée, sans effacer les précédentes
Ne modifie rien d'autre, et renvoie-moi le fichier complet.
```