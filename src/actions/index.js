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
      aboutMeTwo: 'Jestem studentem pierwszego roku Informatyki na Wyższej Szkole Bankowej we Wrocławiu. Zajmuję się programowaniem stron internetowych wysokiej jakości.',
      aboutMeThree: 'TECHNOLOGIE'
    }
  };
};