/**
 * MANIFESTE MÉDIA — la seule porte d'entrée des images.
 *
 * Nom de fichier : `<sujet>-tournefeuille` — le sujet est ce qu'on voit, la
 * ville est celle du site. Pas de « boxing-center » dans le nom, pas de numéro
 * d'origine.
 *
 * `alt` décrit la scène, jamais un lieu. `legende` dit ce qu'on voit puis le
 * club que la page vise — et ce site en vise deux : les vues de la salle noire
 * à la fresque portent Saint-Cyprien, les vues de la salle bleue portent
 * Portet-sur-Garonne.
 */

export type Media = {
  /** nom de fichier SEO, sans extension */
  slug: string;
  /** fichier source dans le lot WeTransfer */
  source: string;
  /** ce qu'on voit — pour les lecteurs d'écran et pour Google Images */
  alt: string;
  /** visible sous la photo quand elle est présentée comme document */
  legende?: string;
  /** point d'intérêt, pour les recadrages mobiles */
  focus?: string;
};

const LOT = 'wetransfer_photos-bc-tournefeuille_2026-09-08_1010';

const SC = 'Boxing Center Saint-Cyprien';
const PT = 'Boxing Center Portet-sur-Garonne';

export const MEDIAS = [
  {
    slug: 'club-boxe-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_030.jpg',
    alt: 'Le ring au tablier « Boxing Center », cordes rouges et bleues, devant la fresque murale de deux boxeurs peinte en gris sur le mur noir.',
    legende: `Le ring — ${SC}`,
    focus: '48% 50%',
  },
  {
    slug: 'boxe-thai-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_089.jpg',
    alt: 'Deux pratiquantes en opposition légère, gants rose-or et gants noirs, devant le grillage de la cage.',
    legende: `Face à face — ${SC}`,
    focus: '62% 40%',
  },
  {
    slug: 'cours-boxe-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_045.jpg',
    alt: 'Un cours collectif au milieu des sacs Metal Boxe suspendus, sur le sol bleu, le coach au centre du groupe.',
    legende: `Un cours collectif — ${SC}`,
    focus: '50% 45%',
  },
  {
    slug: 'coach-boxe-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_038.jpg',
    alt: 'Un coach en t-shirt noir, bras croisés, debout sur le tapis rouge devant le ring et la banderole du club.',
    legende: `L’encadrement — ${SC}`,
    focus: '50% 40%',
  },
  {
    slug: 'boxe-femme-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_084.jpg',
    alt: 'Une pratiquante en garde, mains bandées, travaille à vide devant la fresque murale.',
    legende: `Travail à vide — ${SC}`,
    focus: '45% 40%',
  },
  {
    slug: 'salle-de-boxe-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_028.jpg',
    alt: 'La salle vue en longueur : la rangée de sacs à gauche, le ring et le grillage de la cage à droite, le sol bleu et rouge au centre.',
    legende: `La salle en entier — ${SC}`,
    focus: '50% 50%',
  },
  {
    slug: 'preparation-physique-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_029.jpg',
    alt: 'Le plateau cardio — vélos, rameur, tapis de gazon — aligné devant la fresque des deux boxeurs.',
    legende: `Le plateau cardio — ${SC}`,
    focus: '48% 55%',
  },
  {
    slug: 'cage-mma-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER MARDI_041.jpg',
    alt: 'Le rack à charges et les haltères au premier plan, le grillage de la cage derrière.',
    legende: `Le rack et la cage — ${SC}`,
    focus: '45% 50%',
  },
  {
    slug: 'boxe-enfant-tournefeuille',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_046.jpg',
    alt: 'Un jeune pratiquant en garde haute au bord du ring, sous les drapeaux suspendus au plafond.',
    legende: `En garde, au bord du ring — ${PT}`,
    focus: '55% 35%',
  },
] as const satisfies readonly Media[];

export type MediaSlug = (typeof MEDIAS)[number]['slug'];

const INDEX = new Map(MEDIAS.map((m) => [m.slug, m as Media]));

export function media(slug: MediaSlug): Media {
  const m = INDEX.get(slug);
  if (!m) throw new Error(`Média inconnu : ${slug}`);
  return m;
}

export const DOSSIER_SOURCE = LOT;

/**
 * Les photos par RÔLE, pas par nom de fichier.
 *
 * Les pages partagées de la famille demandent « la photo de hero » ou « la
 * photo de la première séance » ; c'est ce manifeste qui dit laquelle.
 */
export const ROLES = {
  hero: 'club-boxe-tournefeuille',
  signature: 'boxe-thai-tournefeuille',
  premiereSeance: 'coach-boxe-tournefeuille',
  effort: 'cours-boxe-tournefeuille',
  calme: 'boxe-femme-tournefeuille',
  salle: 'salle-de-boxe-tournefeuille',
} as const satisfies Record<string, MediaSlug>;
