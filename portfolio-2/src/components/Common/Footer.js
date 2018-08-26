import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className="tc-footer bg-pattern1" id="tc-footer">
          <div className="uk-container uk-container-center">
              <div className="uk-grid">
                  <div className="copyright uk-width-medium-1-2">
                      COPYRIGHT © 2018 MSKH
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
      );
  }
}

export default Footer;
