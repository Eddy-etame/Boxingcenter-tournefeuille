/**
 * REGISTRE DE VÉRITÉ — Boxing Center depuis Tournefeuille.
 *
 * Un fait s'écrit ICI une fois, avec sa source et sa date, puis se projette
 * dans le HTML, les métadonnées, le JSON-LD, llms.txt, le formulaire et le
 * moteur. Aucun composant n'écrit un horaire, une adresse ou une URL en dur —
 * le contrôle de build le refuse.
 *
 * Ce site est le seul de la famille à viser DEUX clubs. Les faits sont donc
 * portés par club : Portet ferme à 21h30, Saint-Cyprien à 21h15, et les deux
 * chiffres cohabitent sans qu'aucune page ait à choisir. C'est le moteur qui
 * tranche, à partir de la discipline et du créneau.
 */

export type Source = 'site-club' | 'wikipedia' | 'cahier-des-charges' | 'a-verifier';

export type Fait<T = string> = { valeur: T; source: Source; verifie: string };

/** Décidé par le client (Eddy, 2026-09-10) : le numéro et l'adresse que ce site affiche. */
const CDC = (v: string): Fait => ({ valeur: v, source: 'cahier-des-charges', verifie: '2026-09-10' });
const CLUB = (v: string): Fait => ({ valeur: v, source: 'site-club', verifie: '2026-09-08' });
const WIKI = (v: string): Fait => ({ valeur: v, source: 'wikipedia', verifie: '2026-09-08' });

/* ─────────────────────────────  LE SITE  ───────────────────────────── */

export const SITE = {
  origine: 'https://www.boxingcenter-tournefeuille.fr',
  nom: 'Boxing Center — depuis Tournefeuille',
  nomCourt: 'Boxing Center Tournefeuille',
  langue: 'fr-FR',
  /** Tournefeuille est le point de départ du visiteur, jamais une adresse de club. */
  ville: 'Tournefeuille',
  codePostal: '31170',
  gentile: 'Tournefeuillais',
  departement: 'Haute-Garonne',
  secteur: 'ouest toulousain',
  /**
   * L'accès en trois mots, pour le pied de hero. Un numéro de ligne rapproche,
   * un chiffre en kilomètres éloigne. Le détail vit sur /transports/.
   */
  accesCourt: 'Linéo L3, puis métro A',
  /** Le formulaire Inlet de CE site : une demande arrive triée par ville. */
  formulaire: '04fb2a88-a859-40a9-89b5-e6e167cef45e',
} as const;

/* ─────────────────────────────  CONTACT  ───────────────────────────── */

export const CONTACT = {
  telephone: CDC('09 39 03 67 48'),
  telephoneLien: CDC('+33939036748'),
  email: CDC('boxingcenter31@gmail.com'),
} as const;

/* ────────────────────────────  LES CLUBS  ──────────────────────────── */

export type ClubId = 'saint-cyprien' | 'portet';

export type Club = {
  id: ClubId;
  nom: string;
  nomCourt: string;
  ville: string;
  codePostal: string;
  adresse: string;
  telephone: string;
  telephoneLien: string;
  site: string;
  activites: string;
  plannings: string;
  tarifs: string;
  /** amplitude d'accueil publiée par le club — elle diffère d'un club à l'autre */
  horaires: Fait;
  horairesCourt: string;
  ouverture: string;
  fermeture: string;
  ouvertureTexte: string;
  fermetureTexte: string;
  /** l'accès réel depuis Tournefeuille, sans temps de trajet inventé */
  acces: string;
  /** le fait qui distingue ce club de tous les autres */
  singularite: string;
  /** faits chiffrés, pour les cotes du hero */
  faits: readonly { cle: string; valeur: string; source: string }[];
  angle: string;
  /** la couleur d'accent du club, quand le moteur l'a résolu */
  teinte: 'signal' | 'fresque';
};

