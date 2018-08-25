import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="content">
        <footer className="codrops-header">
          footer
  					<div className="codrops-links">
  						{/* <a className="codrops-icon codrops-icon--prev" href="https://tympanus.net/Development/ProximityFeedback/" title="Previous Demo"><svg className="icon icon--arrow"><use xlink:href="#icon-arrow"></use></svg></a> */}
  						<a className="codrops-icon codrops-icon--drop" href="https://tympanus.net/codrops/?p=34897" title="Back to the article"><svg className="icon icon--drop"></svg></a>
  					</div>
  					<h1 className="codrops-header__title">Grid Layout with Motion Hover Effect and Content Preview</h1>
  					{/* <a className="github" href="https://github.com/codrops/GridLayoutMotion/" title="Find this project on GitHub"><svg className="icon icon--github"><use xlink:href="#icon-github"></use></svg></a> */}
  				</footer>
        </div>
      );
  }
}

export default Footer;
