# 📒 Mémento : ce que j'ai appris (monde 1, niveaux 1 à 5)

*Session du 14/11/2026*

---

## 🧩 JavaScript et DOM

### `input.value` est **toujours** une chaîne
```js
input.value = Number("6");
typeof input.value;   // "string" : le navigateur reconvertit
```
- Réassigner un nombre à `input.value` ne sert à rien : il redevient une chaîne.
- Pour avoir un nombre, il faut une **variable locale** (`const faces = Number(input.value)`) ou `input.valueAsNumber` pour un `input type="number"`.
- `Math.random() * "6"` marche grâce à la **coercition implicite** de `*`. C'est fragile : avec `+`, on obtient une concaténation (`"6" + 1 === "61"`).

### `const` ne se réassigne pas
- Réassigner un `const` provoque une `TypeError: Assignment to constant variable`, et le reste de la fonction ne s'exécute pas.
- Utiliser `let` seulement si la valeur doit changer, sinon `const` par défaut.

### Les pièges de `Date`
- `getDay()` renvoie **0 pour dimanche**, jusqu'à 6 pour samedi. La semaine ne commence pas un lundi.
- `getMonth()` commence à **0 pour janvier**.
- **Vérifier dans la doc plutôt que supposer.**

### Remplacer un `switch` par un tableau
```js
["dimanche", "lundi", /* … */][date.getDay()];
```
- C'est plus court et plus lisible. Un `break` placé après un `return` est du code mort.
- Une valeur `default` « de secours » (renvoyer `"lundi"` par défaut, par exemple) **masque les bugs** au lieu de les montrer.

### `padStart` pour les zéros
```js
String(5).padStart(2, "0");  // "05"
```

### Les événements `input` et `change`
- `input` se déclenche à **chaque frappe**, `change` à la **validation** (perte du focus, Entrée).
- Corriger la valeur d'un champ pendant `input` empêche l'utilisateur de taper normalement : quand on vide le champ pour taper « 12 », il se retrouve à 4. Les corrections se font sur `change`.

---

## 🔐 Le hasard et la sécurité

- `Math.random()` **n'est pas cryptographiquement sûr**. Il ne faut pas l'utiliser pour des mots de passe ou des jetons (c'est écrit dans l'avertissement MDN).
- On utilise plutôt `crypto.getRandomValues()` avec un tableau typé :
```js
const octets = new Uint8Array(longueur);
crypto.getRandomValues(octets);   // chaque octet vaut de 0 à 255
```
- 🔍 Pour aller plus loin : passer de 0-255 à un index introduit un léger **biais**. À creuser avec « modulo bias » et « rejection sampling ».

---

## ⏱️ Timers

### `setInterval` n'est pas précis
- Il démarre au moment du chargement de la page, **pas au début d'une vraie seconde**.
- Il **dérive** avec le temps, et il est **ralenti** par le navigateur quand l'onglet est en arrière-plan.
- Interroger l'heure toutes les millisecondes « au cas où » gaspille le CPU et peut quand même rater la fenêtre.

### Le setTimeout récursif ⭐
```js
function tick() {
    afficher();
    const reste = 1000 - new Date().getMilliseconds();
    setTimeout(tick, reste);   // se reprogramme lui-même
}
tick();
```
- Il **se recale à chaque tour**, puisque le délai est recalculé à chaque fois.
- Les appels **ne peuvent jamais se chevaucher**.
- On peut l'**arrêter ou changer son rythme** facilement.
- ➡️ C'est le même principe que `requestAnimationFrame`, utilisé pour les boucles de jeu du monde 4. Ça explique les latences de mon Snake d'étudiant fait avec `setInterval`.

---

## 🏗️ Conception

- **L'état dans des variables, pas dans le DOM** : stocker le mode dans `let mode` plutôt que de le déduire de l'attribut `disabled` d'un bouton.
- **Un objet par rôle** : l'objet `el` ne contient que des éléments du DOM. L'état de l'application n'a rien à y faire.
- **Régénérer tant que ce n'est pas valide** est une approche correcte, mais il faut **réinitialiser l'état à chaque tour** (le mot de passe et les compteurs). Sinon, les valeurs s'accumulent.
- **Éviter d'empiler les mécanismes** : un timer qui en lance un autre, qui en relance un troisième… La bonne solution est souvent la plus simple.
- **Valider au bon endroit** : contrôler une saisie au moment où elle est faite (dans le builder, sur `change`) vaut mieux que la corriger au moment de l'utiliser.

---

## 🧪 Méthode

- **Jouer l'utilisateur pénible** avant de considérer un niveau comme fini :
  - champ vide
  - valeur décimale (6,5)
  - valeurs hors limites (négatif, énorme)
  - double clic, clics rapides
  - console ouverte, pour ne laisser aucune erreur
- **Retester tout après chaque correction** : sur le 03, corriger un point en a cassé un autre.
- **Garder HTML et JS cohérents** : un `min="2"` côté HTML doit correspondre au minimum vérifié côté JS.
- **Nettoyer avant de livrer** : pas de `console.log`, pas de code commenté, pas de variables inutilisées, pas de noms comme `a`, `b`, `c`, `d`.