export const CLUBS: readonly Club[] = [
  {
    id: 'saint-cyprien',
    nom: 'Boxing Center Saint-Cyprien',
    nomCourt: 'Saint-Cyprien',
    ville: 'Toulouse',
    codePostal: '31300',
    adresse: '11 rue Sainte-Lucie, 31300 Toulouse',
    telephone: '09 39 03 67 48',
    telephoneLien: '+33939036748',
    site: 'https://club-boxe-toulouse.com/',
    activites: 'https://club-boxe-toulouse.com/activites/',
    plannings: 'https://club-boxe-toulouse.com/plannings/',
    tarifs: 'https://club-boxe-toulouse.com/tarifs/',
    horaires: CLUB('du lundi au samedi, de 10h à 21h15'),
    horairesCourt: 'lun–sam, 10h–21h15',
    ouverture: '10:00',
    fermeture: '21:15',
    ouvertureTexte: '10h',
    fermetureTexte: '21h15',
    acces:
      'Le Linéo L3 descend de Tournefeuille jusqu’aux Arènes ; le métro A y prend le relais et s’arrête à Saint-Cyprien – République, à quatre minutes à pied du club.',
    singularite: 'Le club du réseau qui publie la Boxe Thaï / K1 — sa discipline la plus complète.',
    faits: [
      { cle: 'Accès', valeur: 'métro A, 4 min à pied', source: 'club-boxe-toulouse.com' },
      { cle: 'Signature', valeur: 'Boxe Thaï / K1', source: 'club-boxe-toulouse.com' },
      { cle: 'Accueil', valeur: '10h → 21h15, 6 j/7', source: 'club-boxe-toulouse.com' },
      { cle: 'Équipement', valeur: '1 ring, 1 cage', source: 'club-boxe-toulouse.com' },
    ],
    angle:
      'Le club de ville : on y va en métro, on en ressort à quatre minutes d’une station, et c’est le seul du réseau à publier la Boxe Thaï et le K1.',
    teinte: 'fresque',
  },
  {
    id: 'portet',
    nom: 'Boxing Center Portet-sur-Garonne',
    nomCourt: 'Portet-sur-Garonne',
    ville: 'Portet-sur-Garonne',
    codePostal: '31120',
    adresse: "61 route d'Espagne, 31120 Portet-sur-Garonne",
    telephone: '09 56 65 37 82',
    telephoneLien: '+33956653782',
    site: 'https://boxing-center-portet.fr/',
    activites: 'https://boxing-center-portet.fr/activites/',
    plannings: 'https://boxing-center-portet.fr/plannings/',
    tarifs: 'https://boxing-center-portet.fr/tarifs/',
    horaires: CLUB('du lundi au samedi, de 10h à 21h30'),
    horairesCourt: 'lun–sam, 10h–21h30',
    ouverture: '10:00',
    fermeture: '21:30',
    ouvertureTexte: '10h',
    fermetureTexte: '21h30',
    acces:
      'Par la D632 puis la rocade ouest et l’A64, sortie Portet. En bus, la 48 rejoint Basso Cambo, où la 117 Express repart vers la route d’Espagne.',
    singularite: 'Le seul club du réseau avec une cage MMA, et le seul à publier le grappling.',
    faits: [
      { cle: 'Surface', valeur: '600 m²', source: 'boxing-center-portet.fr' },
      { cle: 'Signature', valeur: 'MMA en cage', source: 'boxing-center-portet.fr' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7', source: 'boxing-center-portet.fr' },
      { cle: 'Disciplines', valeur: '9 publiées', source: 'boxing-center-portet.fr' },
    ],
    angle:
      'Le club du sud de l’agglomération, sur la route d’Espagne — 600 m², un ring, et la seule cage MMA du réseau.',
    teinte: 'signal',
  },
] as const;

export const club = (id: ClubId): Club => {
  const c = CLUBS.find((x) => x.id === id);
  if (!c) throw new Error(`Club inconnu : ${id}`);
  return c;
};

/**
 * La destination par défaut, quand aucune discipline n'a encore été choisie.
 *
 * Saint-Cyprien, parce que c'est le club que les transports en commun
 * desservent depuis Tournefeuille : le Linéo L3 puis le métro A. Une page qui
 * doit nommer un club sans en savoir plus nomme celui-là.
 */
export const DESTINATION = CLUBS[0];

/** L'autre, pour les pages qui présentent le choix. */
export const SECONDE = CLUBS[1];

/* ───────────────────────  TOURNEFEUILLE, LES FAITS  ────────────────── */

export const VILLE = {
  population: WIKI('30 168 habitants (2023)'),
  statut: WIKI('commune de Toulouse Métropole'),
  distance: WIKI('8 km à l’ouest de Toulouse'),
  rivieres: WIKI('le Touch, l’Ousseau et le canal de Saint-Martory'),
  routes: WIKI('l’A624 à la sortie 1, la D632 et la rocade ouest'),
  bus: WIKI('le Linéo L3 vers les Arènes, et les lignes 21, 48, 63, 67, 116, 363 et 365'),
  /** Le fait local qui donne son identité au site. */
  figure: WIKI(
    'l’église détruite en 1595 pendant les guerres de Religion, qui a fait déplacer le centre du village'
  ),
  histoire: WIKI(
    'l’AST Rugby de Fabien Galthié et l’AST Basket de Yannick Souvré : deux clubs formateurs pour une commune de 30 000 habitants'
  ),
} as const;

/**
 * La phrase qui relie le secteur au club, quand un fait honnête le permet.
 * Vide si aucun lien géographique réel n'existe — on n'en invente pas.
 */
export const NOTE_SECTEUR =
  'Le Linéo L3 traverse Tournefeuille sur douze arrêts et finit aux Arènes, où le métro A prend le relais jusqu’à Saint-Cyprien.';

/** Les quatre communes limitrophes. */
export const LIMITROPHES: readonly { nom: string; note?: string }[] = [
  { nom: 'Colomiers' },
  { nom: 'Cugnaux' },
  { nom: 'Plaisance-du-Touch', note: 'desservie par le même Linéo L3' },
  { nom: 'Toulouse', note: 'la commune de Saint-Cyprien' },
] as const;

/* ─────────────────────────  CE QU'ON NE DIT PAS  ───────────────────── */

/** Laisser croire qu'une salle est DANS Tournefeuille. Refusé au build. */
export const INTERDIT: readonly string[] = [
  'salle de Tournefeuille',
  'notre salle à Tournefeuille',
  'notre club à Tournefeuille',
  'situé à Tournefeuille',
  'située à Tournefeuille',
  'basé à Tournefeuille',
  'Boxing Center Tournefeuille vous accueille',
];

/** Vendre l'absence. La faute la plus coûteuse. Refusée au build. */
export const VENTE_NEGATIVE: readonly string[] = [
  'pas de salle',
  'pas de club',
  'aucune salle',
  'aucun club',
  'n’existe pas de salle',
  "n'existe pas de salle",
];

/** Formulations justes, à reprendre telles quelles. */
export const FORMULATIONS = [
  'club de boxe à proximité de Tournefeuille',
  'club de boxe thaï près de Tournefeuille',
  'cours accessibles depuis Tournefeuille',
  'Boxing Center accueille les Tournefeuillais dans deux clubs, Saint-Cyprien et Portet-sur-Garonne',
] as const;
