import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="content">
        <header className="codrops-header">
          header
  					<div className="codrops-links">
  						<a className="codrops-icon codrops-icon--prev" href="https://tympanus.net/Development/ProximityFeedback/" title="Previous Demo"><svg className="icon icon--arrow">asd</svg></a>
  						<a className="codrops-icon codrops-icon--drop" href="https://tympanus.net/codrops/?p=34897" title="Back to the article"><svg className="icon icon--drop"></svg></a>
  					</div>
  					{/* <h1 className="codrops-header__title">Grid Layout with Motion Hover Effect and Content Preview</h1>
  					<a className="github" href="https://github.com/codrops/GridLayoutMotion/" title="Find this project on GitHub"><svg className="icon icon--github"><use xlink:href="#icon-github"></use></svg></a> */}
  				</header>
        </div>
      );
  }
}

export default Header;
