import { combineReducers } from 'redux';

const selectedLanguageReducer = (selectedLanguage = '', action) => {
  if(action.type === 'LANGUAGE_SELECTED'){
    return action.payload;
  }
  return selectedLanguage;
}

export default combineReducers({
  selectedLanguage: selectedLanguageReducer
})