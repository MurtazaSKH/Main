import React from 'react';



class PortfolioItem extends React.Component {
  constructor () {
    super();
    this.state = {
      titleCss: [],
      boxTextCss: [],
      boxPositionCss:[]
    }
  }
  render () {
    return (<a className="grid__item" href="#preview-1">
    <div className="box">
      <div className="box__shadow"></div>
      <img className="box__img" src="img/1.jpg" alt="Some image"/>
      <h3 className="box__title"><span className="box__title-inner" data-hover="Memo">Memo</span></h3>
      <h4 className="box__text"><span className="box__text-inner">Beast</span></h4>
      <div className="box__deco">&#10014;</div>
      <p className="box__content">"Sometimes we go surfing when it's stormy weather"</p>
    </div>
  </a>);
  }
}

export default PortfolioItem;
