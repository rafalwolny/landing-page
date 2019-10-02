import React from 'react';
import { connect } from 'react-redux';
import { Link, animateScroll as scroll } from "react-scroll";

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
        <div className="left-side">
          <div id="ENG" className="button" onClick={() => this.props.selectEnglishLanguage()}></div>
          <div id="PL" className="button" onClick={() => this.props.selectPolishLanguage()}></div>
        </div>
        <div className="right-side">
          <div>
            <Link activeClass="active" to="home" spy={true} smooth={true} onSetActive={this.handleSetActive} className="navbar-link">
              {this.props.selectedLanguage.navbarOne}
            </Link>
          </div>
          <div>
            <Link activeClass="active" to="about-me" spy={true} smooth={true} className="navbar-link">
              {this.props.selectedLanguage.navbarTwo}
            </Link>
          </div>
          <div>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} className="navbar-link">
              {this.props.selectedLanguage.navbarThree}
            </Link>
          </div>
          <div>
            <Link activeClass="active" to="contact" spy={true} smooth={true} className="navbar-link">
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