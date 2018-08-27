import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <footer className="tc-footer bg-pattern1" id="tc-footer">
          <div className="uk-container uk-container-center">
              <div className="uk-grid">
                  <div className="copyright uk-width-medium-1-2">
                      COPYRIGHT 2018 MSKH
                  </div>
                  <div className="uk-width-medium-1-2">
                      <ul className="uk-subnav-line uk-subnav uk-margin-remove uk-align-medium-right">
                          <li>
                              <a href="#">TWITTER</a>
                          </li>
                          <li>
                              <a href="#">LINKEDIN</a>
                          </li>
                      </ul>
                      <a href="#tc-slider" className="tc-totopscroll" title="Go Top" data-uk-smooth-scroll="">
                          <i className="li li-arrows-up"></i>
                      </a>
                  </div>
              </div>
          </div>
      </footer>
      <div id="tc-offcanvas" className="uk-offcanvas" aria-hidden="false">
              <div className="uk-offcanvas-bar uk-offcanvas-bar-flip uk-offcanvas-bar-show" mode="slide">
                  <ul className="uk-nav uk-nav-offcanvas" data-uk-scrollspy-nav="{closest:'li'}">
                      <li className=""><a href="#tc-slider" data-uk-smooth-scroll="">Home</a></li>
                      <li className="uk-active"><a href="#tc-about" data-uk-smooth-scroll="{offset: 80}">About</a></li>
                      <li><a href="#tc-work" data-uk-smooth-scroll="{offset: 80}">Work</a></li>
                      <li><a href="#tc-contact" data-uk-smooth-scroll="{offset: 80}">Contact</a></li>
                  </ul>
              </div>
          </div>
        </div>
      );
  }
}

export default Footer;
