import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Translation from './Translation';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="titleHeader">KLECIANNY MELO</h1>
        <nav>
          <Link to="/" className="link-rout">
            <button className="btn-header">
              <div>
                <img title="Home" alt="Home" src="https://img.icons8.com/ios/50/7a7772/home--v1.png" className="icons-header" />
                HOME
              </div>
            </button>
          </Link>
          <Link to="/about" className="link-rout">
            <button className="btn-header">
              <div>
                <img title="Sobre" alt="Sobre" src="https://img.icons8.com/ios/50/7a7772/gender-neutral-user--v1.png" className="icons-header" />
                ABOUT
              </div>
            </button>
          </Link>
          <Link to="/projects" className="link-rout">
            <button className="btn-header">
              <div>
                <img title="Projetos" alt="Projetos" src="https://img.icons8.com/ios/50/7a7772/programming.png" className="icons-header" />
                PROJECTS
              </div>
            </button>
          </Link>
          <Link to="/blogposts" className="link-rout">
            <button className="btn-header">
              <div>
                <img title="Blog Posts" alt="Blog Posts" src="https://img.icons8.com/ios/50/7a7772/agreement.png" className="icons-header" />
                ARTICLES
              </div>
            </button>
          </Link>
          <Link to="/contact" className="link-rout">
            <button className="btn-header">
              <div>
                <img title="Contato" alt="Contato" src="https://img.icons8.com/ios/50/7a7772/contact-card.png" className="icons-header" />
                CONTACT
              </div>
            </button>
          </Link>
        </nav>
        <Translation />
      </div>
    );
  }
}

export default Header;
