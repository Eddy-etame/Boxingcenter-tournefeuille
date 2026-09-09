/**
 * REGISTRE DES ROUTES — une page = une question que quelqu'un se pose vraiment.
 *
 * Aucune URL n'est écrite en dur ailleurs : on passe par `route('mma')`.
 * Titres et descriptions vivent ici parce qu'ils font partie de
 * l'architecture de recherche, pas de la mise en page.
 *
 * Plannings et Tarifs ne sont PAS des pages : ce sont des liens directs vers
 * les pages réelles des clubs. Ici il y en a deux, donc la navigation les
 * présente en menu déroulant natif — un club par entrée, jamais un seul en dur.
 *
 * La page centrale de ce site est /quel-club/ : c'est le moteur, et c'est la
 * question que se pose vraiment quelqu'un qui part de Tournefeuille.
 */

import { CLUBS } from './verite';

export type RouteId =
  | 'accueil'
  | 'boxe-anglaise'
  | 'boxe-thai'
  | 'mma'
  | 'boxe-enfants'
  | 'premiere-seance'
  | 'quel-club'
  | 'transports'
  | 'fonsorbes'
  | 'plaisance-du-touch'
  | 'contact'
  | 'merci'
  | 'introuvable'
  | 'mentions-legales'
  | 'confidentialite';

export type Route = {
  id: RouteId;
  chemin: string;
  nav: string;
  /** la question à laquelle la page répond, du point de vue du visiteur */
  question: string;
  titre: string;
  description: string;
  menu: boolean;
  index: boolean;
  /** page de commune satellite */
  commune?: true;
  /** page mise en avant, hors liste de navigation */
  promo?: true;
};

