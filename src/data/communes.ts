/**
 * REGISTRE DES COMMUNES SATELLITES.
 *
 * Une page par commune, et le contrat qui les rend légitimes : le test du
 * remplacement. Si l'on remplace le nom de la commune par un autre et que la
 * page reste vraie, la page n'a pas le droit d'exister.
 *
 * Chaque entrée porte donc ce qu'aucune autre commune ne peut porter : sa
 * population datée, son gentilé, son code INSEE, son intercommunalité, ses
 * VRAIES communes limitrophes, l'axe réel qui mène aux clubs depuis CHEZ ELLE,
 * ses lignes de bus, et un fait local qui situe.
 *
 * Géographie relevée sur Wikipédia le 2026-09-08. Quand une commune ne touche
 * pas la ville du site, on l'écrit : mentir sur une limite communale se
 * vérifie en dix secondes sur une carte.
 */

import type { MediaSlug } from './medias';

export type CommuneId = 'fonsorbes' | 'plaisance-du-touch';

export type Commune = {
  id: CommuneId;
  nom: string;
  gentile: string;
  codePostal: string;
  insee: string;
  population: string;
  intercommunalite: string;
  limitrophes: readonly string[];
  /** vrai si la commune touche celle du site */
  toucheLaVille: boolean;
  situation: string;
  route: string;
  transport: string;
  faitLocal: string;
  faitLocalEcho: string;
  photo: MediaSlug;
  cotes: readonly { cle: string; valeur: string }[];
  titre: string;
  description: string;
  faq: readonly { titre: string; texte: string }[];
  pont?: { texte: string; ancre: string; href: string };
};

