/**
 * LE PARCOURS — le moteur du site.
 *
 * Tournefeuille est le seul satellite de la famille à viser DEUX clubs.
 * L'incertitude n'est donc pas seulement « quoi » et « quand » : c'est aussi
 * « lequel ». Et cette question-là a une réponse factuelle, pas une réponse
 * commerciale.
 *
 * Quatre responsabilités, et rien d'autre :
 *   1. retenir ce que le visiteur a décidé, d'une page à l'autre ;
 *   2. DÉRIVER le club à partir du graphe réel des disciplines — jamais le
 *      demander, jamais le laisser écrire par un composant ;
 *   3. en déduire sa séance : des intitulés réels, jamais une invention ;
 *   4. tendre le trait à proportion de ce qui est réellement établi.
 *
 * La dérivation suit deux règles, dans cet ordre :
 *   — LE FAIT. Si un seul club publie la discipline, c'est lui, quel que soit
 *     le créneau. La Boxe Thaï / K1 est à Saint-Cyprien ; le MMA en cage et le
 *     grappling sont à Portet. Il n'y a rien à arbitrer.
 *   — L'ACCÈS. Quand les deux la publient, c'est le trajet qui départage —
 *     et on dit pourquoi, sans jamais prétendre qu'un club vaut mieux que
 *     l'autre.
 */

import {
  OFFRES,
  FAMILLES_PAR_PAGE,
  destinationUnique,
  type Famille,
  type PageDiscipline,
} from '../data/offres';
import { SITE, type ClubId } from '../data/verite';

export type Creneau = 'midi' | 'apres-midi' | 'soir' | 'samedi';

export type Parcours = {
  discipline?: PageDiscipline;
  creneau?: Creneau;
  /** DÉRIVÉ, jamais saisi : voir `deriver`. */
  club?: ClubId;
  /** dernière écriture, pour périmer un parcours oublié */
  t?: number;
};

/* La clé porte la ville du site : deux sites de la famille ouverts dans le
   même navigateur ne se marchent jamais dessus. */
const CLE = `bc-${SITE.ville.toLowerCase().replace(/[^a-z]/g, '')}-parcours`;
/** Un parcours vieux de plus de trente jours ne dit plus rien d'utile. */
const PEREMPTION = 30 * 24 * 60 * 60 * 1000;

export const LIBELLE_DISCIPLINE: Record<PageDiscipline, string> = {
  'boxe-anglaise': 'Boxe anglaise',
  'boxe-thai': 'Boxe thaï & K1',
  mma: 'MMA & grappling',
  'boxe-enfants': 'Boxe enfants',
};

/** La même discipline ne s'écrit pas pareil dans un titre et dans une phrase. */
const DANS_UNE_PHRASE: Record<PageDiscipline, string> = {
  'boxe-anglaise': 'de la boxe anglaise',
  'boxe-thai': 'de la boxe thaï ou du K1',
  mma: 'du MMA',
  'boxe-enfants': 'un cours de boxe pour mon enfant',
};

export const LIBELLE_CLUB: Record<ClubId, string> = {
  'saint-cyprien': 'Saint-Cyprien',
  portet: 'Portet-sur-Garonne',
};

export const LIBELLE_CRENEAU: Record<Creneau, string> = {
  midi: 'Le midi',
  'apres-midi': "L'après-midi",
  soir: 'Le soir',
  samedi: 'Le samedi',
};

const CRENEAU_PHRASE: Record<Creneau, string> = {
  midi: 'le midi',
  'apres-midi': "l'après-midi",
  soir: 'le soir',
  samedi: 'le samedi',
};

/* ─────────────────────────────  Mémoire  ───────────────────────────── */

function lire(): Parcours {
  try {
    const brut = localStorage.getItem(CLE);
    if (!brut) return {};
    const p = JSON.parse(brut) as Parcours;
    if (p.t && Date.now() - p.t > PEREMPTION) return {};
    return p;
  } catch {
    // Navigation privée, stockage refusé, quota plein : on continue sans
    // mémoire plutôt que de casser la page.
    return {};
  }
}

function ecrire(p: Parcours) {
  try {
    localStorage.setItem(CLE, JSON.stringify({ ...p, t: Date.now() }));
  } catch {
    /* sans mémoire, le site reste entièrement utilisable */
  }
}

