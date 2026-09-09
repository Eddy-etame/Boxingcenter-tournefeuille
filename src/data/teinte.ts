/**
 * LA TEINTE DU SITE — les mêmes valeurs que `styles/jetons.css`, lisibles
 * depuis un script de build : la vignette OG et le favicon se dessinent avec
 * la couleur du site, pas avec une couleur retapée.
 *
 * Tournefeuille : le vert du tapis de gazon de Saint-Cyprien sur un papier
 * froid. Une valeur change ici ET dans jetons.css, jamais dans un seul des deux.
 */
export const TEINTE = {
  papier: '#eef0e9',
  papierCreuse: '#e3e6dc',
  papierVif: '#f8faf3',
  encre: '#23262b',
  graphite: '#5c6159',
  trait: 'rgba(35, 38, 43, 0.16)',
  signal: '#9db83f',
  signalTexte: '#4a6b12',
  signalClair: '#b6d557',
} as const;
