// EXPORT SELECTORS HEROES
export const isFetchHeroesSel = (state) => state.heroesReducer.isFetchHeroes;
export const HeroesErrorSel = (state) => state.heroesReducer.error;
export const HeroesSel = (state) => state.heroesReducer.heroes;

// EXPORT SELECTORS COMICS
export const isFetchComicsSel = (state) => state.comicsReducer.isFetchComics;
export const ComicsErrorSel = (state) => state.comicsReducer.error;
export const ComicsSel = (state) => state.comicsReducer.comics;

// EXPORT SELECTORS COMIC CHOOSE
export const isFetchComicChooseSel = (state) =>
  state.comicChooseReducer.isFetchComicChoose;
export const ComicChooseErrorSel = (state) => state.comicChooseReducer.error;
export const ComicChooseSel = (state) => state.comicChooseReducer.comicChoose;