let etat: Parcours = {};

export const parcours = (): Parcours => ({ ...etat });

/* ──────────────────────────  La dérivation  ────────────────────────── */

export type Recommandation = { club?: ClubId; pourquoi: string };

/**
 * Le club se déduit. Il ne se choisit pas, il ne se saisit pas, et aucun
 * composant n'a le droit de l'écrire — sinon la chaîne casse et le site se
 * met à raconter des choses qu'aucun club ne publie.
 */
export function recommander(p: Parcours): Recommandation | null {
  if (!p.discipline) return null;

  const familles = FAMILLES_PAR_PAGE[p.discipline] as readonly Famille[];

  // 1 — LE FAIT. Une famille publiée par un seul club tranche la question.
  const uniques = [...new Set(familles.map(destinationUnique).filter(Boolean))] as ClubId[];
  if (uniques.length === 1) {
    const club = uniques[0];
    return {
      club,
      pourquoi:
        club === 'saint-cyprien'
          ? 'Dans le réseau Boxing Center, cette pratique est publiée par Saint-Cyprien — c’est le club à viser, quel que soit ton créneau.'
          : 'Dans le réseau Boxing Center, cette pratique est publiée par Portet-sur-Garonne, avec la cage et le grappling. C’est le club à viser, quel que soit ton créneau.',
    };
  }

  // 2 — L'ACCÈS. Les deux la publient : le trajet départage, et on dit lequel.
  if (!p.creneau) {
    return {
      pourquoi:
        'Les deux clubs publient cette pratique. Dis-nous quand tu peux t’entraîner et on te dit lequel viser depuis Tournefeuille.',
    };
  }

  if (p.creneau === 'soir') {
    return {
      club: 'saint-cyprien',
      pourquoi:
        'Le soir, le métro travaille pour toi : le Linéo L3 descend aux Arènes, la ligne A te dépose à Saint-Cyprien – République, et le club est à quatre minutes. Aucune place de stationnement à chercher.',
    };
  }
  if (p.creneau === 'midi' || p.creneau === 'apres-midi') {
    return {
      club: 'portet',
      pourquoi:
        'Hors des heures de pointe, la rocade ouest et l’A64 rendent Portet-sur-Garonne très simple d’accès, et le stationnement y est immédiat. C’est le créneau où la voiture gagne.',
    };
  }
  return {
    pourquoi:
      'Le samedi, les deux clubs se valent depuis Tournefeuille : choisis selon la discipline exacte et le planning de chacun.',
  };
}

/* ─────────────────────────────  La séance  ───────────────────────────── */

export type Seance = {
  /** les intitulés réels publiés par le club retenu */
  intitules: string[];
  club?: ClubId;
  creneau?: Creneau;
  /** la phrase qui justifie, sans jamais inventer d'horaire */
  pourquoi: string;
};

/**
 * On ne fabrique jamais un horaire. Le club publie son planning ; nous, on dit
 * quel club viser, quelle pratique chercher, et à quel moment de la journée
 * regarder. La précision appartient à la source.
 */
export function seance(p: Parcours): Seance | null {
  if (!p.discipline) return null;

  const familles = FAMILLES_PAR_PAGE[p.discipline] as readonly Famille[];
  const reco = recommander(p);
  const club = p.club ?? reco?.club;

  const intitules = OFFRES.filter(
    (o) => familles.includes(o.famille) && (!club || o.club === club)
  ).map((o) => o.intitule);

  if (!p.creneau && !club) {
    return { intitules, pourquoi: reco?.pourquoi ?? '' };
  }

  const quand = p.creneau ? CRENEAU_PHRASE[p.creneau] : '';
  const complement = p.creneau
    ? p.creneau === 'soir'
      ? ` ${quand.charAt(0).toUpperCase() + quand.slice(1)}, c’est le moment le plus vivant de la salle : il y a du monde à qui se mesurer.`
      : p.creneau === 'midi'
        ? ' Le midi est le créneau le plus calme : la meilleure façon de débuter sans public.'
        : p.creneau === 'samedi'
          ? ' Le samedi est le créneau des familles et de ceux dont la semaine est trop pleine.'
          : ' L’après-midi, la salle est disponible et les coachs sont là.'
    : '';

  return { intitules, club, creneau: p.creneau, pourquoi: (reco?.pourquoi ?? '') + complement };
}

