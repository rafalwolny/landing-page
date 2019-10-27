import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-scroll";

import { selectEnglishLanguage, selectPolishLanguage } from '../actions';
import '../css/NavBar.css';

class NavBar extends React.Component {
  state = {
    scrolled: false
  }
  
  componentDidMount(){
    this.props.selectPolishLanguage();
    window.addEventListener('scroll', () => {
      const isOnTop = window.scrollY < 100;
      if(isOnTop !== true){
        this.setState({ scrolled: true });
      } else{
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  render(){
    return(
      <header id="nav-bar-container" className={this.state.scrolled ? 'scrolled' : 'fade'}>
        <div className="nav-bar-left-side">
          <div id="ENG" className="flag-icon" onClick={() => this.props.selectEnglishLanguage()}></div>
          <div id="PL" className="flag-icon" onClick={() => this.props.selectPolishLanguage()}></div>
        </div>
        <div id="hamburger" className={this.state.scrolled ? 'scrolled' : 'fade'}>
          <label htmlFor="toggle">&#9776;</label>
        </div>
        <input type="checkbox" id="toggle"/>
        <div className="nav-bar-right-side">
          <div>
            <Link to="home" spy={true} smooth={true} onSetActive={this.handleSetActive} className="navbar-link">
              {this.props.selectedLanguage.navbarOne}
            </Link>
          </div>
          <div>
            <Link to="about-me" spy={true} smooth={true} offset={-50} className="navbar-link">
              {this.props.selectedLanguage.navbarTwo}
            </Link>
          </div>
          <div>
            <Link to="portfolio" spy={true} smooth={true} offset={-50} className="navbar-link">
              {this.props.selectedLanguage.navbarThree}
            </Link>
          </div>
          <div>
            <Link to="contact" spy={true} smooth={true} offset={-50} className="navbar-link">
              {this.props.selectedLanguage.navbarFour}
            </Link>
          </div>
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