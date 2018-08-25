import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="grid">
            <a className="grid__item" href="#preview-1">
						<div className="box">
							<div className="box__shadow"></div>
							<img className="box__img" src="img/1.jpg" alt="Some image"/>
							<h3 className="box__title"><span className="box__title-inner" data-hover="Memo">Memo</span></h3>
							<h4 className="box__text"><span className="box__text-inner">Beast</span></h4>
							<div className="box__deco">&#10014;</div>
							<p className="box__content">"Sometimes we go surfing when it's stormy weather"</p>
						</div>
					</a>
            <a className="grid__item" href="#preview-2">
						<div className="box">
							<div className="box__shadow"></div>
							<img className="box__img" src="img/2.jpg" alt="Some image"/>
							<h3 className="box__title box__title--straight box__title--bottom"><span className="box__title-inner" data-hover="Gun">Gun</span></h3>
							<h4 className="box__text box__text--bottom"><span className="box__text-inner box__text-inner--rotated1">Rain</span></h4>
							<div className="box__deco box__deco--top">&#10115;</div>
						</div>
					</a>
          </div>
        </div>
        <div className="overlay">
  				<div className="overlay__reveal"></div>
  				<div className="overlay__item" id="preview-1">
  					<div className="box">
  						<div className="box__shadow"></div>
  						<img className="box__img box__img--original" src="img/original/1.jpg" alt="Some image"/>
  						<h3 className="box__title"><span className="box__title-inner">Memo</span></h3>
  						<h4 className="box__text"><span className="box__text-inner">Beast</span></h4>
  						<div className="box__deco">✞</div>
  					</div>
  					<p className="overlay__content">It's time the tale were told of how you took a child and you made him old.</p>
  				</div>
        </div>

      </div>
    );
  }
}

export default Landing;