export const COMMUNES: readonly Commune[] = [
  {
    id: 'plaisance-du-touch',
    nom: 'Plaisance-du-Touch',
    gentile: 'Plaisançois',
    codePostal: '31830',
    insee: '31424',
    population: '21 079 habitants (2023)',
    intercommunalite: 'Grand Ouest Toulousain Agglomération',
    limitrophes: [
      'Colomiers',
      'Cugnaux',
      'Fonsorbes',
      'Fontenilles',
      'Frouzins',
      'La Salvetat-Saint-Gilles',
      'Léguevin',
      'Pibrac',
      'Tournefeuille',
      'Villeneuve-Tolosane',
    ],
    toucheLaVille: true,
    situation:
      'Plaisance-du-Touch est le début de la ligne. Le Linéo L3 démarre à Plaisance Monestié, traverse Tournefeuille et finit aux Arènes, où le métro A prend le relais : depuis Plaisance, on fait le trajet en entier sans jamais changer de véhicule avant le métro.',
    route:
      'Par l’ancienne route nationale 632, qui relie Tournefeuille à Saint-Lys, puis la rocade ouest.',
    transport:
      'Le terminus Plaisance Monestié réunit le Linéo L3 vers les Arènes, la ligne 55 vers Colomiers-Gare et la ligne 67 vers les Arènes par les quartiers sud.',
    faitLocal:
      'L’église Saint-Barthélemy et le pont sur le Touch sont inscrits aux monuments historiques depuis 1926 — les deux témoins d’une bastide du XIIIᵉ siècle qui compte aujourd’hui plus de vingt et un mille habitants.',
    faitLocalEcho:
      'Un pont, une église, et sept siècles de passage. Ici aussi, tout part du fait de traverser.',
    photo: 'salle-de-boxe-tournefeuille',
    cotes: [
      { cle: 'Limite', valeur: 'commune limitrophe de Tournefeuille' },
      { cle: 'Linéo', valeur: 'L3, terminus Plaisance Monestié' },
      { cle: 'Métro', valeur: 'A, aux Arènes' },
      { cle: 'Clubs', valeur: 'Saint-Cyprien · Portet' },
    ],
    titre: 'Club de boxe et MMA près de Plaisance-du-Touch | Boxing Center',
    description:
      'Le Linéo L3 part de Plaisance Monestié et finit aux Arènes, où le métro A rejoint Saint-Cyprien. Boxing Center accueille les Plaisançois dans deux clubs.',
    faq: [
      {
        titre: 'Depuis Plaisance-du-Touch, comment on y va ?',
        texte:
          'Le Linéo L3 démarre à Plaisance Monestié : tu montes au terminus, tu descends aux Arènes, et le métro A t’emmène à Saint-Cyprien – République. Le club est à quatre minutes à pied. En voiture, la RN 632 puis la rocade ouest mènent aux deux clubs.',
      },
      {
        titre: 'Plaisance-du-Touch ou Tournefeuille : même club ?',
        texte:
          'Les mêmes deux clubs, et le même Linéo pour y aller — Plaisance et Tournefeuille sont limitrophes et partagent la L3. Ce qui tranche, c’est la discipline : la Boxe Thaï / K1 est publiée à Saint-Cyprien, le MMA en cage à Portet-sur-Garonne.',
      },
      {
        titre: 'Mon enfant de Plaisance-du-Touch peut s’inscrire ?',
        texte:
          'Les deux clubs publient la Baby Boxe et la boxe éducative. À Saint-Cyprien, la Baby Boxe a lieu le samedi et la boxe éducative le mercredi et le samedi. Les âges exacts sont sur le planning du club — c’est lui qui fait foi.',
      },
      {
        titre: 'Je cherche du cross-training plutôt que de la boxe.',
        texte:
          'Saint-Cyprien publie le Cross Training, le Boxing Camp et l’Hyrox, en plus des créneaux de boxe. C’est le club à viser depuis Plaisance si c’est la condition physique qui t’amène.',
      },
    ],
  },
  {
    id: 'fonsorbes',
    nom: 'Fonsorbes',
    gentile: 'Fonsorbais',
    codePostal: '31470',
    insee: '31187',
    population: '12 954 habitants (2023)',
    intercommunalite: 'Le Muretain Agglo',
    limitrophes: ['Fontenilles', 'Frouzins', 'Plaisance-du-Touch', 'Saint-Lys', 'Seysses'],
    toucheLaVille: false,
    situation:
      'Fonsorbes touche Plaisance-du-Touch, qui touche Tournefeuille : le secteur se lit d’ouest en est, le long de l’ancienne nationale 632. La ligne 116 fait ce chemin en direct, du centre de Fonsorbes à Tournefeuille.',
    route:
      'Par l’ancienne RN 632, qui relie Saint-Lys à Plaisance-du-Touch puis Tournefeuille, et rejoint la rocade ouest.',
    transport:
      'La ligne 116 relie le centre-ville à Tournefeuille ; la 365 rejoint la gare routière de Toulouse ; la 315 et la 321 descendent vers la gare de Muret.',
    faitLocal:
      'Le Touch, l’Ousseau et le ruisseau de l’Ayguebelle drainent la commune sur vingt-six kilomètres de cours d’eau — c’est cette vallée que la 632 remonte depuis Toulouse.',
    faitLocalEcho:
      'Vingt-six kilomètres d’eau qui vont toutes dans le même sens. La route fait pareil : elle descend vers la ville.',
    photo: 'cours-boxe-tournefeuille',
    cotes: [
      { cle: 'Limite', valeur: 'une commune de Tournefeuille' },
      { cle: 'Bus', valeur: '116 vers Tournefeuille' },
      { cle: 'Route', valeur: 'ancienne RN 632' },
      { cle: 'Clubs', valeur: 'Saint-Cyprien · Portet' },
    ],
    titre: 'Club de boxe et MMA près de Fonsorbes | Boxing Center',
    description:
      'Boxe, boxe thaï et MMA accessibles depuis Fonsorbes : la ligne 116 rejoint Tournefeuille, le Linéo L3 continue vers les Arènes et le métro A.',
    faq: [
      {
        titre: 'Depuis Fonsorbes, quel est le chemin ?',
        texte:
          'La ligne 116 relie le centre de Fonsorbes à Tournefeuille, où le Linéo L3 prend le relais jusqu’aux Arènes ; le métro A finit le trajet jusqu’à Saint-Cyprien – République. En voiture, la RN 632 descend droit sur Tournefeuille puis la rocade.',
      },
      {
        titre: 'Fonsorbes touche Tournefeuille ?',
        texte:
          'Fonsorbes touche Fontenilles, Frouzins, Plaisance-du-Touch, Saint-Lys et Seysses. Plaisance-du-Touch, elle, touche Tournefeuille : le secteur s’enchaîne d’ouest en est, et la 632 le parcourt en entier.',
      },
      {
        titre: 'Je cherche la boxe thaï.',
        texte:
          'La Boxe Thaï / K1 est publiée par Boxing Center Saint-Cyprien, qui la présente comme sa discipline la plus complète. C’est le club à viser depuis Fonsorbes, et le trajet se fait en bus puis en métro.',
      },
      {
        titre: 'Et pour le MMA ?',
        texte:
          'La cage est à Portet-sur-Garonne, au 61 route d’Espagne, avec le grappling et le jiu-jitsu brésilien. Depuis Fonsorbes, la 116 rejoint Tournefeuille, la 48 descend à Basso Cambo, et la 117 Express repart vers la route d’Espagne.',
      },
    ],
  },
] as const;

export const commune = (id: CommuneId): Commune => {
  const c = COMMUNES.find((x) => x.id === id);
  if (!c) throw new Error(`Commune inconnue : ${id}`);
  return c;
};

/** Les communes servies, pour `areaServed` de l'Organization. */
export const AIRE_SERVIE: readonly string[] = COMMUNES.map((c) => c.nom);
