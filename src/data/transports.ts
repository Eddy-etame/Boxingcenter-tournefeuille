/**
 * REGISTRE DES TRANSPORTS — les itinéraires qui déposent au club.
 *
 * La règle, et elle est stricte : une ligne n'entre ici que si elle fait
 * avancer quelqu'un de Tournefeuille jusqu'à la porte d'un des deux clubs. Une
 * ligne qui dessert le secteur sans y mener n'a rien à faire sur cette page.
 *
 * Sur ce site, le choix d'itinéraire EST le choix de club — et c'est ce qui
 * rend la page utile : l'un se fait en métro, l'autre en bus. Deux étapes
 * chacun, et les deux déposent à quelques minutes de la porte.
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Chaque étape porte le lien vers sa page officielle : c'est
 * Tisséo qui dit quand, ce site dit quoi.
 */

export type Mode = 'bus' | 'metro' | 'train';

export type Etape = {
  mode: Mode;
  code: string;
  de: string;
  a: string;
  precision?: string;
  jours: string;
  href: string;
};

export type Itineraire = {
  id: string;
  onglet: string;
  titre: string;
  resume: string;
  mode: Mode;
  /** le club au bout de ce trajet */
  club: 'saint-cyprien' | 'portet';
  etapes: readonly Etape[];
  meilleur?: true;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = {
  bus: 'Bus',
  metro: 'Métro',
  train: 'Train',
};

/** L'arrêt d'arrivée du meilleur trajet, et ce qu'il a de remarquable. */
export const ARRIVEE = {
  arret: 'Saint-Cyprien – République',
  rue: 'rue Sainte-Lucie',
  phrase:
    'Le métro A s’arrête à Saint-Cyprien – République. Le club est à quatre minutes à pied, au 11 rue Sainte-Lucie.',
} as const;

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'Le Linéo L3 descend aux Arènes,',
  'le métro A prend le relais.',
  'Quatre minutes à pied, et tu y es.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'Douze arrêts du Linéo L3 traversent Tournefeuille avant son terminus des Arènes. Le métro A y démarre et s’arrête deux stations plus loin, à Saint-Cyprien – République : Boxing Center Saint-Cyprien est à quatre minutes de là, au 11 rue Sainte-Lucie.';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'metro',
    onglet: 'Le L3, puis le métro A',
    titre: 'Un Linéo, un métro, et la porte du club.',
    resume:
      'Le Linéo L3 traverse Tournefeuille sur douze arrêts et finit aux Arènes, où le métro A démarre. Deux stations plus loin, Saint-Cyprien – République : le club est à quatre minutes à pied. Les deux lignes roulent tous les jours, avec l’amplitude du métro.',
    mode: 'metro',
    club: 'saint-cyprien',
    meilleur: true,
    etapes: [
      {
        mode: 'bus',
        code: 'L3',
        de: 'Tournefeuille',
        a: 'Arènes',
        precision: 'terminus du Linéo, correspondance métro et tram',
        jours: 'tous les jours',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-l3',
      },
      {
        mode: 'metro',
        code: 'A',
        de: 'Arènes',
        a: 'Saint-Cyprien – République',
        precision: 'deux stations, puis quatre minutes à pied',
        jours: 'sept jours sur sept',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-a',
      },
    ],
  },
  {
    id: 'portet',
    onglet: 'La 48, puis la 117 Express',
    titre: 'Deux bus, et la cage au bout.',
    resume:
      'La 48 relie Tournefeuille à Basso Cambo, terminus du métro A et plaque tournante du sud toulousain. La 117 Express y repart vers Portet-sur-Garonne et marque deux arrêts sur la route d’Espagne : le club est au 61 de cette rue. C’est le trajet à connaître pour le MMA et le grappling.',
    mode: 'bus',
    club: 'portet',
    etapes: [
      {
        mode: 'bus',
        code: '48',
        de: 'Tournefeuille Lycée',
        a: 'Basso Cambo',
        precision: 'terminus du métro A',
        jours: 'du lundi au samedi',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-48',
      },
      {
        mode: 'bus',
        code: '117 Express',
        de: 'Basso Cambo',
        a: 'Jean Jaurès',
        precision: 'sur la route d’Espagne, à Portet-sur-Garonne',
        jours: 'toute la semaine',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-117',
      },
    ],
  },
];

export const itineraire = (id: string) => {
  const i = ITINERAIRES.find((x) => x.id === id);
  if (!i) throw new Error(`Itinéraire inconnu : ${id}`);
  return i;
};

/** L'itinéraire qui mène à un club donné. */
export const itineraireDuClub = (club: string) => ITINERAIRES.find((i) => i.club === club);

export const MEILLEUR = ITINERAIRES.find((i) => i.meilleur) ?? ITINERAIRES[0];

export const RESUME = 'Le Linéo L3 jusqu’aux Arènes, le métro A jusqu’à Saint-Cyprien';

export type Depart = { depuis: string; itineraire: string; texte: string };

export const DEPARTS: readonly Depart[] = [
  {
    depuis: 'Tournefeuille',
    itineraire: 'metro',
    texte:
      'Le L3 passe par douze arrêts de la commune, du Centre Commercial au Lycée. Tu descends aux Arènes, tu prends le métro A, et deux stations plus loin tu y es.',
  },
  {
    depuis: 'Plaisance-du-Touch',
    itineraire: 'metro',
    texte:
      'Le L3 démarre à Plaisance Monestié : c’est le début de la ligne. Tu fais le trajet en entier jusqu’aux Arènes, puis le métro A jusqu’à Saint-Cyprien.',
  },
  {
    depuis: 'Fonsorbes',
    itineraire: 'metro',
    texte:
      'La ligne 116 relie Fonsorbes à Tournefeuille, où le Linéo L3 prend le relais vers les Arènes. Le métro A termine le trajet jusqu’à Saint-Cyprien.',
  },
  {
    depuis: 'Vers le MMA',
    itineraire: 'portet',
    texte:
      'La cage est à Portet. La 48 t’emmène à Basso Cambo, la 117 Express redescend sur la route d’Espagne, et le club est au 61.',
  },
];

export const AVERTISSEMENT =
  'Tisséo publie les horaires, les fréquences et les arrêts, et les met à jour à chaque saison. Cette page te dit quelles lignes prendre ; Tisséo te dit à quelle heure elles passent.';

/** Les nombres en lettres, pour les décomptes qui viennent du registre. */
export const NOMBRES = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
] as const;
export const enLettres = (n: number) => NOMBRES[n] ?? String(n);
