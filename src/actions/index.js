export const selectEnglishLanguage = () => {
  return {
    type: 'LANGUAGE_SELECTED',
    payload: {
      navbarOne: 'HOME',
      navbarTwo: 'ABOUT ME',
      navbarThree: 'PORTFOLIO',
      navbarFour: 'CONTACT',
      aboutMeOne: 'ABOUT ME',
      aboutMeTwo: 'English',
      aboutMeThree: 'TECHNOLOGIES'
    }
  };
};

export const selectPolishLanguage = () => {
  return {
    type: 'LANGUAGE_SELECTED',
    payload: {
      navbarOne: 'HOME',
      navbarTwo: 'O MNIE',
      navbarThree: 'PORTFOLIO',
      navbarFour: 'KONTAKT',
      aboutMeOne: 'O MNIE',
      aboutMeTwo: 'Jestem studentem pierwszego roku Informatyki w Biznesie na Uniwersytecie Ekonomicznym we Wrocławiu. Zajmuję się programowaniem stron internetowych wysokiej jakości. Moje projekty to strony zoptymalizowane i responsywne- dobrze wyświetlające się nie tylko na ekranach komputerów, ale także na urządzeniach mobilnych.',
      aboutMeThree: 'TECHNOLOGIE'
    }
  };
};