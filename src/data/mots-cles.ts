/**
 * REGISTRE DES MOTS-CLÉS — le territoire de recherche, page par page.
 *
 * Principe : plus de pertinence PAR page, pas plus de pages. Sept pages de
 * fond, deux pages de commune qui portent chacune une géographie réelle, et on
 * rend chacune beaucoup plus dense.
 *
 * Particularité de ce site : « club boxe thaï Tournefeuille » est un motif que
 * l'on peut porter en titre, parce que Saint-Cyprien publie réellement la Boxe
 * Thaï / K1. Sur les autres satellites du réseau, il fallait répondre par le
 * kick-boxing et dire la nuance. Ici, la réponse est directe.
 *
 * Un motif n'entre dans une page que si la page répond réellement à la
 * question qu'il porte. Le contrôle de build vérifie chaque prioritaire dans le
 * texte visible : chaque motif gardé est une promesse d'écriture.
 */

import type { RouteId } from './routes';

export type Cluster = {
  page: RouteId;
  prioritaires: readonly string[];
  secondaires: readonly string[];
};

export const CONTEXTE_GEO = {
  ville: 'Tournefeuille',
  codePostal: '31170',
  gentile: 'Tournefeuillais',
  departement: 'Haute-Garonne',
  secteur: 'ouest toulousain',
} as const;

export const CLUSTERS: readonly Cluster[] = [
  {
    page: 'accueil',
    prioritaires: [
      'club de boxe',
      'Tournefeuille',
      'sport de combat',
      'MMA',
      'Saint-Cyprien',
      'Portet-sur-Garonne',
    ],
    secondaires: [
      'boxe Tournefeuille',
      'club de boxe près de Tournefeuille',
      'salle de boxe près de Tournefeuille',
      'club MMA Tournefeuille',
      'cours de boxe Tournefeuille',
      'boxe anglaise Tournefeuille',
      'boxe thaï Tournefeuille',
      'kick boxing Tournefeuille',
      'boxe enfant Tournefeuille',
      '31170',
      'Tournefeuillais',
      'Linéo L3',
      'ouest toulousain',
      'Haute-Garonne',
      'métro A',
      'Arènes',
    ],
  },
  {
    page: 'boxe-anglaise',
    prioritaires: ['boxe anglaise', 'Tournefeuille', 'débutant'],
    secondaires: [
      'cours de boxe Tournefeuille',
      'club de boxe Tournefeuille',
      'boxe loisir',
      'apprendre à boxer',
      'PAOS',
      'Open Sparring',
      'noble art',
      'pattes d’ours',
    ],
  },
  {
    page: 'boxe-thai',
    prioritaires: ['boxe thaï', 'Tournefeuille', 'kick-boxing', 'pieds-poings', 'K1'],
    secondaires: [
      'boxe thaï Tournefeuille',
      'boxe thaïlandaise',
      'Muay Thaï',
      'kickboxing Tournefeuille',
      'striking',
      'low kick',
      'coudes et genoux',
    ],
  },
  {
    page: 'mma',
    prioritaires: ['MMA', 'Tournefeuille', 'grappling', 'cage'],
    secondaires: [
      'cours MMA Tournefeuille',
      'MMA débutant Tournefeuille',
      'club MMA près de Tournefeuille',
      'jiu-jitsu brésilien',
      'JJB Tournefeuille',
      'arts martiaux mixtes',
      'combat au sol',
      'cage MMA',
    ],
  },
  {
    page: 'boxe-enfants',
    prioritaires: ['boxe enfant', 'Tournefeuille', 'boxe éducative', 'Baby Boxe'],
    secondaires: [
      'cours de boxe enfant Tournefeuille',
      'boxe ado Tournefeuille',
      'sport de combat enfant',
      'boxe adolescent',
      'mercredi',
      'samedi',
    ],
  },
  {
    page: 'quel-club',
    prioritaires: ['Tournefeuille', 'Saint-Cyprien', 'Portet-sur-Garonne', 'créneau'],
    secondaires: [
      'quel club de boxe Tournefeuille',
      'planning boxe Tournefeuille',
      'horaires boxe Tournefeuille',
      'boxe le soir Tournefeuille',
      'boxe le midi',
      'boxe le samedi',
    ],
  },
  {
    page: 'plaisance-du-touch',
    prioritaires: [
      'club de boxe Plaisance-du-Touch',
      'boxe anglaise Plaisance-du-Touch',
      'club MMA Plaisance-du-Touch',
      'salle MMA Plaisance-du-Touch',
      'sport de combat Plaisance-du-Touch',
      'club boxe thaï Plaisance-du-Touch',
      'club kick boxing Plaisance-du-Touch',
      'boxe pieds poings Plaisance-du-Touch',
    ],
    secondaires: [
      'boxe Plaisance-du-Touch',
      'salle de boxe Plaisance-du-Touch',
      'boxe enfant Plaisance-du-Touch',
      'Plaisançois',
      '31830',
      'Plaisance Monestié',
      'Linéo L3',
    ],
  },
  {
    page: 'fonsorbes',
    prioritaires: [
      'club de boxe Fonsorbes',
      'boxe anglaise Fonsorbes',
      'club MMA Fonsorbes',
      'salle MMA Fonsorbes',
      'sport de combat Fonsorbes',
      'club boxe thaï Fonsorbes',
      'club kick boxing Fonsorbes',
      'boxe pieds poings Fonsorbes',
    ],
    secondaires: [
      'boxe Fonsorbes',
      'salle de boxe Fonsorbes',
      'boxe enfant Fonsorbes',
      'Fonsorbais',
      '31470',
      'ligne 116',
      'RN 632',
    ],
  },
  {
    page: 'premiere-seance',
    prioritaires: ['première séance', 'Tournefeuille', 'débutant'],
    secondaires: [
      'première séance boxe Tournefeuille',
      'cours d’essai boxe Tournefeuille',
      'commencer la boxe',
      'jamais fait de boxe',
      'que faut-il apporter',
    ],
  },
  {
    page: 'contact',
    prioritaires: ['Tournefeuille', 'contact'],
    secondaires: [
      'club de boxe près de Tournefeuille',
      'inscription boxe Tournefeuille',
      'cours d’essai boxe Tournefeuille',
    ],
  },
] as const;

export const cluster = (page: RouteId) => CLUSTERS.find((c) => c.page === page);

/**
 * Les huit motifs imposés, instanciés sur un lieu.
 *
 * Ils servent la « légende » des pages communes : la colonne de gauche cite la
 * recherche telle qu'elle se tape, la colonne de droite y répond par un fait.
 * C'est la légende d'un plan — et la seule forme sous laquelle une liste de
 * requêtes a le droit d'exister sur une page.
 */
export const motifs = (lieu: string) =>
  [
    `club de boxe ${lieu}`,
    `boxe anglaise ${lieu}`,
    `club MMA ${lieu}`,
    `salle MMA ${lieu}`,
    `sport de combat ${lieu}`,
    `club kick boxing ${lieu}`,
    `boxe pieds poings ${lieu}`,
    `club boxe thaï ${lieu}`,
  ] as const;