export const ROUTES: readonly Route[] = [
  {
    id: 'accueil',
    chemin: '/',
    nav: 'Accueil',
    question: 'Où boxer quand on habite Tournefeuille ?',
    titre: 'Club de boxe et MMA près de Tournefeuille | Boxing Center',
    description:
      'Boxe anglaise, boxe thaï, MMA et sports de combat près de Tournefeuille : Boxing Center accueille les Tournefeuillais dans deux clubs, Saint-Cyprien et Portet.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-anglaise',
    chemin: '/boxe-anglaise/',
    nav: 'Boxe anglaise',
    question: 'À quoi ressemble un cours de boxe anglaise, et où le prendre ?',
    titre: 'Boxe anglaise près de Tournefeuille | Boxing Center',
    description:
      'Cours de boxe anglaise accessibles depuis Tournefeuille, publiés par les deux clubs Boxing Center : Saint-Cyprien en métro, Portet-sur-Garonne par la rocade.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-thai',
    chemin: '/boxe-thai/',
    nav: 'Boxe thaï',
    question: 'Où faire de la boxe thaï ou du K1 quand on part de Tournefeuille ?',
    titre: 'Boxe thaï et K1 près de Tournefeuille | Boxing Center',
    description:
      'La Boxe Thaï / K1 se pratique à Boxing Center Saint-Cyprien, à quatre minutes du métro A. Depuis Tournefeuille, le Linéo L3 rejoint les Arènes puis la ligne A.',
    menu: true,
    index: true,
  },
  {
    id: 'mma',
    chemin: '/mma/',
    nav: 'MMA',
    question: 'Où faire du MMA quand on part de Tournefeuille ?',
    titre: 'Club MMA et grappling près de Tournefeuille | Boxing Center',
    description:
      'Salle MMA à proximité de Tournefeuille : Boxing Center Portet-sur-Garonne entraîne le MMA en cage, avec le grappling et le jiu-jitsu brésilien.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-enfants',
    chemin: '/boxe-enfants/',
    nav: 'Boxe enfants',
    question: 'Quelle boxe pour mon enfant, et dans quel club ?',
    titre: 'Boxe enfant près de Tournefeuille | Boxing Center',
    description:
      'Baby Boxe et boxe éducative pour les enfants et les ados, publiées par les deux clubs Boxing Center accessibles depuis Tournefeuille. Touché contrôlé.',
    menu: true,
    index: true,
  },
  {
    id: 'quel-club',
    chemin: '/quel-club/',
    nav: 'Quel club',
    question: 'Saint-Cyprien ou Portet : lequel viser depuis chez moi ?',
    titre: 'Saint-Cyprien ou Portet : quel club viser | Boxing Center',
    description:
      'Deux réponses et tu sais lequel des deux clubs Boxing Center viser depuis Tournefeuille. La discipline tranche, le trajet départage.',
    menu: true,
    index: true,
  },
  {
    id: 'premiere-seance',
    chemin: '/premiere-seance/',
    nav: 'Première séance',
    question: 'Je n’ai jamais boxé. Qu’est-ce qui va m’arriver ?',
    titre: 'Première séance de boxe près de Tournefeuille | Boxing Center',
    description:
      'Ce qu’il faut apporter, ce que tu vas faire et ce que tu ne feras pas : le déroulé d’un premier cours pour un débutant venu de Tournefeuille.',
    menu: false,
    index: true,
  },
  {
    id: 'transports',
    chemin: '/transports/',
    nav: 'Transports',
    question: 'Comment j’y vais si je n’ai pas de voiture ?',
    titre: 'Y aller en métro depuis Tournefeuille | Boxing Center',
    description:
      'Le Linéo L3 rejoint les Arènes, le métro A dépose à Saint-Cyprien – République, à quatre minutes du club. Et la 48 puis la 117 Express pour Portet.',
    menu: true,
    index: true,
    promo: true,
  },
  {
    id: 'fonsorbes',
    chemin: '/fonsorbes/',
    nav: 'Fonsorbes',
    question: 'Et si je pars de Fonsorbes ?',
    titre: 'Club de boxe et MMA près de Fonsorbes | Boxing Center',
    description:
      'Boxe, boxe thaï et MMA accessibles depuis Fonsorbes : la ligne 116 rejoint Tournefeuille, le Linéo L3 continue vers les Arènes et le métro A.',
    menu: false,
    index: true,
    commune: true,
  },
  {
    id: 'plaisance-du-touch',
    chemin: '/plaisance-du-touch/',
    nav: 'Plaisance-du-Touch',
    question: 'Et si je pars de Plaisance-du-Touch ?',
    titre: 'Club de boxe et MMA près de Plaisance-du-Touch | Boxing Center',
    description:
      'Le Linéo L3 part de Plaisance Monestié et finit aux Arènes, où le métro A rejoint Saint-Cyprien. Boxing Center accueille les Plaisançois dans deux clubs.',
    menu: false,
    index: true,
    commune: true,
  },
  {
    id: 'contact',
    chemin: '/contact/',
    nav: 'Contact',
    question: 'Je veux poser ma question à quelqu’un.',
    titre: 'Contact | Boxing Center depuis Tournefeuille',
    description:
      'Une question avant de te déplacer depuis Tournefeuille ? Écris-nous, on te répond avec le club, la discipline et le créneau. Téléphone : 09 39 03 67 48.',
    menu: true,
    index: true,
  },
  {
    id: 'merci',
    chemin: '/merci/',
    nav: 'Merci',
    question: 'Message envoyé.',
    titre: 'Message bien reçu | Boxing Center Tournefeuille',
    description: 'Ta demande est partie. On te répond rapidement.',
    menu: false,
    index: false,
  },
  {
    id: 'introuvable',
    chemin: '/404/',
    nav: 'Page introuvable',
    question: 'Cette adresse ne mène nulle part.',
    titre: 'Page introuvable | Boxing Center depuis Tournefeuille',
    description: 'Cette page n’existe pas ou a changé d’adresse. Voilà les pages du site.',
    menu: false,
    index: false,
  },
  {
    id: 'mentions-legales',
    chemin: '/mentions-legales/',
    nav: 'Mentions légales',
    question: 'Qui édite ce site ?',
    titre: 'Mentions légales | Boxing Center Tournefeuille',
    description: 'Mentions légales du site boxingcenter-tournefeuille.fr.',
    menu: false,
    index: true,
  },
  {
    id: 'confidentialite',
    chemin: '/confidentialite/',
    nav: 'Confidentialité',
    question: 'Qu’est-ce que vous faites de mes données ?',
    titre: 'Politique de confidentialité | Boxing Center Tournefeuille',
    description: 'Ce que devient une demande envoyée depuis boxingcenter-tournefeuille.fr.',
    menu: false,
    index: true,
  },
] as const;

export function route(id: RouteId): Route {
  const r = ROUTES.find((x) => x.id === id);
  if (!r) throw new Error(`Route inconnue : ${id}`);
  return r;
}

export const MENU = ROUTES.filter((r) => r.menu);

/** Les entrées de navigation ordinaires, hors pages mises en avant. */
export const MENU_SIMPLE = MENU.filter((r) => !r.promo);

/** La page mise en avant, s'il y en a une. */
export const PROMO = ROUTES.find((r) => r.promo);

/** Les pages de communes satellites, dans l'ordre du pied de page. */
export const ROUTES_COMMUNES = ROUTES.filter((r) => r.commune);

/**
 * Plannings et Tarifs vivent chez les clubs. Sur ce site il y en a deux : la
 * navigation les présente donc en menu déroulant natif — un `<details>`, qui
 * s'ouvre au clavier et s'annonce au lecteur d'écran sans une ligne de script.
 * Jamais un seul club en dur.
 */
export const MENUS_CLUB = [
  {
    nav: 'Plannings',
    entrees: CLUBS.map((c) => ({ nom: c.nomCourt, href: c.plannings, club: c.id })),
  },
  {
    nav: 'Tarifs',
    entrees: CLUBS.map((c) => ({ nom: c.nomCourt, href: c.tarifs, club: c.id })),
  },
] as const;