/* ─────────────────────────────  Rendu  ───────────────────────────── */

function peindre() {
  const barre = document.querySelector<HTMLElement>('[data-parcours]');
  if (!barre) return;

  const s = seance(etat);
  // Le club est déjà dérivé par `definir` / `demarrer` : on ne recalcule pas.
  const valeurs: Record<string, string> = {
    discipline: etat.discipline ? LIBELLE_DISCIPLINE[etat.discipline] : '',
    creneau: etat.creneau ? LIBELLE_CRENEAU[etat.creneau] : '',
    club: etat.club ? LIBELLE_CLUB[etat.club] : '',
    seance: s?.club && s.creneau ? s.intitules[0] ?? '' : '',
  };

  let acquis = 1; // le départ est toujours acquis : la ville du site
  for (const [cle, valeur] of Object.entries(valeurs)) {
    const etape = barre.querySelector<HTMLElement>(`[data-etape="${cle}"]`);
    if (!etape) continue;
    const cible = etape.querySelector<HTMLElement>('.parcours__valeur');
    if (cible) cible.textContent = valeur;
    etape.classList.toggle('est-acquis', Boolean(valeur));
    if (valeur) acquis++;
  }

  // Le trait se tend exactement à proportion de ce qui est établi.
  barre.style.setProperty('--tension', String((acquis - 1) / 4));
  barre.dataset.club = etat.club ?? '';
  barre.hidden = acquis === 1;

  document.dispatchEvent(new CustomEvent('parcours:maj', { detail: parcours() }));
}

/* ─────────────────────────────  API  ───────────────────────────── */

/**
 * Le club n'est jamais saisi : il est DÉRIVÉ de la discipline et du créneau,
 * ici et nulle part ailleurs.
 */
function deriver(p: Parcours): Parcours {
  const { club: _ignore, ...reste } = p;
  const club = recommander(reste)?.club;
  return club ? { ...reste, club } : reste;
}

const identique = (a: Parcours, b: Parcours) =>
  a.discipline === b.discipline && a.creneau === b.creneau && a.club === b.club;

export function definir(partiel: Partial<Parcours>) {
  const suivant = deriver({ ...etat, ...partiel });
  if (identique(etat, suivant)) return;
  etat = suivant;
  ecrire(etat);
  peindre();
}

export function effacer() {
  etat = {};
  try {
    localStorage.removeItem(CLE);
  } catch {
    /* rien à faire */
  }
  peindre();
}

/** Phrase lisible du parcours, réutilisée telle quelle dans le message envoyé. */
export function enPhrase(p: Parcours = etat): string {
  const bouts = [`Je pars de ${SITE.ville}`];
  if (p.discipline) bouts.push(`je cherche ${DANS_UNE_PHRASE[p.discipline]}`);
  if (p.creneau) bouts.push(`je peux m’entraîner ${CRENEAU_PHRASE[p.creneau]}`);
  const club = p.club ?? recommander(p)?.club;
  if (club) bouts.push(`et ${LIBELLE_CLUB[club]} me semble être le club le plus adapté`);
  return bouts.join(', ') + '.';
}

/* ─────────────────────────────  Démarrage  ───────────────────────────── */

export function demarrer() {
  // Ce qui a été lu peut dater d'une version où le club se déduisait
  // autrement : on le recalcule toujours à partir du graphe d'aujourd'hui.
  etat = deriver(lire());

  // Visiter une page de discipline EST une décision : elle renseigne le parcours.
  const d = document.body.dataset.discipline as PageDiscipline | undefined;
  if (d && etat.discipline !== d) {
    etat = deriver({ ...etat, discipline: d });
    ecrire(etat);
  }

  peindre();
  document.querySelector('[data-effacer]')?.addEventListener('click', effacer);

  // N'importe quel élément renseigne le parcours avec data-choix="creneau:soir".
  // Aucun composant n'a besoin d'importer ce module.
  document.addEventListener('click', (e) => {
    const cible = (e.target as HTMLElement)?.closest<HTMLElement>('[data-choix]');
    if (!cible) return;
    const [cle, valeur] = (cible.dataset.choix ?? '').split(':');
    if (!cle || !valeur) return;
    definir({ [cle]: valeur } as Partial<Parcours>);
  });
}
