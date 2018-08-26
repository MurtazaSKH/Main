import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="tc-header header-style1" id="tc-header">
          <div className="uk-sticky-placeholder" style={{height: '73px', margin: '0px'}}>
              <div className="tc-top-block" data-uk-sticky="{top:-400, animation: &#39;uk-animation-slide-top&#39;}" style={{margin: '0px'}}>
                  <div className="uk-container uk-container-center">
                      <div className="tc-logo uk-hidden-small">
                          <a href="#">
                              MSKH
                          </a>
                      </div>
                      <nav className="uk-navbar tc-navbar">
                          <ul className="uk-navbar-nav uk-hidden-small" data-uk-scrollspy-nav="{closest:'li'}">
                              <li className="">
                                  <a href="#tc-slider" data-uk-smooth-scroll="">Home</a>
                              </li>
                              <li className="">
                                  <a href="#tc-about" data-uk-smooth-scroll="{offset: 80}">About</a>
                              </li>
                              <li className="">
                                  <a href="#tc-work" data-uk-smooth-scroll="{offset: 80}">Work</a>
                              </li>
                              <li className="">
                                  <a href="#tc-contact" data-uk-smooth-scroll="{offset: 80}">Contact</a>
                              </li>
                          </ul>
                          <a href="#tc-offcanvas" className="uk-navbar-toggle uk-visible-small tc-off-toggle"
                              data-uk-offcanvas="{mode:&#39;slide&#39;}"></a>
                          <div className="uk-navbar-content tc-logo uk-visible-small">
                              <a href="#">
                                  Fiz
                              </a>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
      );
  }
}

export default Header;
