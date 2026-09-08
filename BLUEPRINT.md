# Boxing Center — depuis Tournefeuille · brief de site

Loi commune : `./BLUEPRINT-FAMILLE.md` (copie de `../BLUEPRINT-SATELLITES-BOXING-CENTER.md`).
Domaine `www.boxingcenter-tournefeuille.fr` · dépôt `https://github.com/Eddy-etame/Boxingcenter-tournefeuille.git`.

## Destinations — DEUX (le seul satellite à choix)
1. **Boxing Center Portet-sur-Garonne** — faits/URLs/offre : brief Muret.
2. **Boxing Center Saint-Cyprien** · 11 rue Sainte-Lucie, 31300 Toulouse · 05 62 24 46 82 · **métro A Saint-Cyprien-République à 4 min** · parking Saint-Cyprien à proximité · horaires : **lun–sam 10h–21h15** (tranché par Eddy, 2026-09-08 — Saint-Cyprien ferme à 21h15, c'est ce que dit son planning). Dans le registre, les horaires sont par club : Portet 21h30, Saint-Cyprien 21h15.
   URLs : `https://club-boxe-toulouse.com/` · `/activites/` · `/plannings/` · `/tarifs/` · `/seance-offerte/` · `/la-salle/`.
   Offre réelle (page activités, vérifiée le 2026-09-08) : Boxe Anglaise · **Boxe Thaï / K1** (« la discipline la plus complète de la salle ») · Kick Boxing · Open Sparring · PAOS · Boxing Lady (« entre femmes, sans opposition ») · Baby Boxe (le samedi) · Boxe éducative (enfants, ados — mercredi et samedi) · Boxing Camp · Cross Training · Hyrox. **Pas de MMA, pas de grappling.** Ring, cage. Coachs : Dadi (anglaise), Tawee (pieds-poings), Brice ; stock photo : Boumenir, Chavaudra, Daffe, Jérôme, Mehdi, Sonia, Tancrède, Valentin. Offres : 1re séance 10 €, 29 € / 4 semaines sans engagement, 44 €.
   Fun fact : « à 4 minutes du métro A ».

Le moteur garde le choix de club (comme Colomiers) et le graphe réel tranche, **vérifié** : boxe thaï / K1 → Saint-Cyprien (Portet publie « kick-boxing », pas « Muay Thaï ») · MMA / grappling / cage → Portet (Saint-Cyprien n'en publie pas) · boxe anglaise, enfants (Baby Boxe, éducative), femme (Boxing Lady / Lady Boxing) → les deux, le trajet départage (métro A depuis Toulouse-ouest vs voiture vers le sud) · Hyrox / cross-training → Saint-Cyprien. `/quel-club/` conservé.

## Tournefeuille — faits (Wikipédia, 2026-09-08)
31170 · INSEE 31557 · **30 168 hab. (2023)** · Tournefeuillais · 8 km à l'ouest de Toulouse · Touch, Ousseau, canal de Saint-Martory · A624 sortie 1 · **Linéo L3** · bus 21, 48, 63, 67, 116, 363, 365.
Limitrophes : **Colomiers**, **Cugnaux**, Plaisance-du-Touch, Toulouse.
Fait local : église détruite en 1595 par les huguenots, centre déplacé ; AST Basket (Yannick Souvré), AST Rugby (Fabien Galthié).
Accès : vers Saint-Cyprien par la rocade ouest / Linéo L3 puis métro A ; vers Portet par la D632 / A64.

## Communes satellites — une page chacune
| Commune | CP | Note |
|---|---|---|
| /fonsorbes/ | 31470 | à relever (population, limitrophes, D632) |
| /plaisance-du-touch/ | 31830 | limitrophe de Tournefeuille et Cugnaux ; **actuellement dans COMMUNES_VOISINES de Colomiers → à retirer de Colomiers** |

## Pages
Accueil · /boxe-anglaise/ · /mma/ · /boxe-thai/ (Muay Thaï, K1, kick-boxing, pieds-poings — le cluster « boxe thaï » est réel ici grâce à Saint-Cyprien) · /boxe-enfants/ · /premiere-seance/ (10 € et séance offerte : sourcés) · /quel-club/ · /fonsorbes/ · /plaisance-du-touch/ · /contact/ · /merci/ · légales · 404.
Nav (tranché) : **Plannings ↗** et **Tarifs ↗** sont des menus à deux entrées — un `<details>` natif dans la nav (« Portet-sur-Garonne ↗ / Saint-Cyprien ↗ »), clavier et lecteur d'écran sans script, le club résolu par le parcours affiché en premier. Jamais un seul club en dur.

## Mots-clés
9 motifs × {Tournefeuille, Fonsorbes, Plaisance-du-Touch}. **Retirer Tournefeuille et Plaisance-du-Touch de Colomiers** le jour de la mise en ligne. Secondaires : 31170, Linéo L3, ouest toulousain, métro Saint-Cyprien, Muay Thaï, K1.

## Images — 8 « MARDI » (Saint-Cyprien, 6720 px) en tête + Portet (non utilisées par Muret/Cugnaux) + stock st_cyprien (768×512 : portraits coachs en vignette)
| Source | Nom | Usage | Alt |
|---|---|---|---|
| MARDI_030 | `club-boxe-tournefeuille.webp` | **hero** | Le ring au tablier Boxing Center devant la fresque grise des deux boxeurs |
| MARDI_089 | `boxe-thai-tournefeuille.webp` | /boxe-thai/ | Une jeune pratiquante en garde, gants rose-or |
| MARDI_045 | `cours-boxe-sacs-tournefeuille.webp` | boxe anglaise / femme | Un groupe aux sacs Metal Boxe, sol bleu |
| MARDI_038 | `coach-boxe-tournefeuille.webp` | encadrement | Un coach bras croisés devant le ring |
| MARDI_084 | `boxe-femme-tournefeuille.webp` | Lady Punch | Une pratiquante en shadow boxing devant la fresque |
| MARDI_028 | `salle-boxe-tournefeuille.webp` | la salle | La salle vide, sacs, ring, sol bleu et rouge |
| MARDI_029 | `preparation-physique-tournefeuille.webp` | cross-training | Le plateau cardio sur gazon devant la fresque |
| MARDI_041 | `salle-mma-cage-tournefeuille.webp` | cage / rack | Le rack et la cage, poids au premier plan |
Légende des « MARDI » : « … — Boxing Center Saint-Cyprien » (club de destination visé par la page). Portet pour /mma/ (cage 050 si non prise ailleurs), légendée « … — Boxing Center Portet-sur-Garonne ».

## Système visuel — deux sous-familles se rencontrent : base Portet (papier chaud · encre · cuivre) ; la page /boxe-thai/ et la fiche Saint-Cyprien portent l'accent Saint-Cyprien — texte graphite `#3b3f47` (9,1:1 sur `#eeeeea`, mesuré), aplats vert de fresque `#9db83f` (loi commune §7). Le moteur affiche la couleur du club résolu.

## Concurrence : « club de boxe Tournefeuille », « MMA Tournefeuille », « boxe thaï Tournefeuille » + Fonsorbes, Plaisance-du-Touch.
## Bloquants : aucun.
