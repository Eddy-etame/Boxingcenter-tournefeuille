/**
 * LE GRAPHE RÉEL DES DISCIPLINES — quel club publie quoi, mot pour mot.
 *
 * Relevé le 08/09/2026 sur les pages « activités » des deux clubs.
 *
 * Pourquoi ce fichier décide de tout sur ce site : Tournefeuille est le seul
 * satellite à viser DEUX clubs, et la question « lequel ? » n'a pas de réponse
 * marketing. Elle a une réponse factuelle. La Boxe Thaï / K1 se pratique à
 * Saint-Cyprien parce que c'est le seul club à la publier. Le MMA en cage se
 * pratique à Portet pour la même raison. Quand les deux publient la même
 * famille — la boxe anglaise, les enfants, les femmes — alors seulement le
 * trajet départage.
 *
 * Le moteur ne « recommande » donc rien : il lit ce tableau et en déduit. Une
 * page qui écrirait un club en dur casserait cette chaîne, et le contrôle de
 * build la refuse.
 */

import type { ClubId } from './verite';

export type Famille =
  | 'boxe-anglaise'
  | 'thai'
  | 'kick-boxing'
  | 'mma'
  | 'grappling'
  | 'femme'
  | 'physique'
  | 'enfants'
  | 'sparring';

export type Offre = {
  club: ClubId;
  /** l'intitulé publié par le club, mot pour mot */
  intitule: string;
  famille: Famille;
  ages?: string;
  /** ce qui rend cette offre concrète, en une phrase */
  detail?: string;
};

const SC = 'saint-cyprien' as const;
const PT = 'portet' as const;

export const OFFRES: readonly Offre[] = [
  /* ── Saint-Cyprien ────────────────────────────────────────────────── */
  { club: SC, intitule: 'Boxe Anglaise', famille: 'boxe-anglaise', detail: 'Les poings, la garde, les déplacements.' },
  { club: SC, intitule: 'Boxe Thaï / K1', famille: 'thai', detail: 'La discipline la plus complète de la salle : poings, jambes, genoux.' },
  { club: SC, intitule: 'Kick Boxing', famille: 'kick-boxing', detail: 'Poings et jambes, en garde haute et sur appuis.' },
  { club: SC, intitule: 'Open Sparring', famille: 'sparring', detail: 'Le créneau où l’on met en application, encadré.' },
  { club: SC, intitule: 'PAOS', famille: 'boxe-anglaise', detail: 'Le travail aux pattes avec un coach, round par round.' },
  { club: SC, intitule: 'Boxing Lady', famille: 'femme', detail: 'Entre femmes, sans opposition.' },
  { club: SC, intitule: 'Baby Boxe', famille: 'enfants', detail: 'Le samedi : le jeu, l’équilibre, la notion de distance.' },
  { club: SC, intitule: 'Boxe éducative', famille: 'enfants', detail: 'Enfants et ados, le mercredi et le samedi.' },
  { club: SC, intitule: 'Boxing Camp', famille: 'physique', detail: 'Le circuit qui construit le moteur.' },
  { club: SC, intitule: 'Cross Training', famille: 'physique', detail: 'Force, souffle, gainage, en circuit.' },
  { club: SC, intitule: 'Hyrox', famille: 'physique', detail: 'La préparation au format de course en salle.' },

  /* ── Portet-sur-Garonne ───────────────────────────────────────────── */
  { club: PT, intitule: 'Boxe anglaise', famille: 'boxe-anglaise', detail: 'Les poings, la garde, les déplacements.' },
  { club: PT, intitule: 'Kick-boxing', famille: 'kick-boxing', detail: 'Les jambes en plus des poings.' },
  { club: PT, intitule: 'MMA', famille: 'mma', detail: 'Debout, au corps à corps et au sol — l’entraînement se fait dans la cage.' },
  { club: PT, intitule: 'Grappling & jiu-jitsu brésilien', famille: 'grappling', detail: 'Contrôle, projections, soumissions. Aucune frappe.' },
  { club: PT, intitule: 'Lady Boxing', famille: 'femme', detail: 'Le geste de boxe et le cardio, entre femmes.' },
  { club: PT, intitule: 'Préparation physique', famille: 'physique', detail: 'Gainage, force, souffle.' },
  { club: PT, intitule: 'Baby boxe', famille: 'enfants', detail: 'La première approche, en jeu.' },
  { club: PT, intitule: 'Boxe éducative', famille: 'enfants', detail: 'Le geste, la règle, le respect du partenaire.' },
  { club: PT, intitule: 'Kick-boxing enfants/ados', famille: 'enfants', detail: 'La suite éducative, avec les jambes.' },
] as const;

/** Les intitulés réellement publiés par un club. */
export const offresDuClub = (c: ClubId) => OFFRES.filter((o) => o.club === c);

/** Les clubs qui publient réellement une famille. */
export const clubsQuiProposent = (f: Famille): ClubId[] => [
  ...new Set(OFFRES.filter((o) => o.famille === f).map((o) => o.club)),
];

/** Les intitulés d'une famille, tous clubs confondus. */
export const offresDeLaFamille = (f: Famille) => OFFRES.filter((o) => o.famille === f);

/**
 * Une famille publiée par un seul club donne une réponse sans ambiguïté.
 * C'est le cas de la Boxe Thaï / K1 (Saint-Cyprien), du MMA et du grappling
 * (Portet), de l'Open Sparring et de l'Hyrox (Saint-Cyprien).
 */
export function destinationUnique(f: Famille): ClubId | null {
  const c = clubsQuiProposent(f);
  return c.length === 1 ? c[0] : null;
}

/** Les familles portées par chaque page de discipline du site. */
export const FAMILLES_PAR_PAGE = {
  'boxe-anglaise': ['boxe-anglaise', 'sparring'],
  'boxe-thai': ['thai', 'kick-boxing'],
  mma: ['mma', 'grappling'],
  'boxe-enfants': ['enfants'],
} as const satisfies Record<string, readonly Famille[]>;

export type PageDiscipline = keyof typeof FAMILLES_PAR_PAGE;

export const offresDeLaPage = (page: PageDiscipline) =>
  OFFRES.filter((o) => (FAMILLES_PAR_PAGE[page] as readonly Famille[]).includes(o.famille));

/** Les clubs concernés par une page de discipline. */
export const clubsDeLaPage = (page: PageDiscipline): ClubId[] => [
  ...new Set(offresDeLaPage(page).map((o) => o.club)),
];
