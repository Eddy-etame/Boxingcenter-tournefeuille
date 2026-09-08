import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Statique par défaut. Seul /api/contact tourne à la demande : il relaie le
// formulaire vers Inlet (JSON + preuve de travail), ce qu'un <form> natif ne
// peut pas faire seul. Tout le reste est pré-rendu.
export default defineConfig({
  site: 'https://www.boxingcenter-tournefeuille.fr',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
  redirects: {
    // Les formes d'URL à mots-clés fonctionnent, mais ne sont pas des pages :
    // fabriquer /club-boxe-cugnaux/ à côté de / serait le schéma de page
    // satellite que Google sanctionne.
    '/club-boxe-tournefeuille': '/',
    '/boxe-tournefeuille': '/',
    '/sport-combat-tournefeuille': '/',
    '/salle-de-boxe-tournefeuille': '/',
    '/boxe-anglaise-tournefeuille': '/boxe-anglaise/',
    '/club-mma-tournefeuille': '/mma/',
    '/salle-mma-tournefeuille': '/mma/',
    '/mma-tournefeuille': '/mma/',
    '/grappling-tournefeuille': '/mma/',
    '/club-boxe-thai-tournefeuille': '/boxe-thai/',
    '/boxe-thai-tournefeuille': '/boxe-thai/',
    '/muay-thai-tournefeuille': '/boxe-thai/',
    '/club-kick-boxing-tournefeuille': '/boxe-thai/',
    '/kick-boxing-tournefeuille': '/boxe-thai/',
    '/boxe-pieds-poings-tournefeuille': '/boxe-thai/',
    '/k1-tournefeuille': '/boxe-thai/',
    '/boxe-enfant-tournefeuille': '/boxe-enfants/',
    '/boxe-femme-tournefeuille': '/quel-club/',
    '/club-boxe-fonsorbes': '/fonsorbes/',
    '/salle-mma-fonsorbes': '/fonsorbes/',
    '/club-boxe-plaisance-du-touch': '/plaisance-du-touch/',
    '/salle-mma-plaisance-du-touch': '/plaisance-du-touch/',
    '/bus-tournefeuille-saint-cyprien': '/transports/',
    '/acces': '/transports/',
    '/ta-seance': '/quel-club/',
  },
});
