/**
 * CONTENU ÉDITORIAL des pages disciplines.
 *
 * Comment on écrit ici : des phrases courtes, adressées au lecteur, dans
 * l'ordre où il se pose les questions. Ce que c'est, où ça se passe, ce qui va
 * lui arriver, comment il y va. Pas d'images, pas de formules — de
 * l'information.
 *
 * Aucun fait volatil dans ce fichier : horaires, adresses et intitulés vivent
 * dans verite.ts et offres.ts, et n'existent qu'à un seul endroit.
 *
 * Particularité de ce site : deux clubs. Chaque page dit lequel viser, et
 * pourquoi c'est celui-là.
 */

import type { MediaSlug } from './medias';
import type { PageDiscipline } from './offres';

export type Bloc = { titre: string; texte: string };

export type Contenu = {
  id: PageDiscipline;
  h1: string;
  /** la réponse immédiate, avant tout le reste */
  chapeau: string;
  photoHero: MediaSlug;
  photoSecondaire: MediaSlug;
  /** ce que le visiteur gagne concrètement */
  promesse: string;
  blocs: readonly Bloc[];
  /** le déroulé d'une séance, dans l'ordre */
  seance: readonly string[];
  faq: readonly Bloc[];
};

export const CONTENUS: readonly Contenu[] = [
  {
    id: 'boxe-anglaise',
    h1: 'Cours de boxe anglaise près de Tournefeuille',
    chapeau:
      'La boxe anglaise se pratique aux poings, avec des gants, encadré. Aucun niveau n’est demandé pour commencer. Depuis Tournefeuille, les deux clubs la proposent : Saint-Cyprien, à quatre minutes du métro A, et Portet-sur-Garonne, par la rocade.',
    photoHero: 'cours-boxe-tournefeuille',
    photoSecondaire: 'coach-boxe-tournefeuille',
    promesse: 'Apprendre à boxer, encadré, sans rien avoir à prouver à personne.',
    blocs: [
      {
        titre: 'Quatre coups à apprendre',
        texte:
          'Le direct, le crochet, l’uppercut, et le jab qui prépare tout le reste. Ça paraît peu, et c’est ce qui rend la boxe dense : avec quatre coups, tout se joue dans les appuis, la distance et la garde. C’est un sport de placement plus que de puissance. C’est pour ça qu’on peut y progresser vite sans avoir jamais fait de sport.',
      },
      {
        titre: 'Tu ne prendras pas de coups le premier jour',
        texte:
          'L’opposition arrive plus tard, et seulement si tu la veux. Un débutant travaille au sac, à la corde, aux pattes d’ours avec un coach, et sur le déplacement à vide. Beaucoup de pratiquants s’entraînent des mois sans jamais faire d’opposition, et progressent quand même.',
      },
      {
        titre: 'Deux clubs, deux façons d’y aller',
        texte:
          'Saint-Cyprien publie la Boxe Anglaise, l’Open Sparring et les PAOS ; Portet publie la boxe anglaise. Le contenu est le même : ce qui change, c’est le trajet. Saint-Cyprien se fait en métro, Portet en voiture ou en bus. Choisis celui qui rentre dans ta semaine.',
      },
      {
        titre: 'Ce que ça change dans ta semaine',
        texte:
          'Deux séances par semaine suffisent à sentir une différence en un mois : le souffle d’abord, la posture ensuite. La boxe occupe complètement la tête — difficile de penser à sa journée pendant un round au sac. Beaucoup viennent pour la forme et restent pour ça.',
      },
    ],
    seance: [
      'Échauffement : corde, mobilité, déplacements à vide',
      'Technique : un geste, décomposé, répété lentement puis en rythme',
      'Sac ou pattes d’ours : l’application, avec correction du coach',
      'Renforcement : gainage, abdominaux, poids du corps',
      'Retour au calme et étirements',
    ],
    faq: [
      {
        titre: 'Quel club choisir depuis Tournefeuille ?',
        texte:
          'Si tu viens le soir, prends Saint-Cyprien : le Linéo L3 descend aux Arènes, le métro A t’emmène à Saint-Cyprien – République, et le club est à quatre minutes. Si tu viens le midi ou l’après-midi, Portet est plus simple en voiture, avec du stationnement immédiat.',
      },
      {
        titre: 'Je suis débutant complet, à 40 ans passés. C’est trop tard ?',
        texte:
          'C’est le profil le plus fréquent chez les nouveaux inscrits. La même séance existe à trois intensités, et c’est le coach qui règle la tienne. Ce qui compte, c’est le nombre de fois où tu reviens.',
      },
      {
        titre: 'Qu’est-ce qu’il faut apporter ?',
        texte:
          'Une tenue de sport, une bouteille d’eau, une serviette. Les gants et le matériel collectif sont sur place pour découvrir. Si tu continues, le club te dira quels gants et quelles bandes prendre.',
      },
      {
        titre: 'C’est quoi l’Open Sparring ?',
        texte:
          'Un créneau publié par Saint-Cyprien, où l’on met en application ce qu’on a travaillé, encadré. Tu n’y vas que quand tu le décides — ce n’est jamais un passage obligé.',
      },
    ],
  },
  {
    id: 'boxe-thai',
    h1: 'Club de boxe thaï et de kick-boxing près de Tournefeuille',
    chapeau:
      'La Boxe Thaï / K1 est publiée par Boxing Center Saint-Cyprien, qui la présente comme sa discipline la plus complète : poings, jambes, genoux. Depuis Tournefeuille, le Linéo L3 descend aux Arènes et le métro A dépose à quatre minutes du club. Le kick-boxing se pratique aussi à Portet.',
    photoHero: 'boxe-thai-tournefeuille',
    photoSecondaire: 'cage-mma-tournefeuille',
    promesse: 'La boxe pieds-poings la plus complète du réseau, à quatre minutes du métro.',
    blocs: [
      {
        titre: 'Ce que la thaï ajoute',
        texte:
          'Le kick-boxing autorise les poings et les jambes. La boxe thaï y ajoute les genoux, les coudes et le corps à corps : c’est ce qui en fait la discipline la plus complète debout. Saint-Cyprien la publie sous le nom « Boxe Thaï / K1 » — le K1 étant le règlement de compétition le plus courant.',
      },
      {
        titre: 'Où ça se passe',
        texte:
          'Au 11 rue Sainte-Lucie, à Toulouse. Le club est à quatre minutes à pied de la station Saint-Cyprien – République, sur la ligne A. Depuis Tournefeuille, le Linéo L3 t’amène aux Arènes et le métro fait les deux stations restantes.',
      },
      {
        titre: 'Il faut être souple ?',
        texte:
          'La souplesse vient avec les séances. Les premières semaines, les coups de pied restent bas — et le low kick, qui est bas par définition, est l’arme la plus utilisée de la discipline. La hauteur arrive toute seule avec les étirements de fin de séance.',
      },
      {
        titre: 'Et si tu préfères commencer plus simple',
        texte:
          'Le kick-boxing est publié par les deux clubs : mêmes armes, règles plus simples. Beaucoup commencent là, puis passent à la thaï quand les appuis sont en place. Rien n’oblige à choisir dès le premier jour.',
      },
    ],
    seance: [
      'Échauffement : corde, mobilité des hanches, chevilles',
      'Technique : une combinaison poings-jambes, décomposée puis enchaînée',
      'Sac et paos : puissance et placement, avec correction',
      'Renforcement du bas du corps et gainage',
      'Étirements longs — indispensables quand on frappe avec les jambes',
    ],
    faq: [
      {
        titre: 'Où faire de la boxe thaï près de Tournefeuille ?',
        texte:
          'À Boxing Center Saint-Cyprien, 11 rue Sainte-Lucie à Toulouse. C’est le seul club du réseau qui publie la Boxe Thaï / K1. Le trajet depuis Tournefeuille se fait en Linéo L3 jusqu’aux Arènes, puis en métro A.',
      },
      {
        titre: 'Boxe thaï, K1, kick-boxing : quelle différence ?',
        texte:
          'Le kick-boxing, c’est poings et jambes. Le K1 ajoute le genou et un corps à corps bref. La boxe thaï ajoute en plus les coudes et le clinch. À l’entraînement, la différence tient à quelques consignes ; au sac et à la technique, le travail est le même.',
      },
      {
        titre: 'Je peux commencer sans expérience ?',
        texte:
          'Oui. Un débutant travaille la garde, les appuis et une seule combinaison à la fois. Le contact vient plus tard, encadré, à intensité choisie.',
      },
      {
        titre: 'Et la boxe pieds-poings pour les enfants ?',
        texte:
          'Les deux clubs publient des cours pour les enfants et les ados : la boxe éducative à Saint-Cyprien, le kick-boxing enfants/ados à Portet. Tout s’y fait en touché contrôlé.',
      },
    ],
  },
  {
    id: 'mma',
    h1: 'Club MMA et grappling près de Tournefeuille',
    chapeau:
      'Le MMA combine la frappe debout, le corps à corps et le combat au sol. Depuis Tournefeuille, il se pratique à Boxing Center Portet-sur-Garonne : c’est le seul club du réseau avec une cage, et l’entraînement se fait dedans. Le grappling et le jiu-jitsu brésilien y sont publiés à part, sans aucune frappe.',
    photoHero: 'cage-mma-tournefeuille',
    photoSecondaire: 'boxe-thai-tournefeuille',
    promesse: 'S’entraîner dans une vraie cage, avec des gens dont c’est le métier.',
    blocs: [
      {
        titre: 'Debout, au corps à corps, au sol',
        texte:
          'Le MMA se joue sur trois zones : debout, où l’on frappe ; au corps à corps, où l’on projette ; au sol, où l’on contrôle et où l’on soumet. On progresse en apprenant à passer de l’une à l’autre. La plupart des débutants découvrent qu’ils sont déjà à l’aise sur l’une des trois.',
      },
      {
        titre: 'À quoi sert la cage',
        texte:
          'La paroi fait partie du jeu. On y travaille les appuis contre le grillage, les relevés, les sorties de contrôle — des situations qui n’existent pas sur un tatami ouvert. Portet-sur-Garonne est le seul club du réseau à en avoir une.',
      },
      {
        titre: 'Le grappling, sans les coups',
        texte:
          'Le grappling et le jiu-jitsu brésilien, publiés ensemble par Portet, c’est du MMA sans la frappe : contrôle, projections, soumissions. Aucun coup n’est porté. C’est la porte d’entrée de beaucoup de gens qui veulent le combat sans l’impact — et c’est aussi ce qui décide la majorité des combats de MMA.',
      },
      {
        titre: 'Comment tu y vas',
        texte:
          'En voiture, la D632 puis la rocade ouest et l’A64, sortie Portet. En bus, la 48 t’emmène à Basso Cambo et la 117 Express repart vers la route d’Espagne : descends à « Jean Jaurès », le club est au 61.',
      },
    ],
    seance: [
      'Échauffement spécifique : nuque, hanches, déplacements au sol',
      'Debout : une situation de frappe, en gants, à intensité choisie',
      'Corps à corps : la saisie, l’amenée au sol, la sortie',
      'Sol : un contrôle et une soumission, décomposés',
      'Mise en situation encadrée, puis retour au calme',
    ],
    faq: [
      {
        titre: 'Où est la salle MMA la plus proche de Tournefeuille ?',
        texte:
          'À Portet-sur-Garonne, au 61 route d’Espagne. C’est la seule cage du réseau Boxing Center, et l’entraînement de MMA s’y déroule dedans.',
      },
      {
        titre: 'On peut débuter sans rien connaître ?',
        texte:
          'Oui. Un débutant ne fait pas de combat : il apprend à chuter, à se relever, à tenir une position. Le contact est progressif et l’intensité se règle. C’est le rôle du coach de ne pas te laisser brûler les étapes.',
      },
      {
        titre: 'Grappling ou MMA : par lequel commencer ?',
        texte:
          'Si l’idée de recevoir un coup te bloque, commence par le grappling ou le jiu-jitsu brésilien : aucune frappe. Si c’est la frappe qui t’attire, le MMA en cage t’ira directement. Beaucoup finissent par faire les deux.',
      },
      {
        titre: 'Et à Saint-Cyprien ?',
        texte:
          'Saint-Cyprien publie la boxe anglaise, la Boxe Thaï / K1, le kick-boxing, le cross-training et les cours enfants. Pour le MMA et le grappling, c’est Portet.',
      },
    ],
  },
  {
    id: 'boxe-enfants',
    h1: 'Boxe enfant et ado près de Tournefeuille',
    chapeau:
      'Les deux clubs publient des cours pour les plus jeunes : Baby Boxe et boxe éducative à Saint-Cyprien, le mercredi et le samedi ; Baby boxe, boxe éducative et kick-boxing enfants/ados à Portet. Tout s’y fait en touché contrôlé.',
    photoHero: 'boxe-enfant-tournefeuille',
    photoSecondaire: 'salle-de-boxe-tournefeuille',
    promesse: 'Un cadre, une règle, et un enfant qui apprend à se contenir avant de frapper.',
    blocs: [
      {
        titre: 'Ce qu’un enfant apprend d’abord',
        texte:
          'Se tenir, regarder, attendre son tour, et s’arrêter net quand on le lui demande. La frappe vient après, et toujours contrôlée. Les parents qui viennent chercher un défouloir repartent souvent surpris : ce que la boxe éducative installe en premier, c’est un cadre — et c’est ce cadre qui calme.',
      },
      {
        titre: 'Trois cours selon l’âge',
        texte:
          'La Baby Boxe est une première approche : le jeu, l’équilibre, la distance. La boxe éducative ajoute le geste, la règle et le respect du partenaire. À Portet, le kick-boxing enfants/ados prend la suite pour ceux qui veulent aussi les jambes. Les âges exacts sont sur le planning de chaque club.',
      },
      {
        titre: 'Ton enfant ne prendra pas de coups',
        texte:
          'Le travail se fait au touché contrôlé : on cible, on effleure, on dose. Les protections sont adaptées à la taille et l’opposition libre n’existe pas dans ces créneaux.',
      },
      {
        titre: 'Le trajet, pour un parent',
        texte:
          'À Saint-Cyprien, la Baby Boxe a lieu le samedi et la boxe éducative le mercredi et le samedi — les jours où le métro est le plus simple depuis Tournefeuille. À Portet, tu y vas en voiture par la rocade, avec du stationnement sur place.',
      },
    ],
    seance: [
      'Échauffement en jeu : déplacements, réactions, coordination',
      'Rappel de la règle : la garde, la distance, le signal d’arrêt',
      'Technique : un geste simple, répété, corrigé un par un',
      'Application au sac ou aux pattes, en touché contrôlé',
      'Retour au calme, et le mot du coach sur la séance',
    ],
    faq: [
      {
        titre: 'À partir de quel âge ?',
        texte:
          'Chaque club publie une Baby Boxe pour les plus petits, puis une boxe éducative. Les tranches d’âge exactes figurent sur les plannings et peuvent bouger d’une saison à l’autre : c’est la seule source à jour.',
      },
      {
        titre: 'Quels jours pour les enfants ?',
        texte:
          'À Saint-Cyprien, la Baby Boxe est le samedi, la boxe éducative le mercredi et le samedi. À Portet, les créneaux sont publiés sur le planning du club.',
      },
      {
        titre: 'Mon enfant est très timide. Ça peut aller ?',
        texte:
          'C’est souvent lui qui en tire le plus. On travaille par deux, sur une consigne précise, et le coach circule. Beaucoup d’enfants réservés y trouvent leur premier sport où l’on n’est pas jugé devant tout le monde.',
      },
      {
        titre: 'Il faut acheter des gants tout de suite ?',
        texte:
          'Une tenue de sport et une bouteille d’eau suffisent pour découvrir. Si ton enfant continue, le club te dira quel matériel prendre et à quelle taille.',
      },
    ],
  },
] as const;

export const contenu = (id: PageDiscipline): Contenu => {
  const c = CONTENUS.find((x) => x.id === id);
  if (!c) throw new Error(`Contenu inconnu : ${id}`);
  return c;
};
