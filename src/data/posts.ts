export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'JavaScript : L’histoire d’un survivant',
    description:
      'De sa création en 10 jours à son règne absolu sur le web moderne.',
    date: '2026-01-22',
    content: `JavaScript est né d'une urgence absolue en 1995. Brendan Eich, alors ingénieur chez Netscape, a reçu une mission presque impossible : créer un langage de script capable de rendre le web interactif, et ce, en moins de deux semaines. 

À l'époque, le web était statique. Netscape voulait un langage qui soit le "petit frère" de Java, destiné aux designers et aux amateurs pour manipuler facilement les éléments des pages web. Eich a relevé le défi en seulement 10 jours, fusionnant des concepts provenant de langages comme Scheme et Self. 

Le nom "JavaScript" était d'ailleurs un pur coup marketing pour surfer sur la popularité fulgurante de Java. Ce qui n'était qu'un prototype rapide est devenu, contre toute attente, le langage le plus utilisé au monde. Brendan Eich, devenu une figure légendaire, a plus tard cofondé le projet Mozilla (Firefox), laissant derrière lui un héritage qui définit encore aujourd'hui chaque seconde de notre expérience numérique.`,
  },
  {
    id: '2',
    title: 'Le Parser : Le traducteur de l’ombre',
    description:
      'Comprendre comment le navigateur transforme votre texte en code vivant.',
    date: '2026-01-22',
    content: `Dès que vous chargez une page web, le moteur JavaScript (comme V8 dans Chrome) entre en action. La toute première étape est le "Parsing". Imaginez le Parser comme un traducteur ultra-rapide qui lit votre texte brut pour vérifier s'il a un sens.

Le travail se décompose en deux phases critiques. D'abord, l'Analyse Lexicale : le Parser découpe votre code en petits morceaux appelés "Tokens" (mots-clés, variables, opérateurs). Ensuite, l'Analyse Syntaxique : il assemble ces morceaux pour créer un "Abstract Syntax Tree" (AST). C'est une structure en arbre qui représente logiquement votre programme.

C'est à ce moment précis que le Parser détecte vos erreurs de syntaxe. Si vous oubliez une parenthèse, l'AST ne peut pas se construire et le moteur s'arrête net. Comprendre le Parser, c'est comprendre que votre code n'est pas exécuté tel quel, mais qu'il subit une véritable métamorphose architecturale avant de devenir vivant.`,
  },
  {
    id: '3',
    title: 'Les Variables : Stockage et Mémoire',
    description:
      'Où vont réellement vos données quand vous créez une variable ?',
    date: '2026-01-22',
    content: `Déclarer une variable n'est pas un acte anodin : c'est une demande de réservation de place dans la mémoire vive (RAM) de votre ordinateur. En JavaScript, la gestion de cette mémoire se fait de deux manières différentes selon le type de donnée.

D'un côté, il y a la "Stack" (la Pile). C'est là que sont stockées les données simples (Primitives) comme les Numbers, les Strings ou les Booleans. La Stack est rapide et organisée, mais sa taille est fixe. De l'autre côté, il y a le "Heap" (le Tas), un espace beaucoup plus vaste et flexible où JavaScript stocke les Objets et les Tableaux.

Lorsque vous utilisez "const", vous fixez la référence mémoire. Si c'est une primitive, sa valeur ne peut plus changer. Si c'est un objet, vous pouvez modifier ses propriétés, mais vous ne pouvez pas remplacer l'objet entier par un autre. Maîtriser ce concept de Stack vs Heap est le premier pas pour devenir un développeur capable d'écrire des applications performantes qui ne saturent pas la mémoire de l'utilisateur.`,
  },
];
