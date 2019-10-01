import React from 'react';
import { connect } from 'react-redux';
import { selectEnglishLanguage, selectPolishLanguage } from '../actions';

import '../css/NavBar.css';

class NavBar extends React.Component {
  componentDidMount(){
    this.props.selectPolishLanguage();
  }

  render(){
    return(
      <header id="nav-bar-container">
        <div className="left-side">
          <div id="ENG" className="button" onClick={() => this.props.selectEnglishLanguage()}></div>
          <div id="PL" className="button" onClick={() => this.props.selectPolishLanguage()}></div>
        </div>
        <div className="right-side">
          <div><a href="/" className="navbar-link">{this.props.selectedLanguage.navbarOne}</a></div>
          <div><a href="section#about-me-container" className="navbar-link">{this.props.selectedLanguage.navbarTwo}</a></div>
          <div><a href="/" className="navbar-link">{this.props.selectedLanguage.navbarThree}</a></div>
          <div><a href="/" className="navbar-link">{this.props.selectedLanguage.navbarFour}</a></div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { selectedLanguage: state.selectedLanguage }
}

export default connect(
  mapStateToProps,
  { selectEnglishLanguage, selectPolishLanguage}
)(NavBar);