import React from 'react';



class PortfolioItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titleCss: [],
      boxTextCss: [],
      boxPositionCss:[]
    }
  }
  render () {
    return (
      <a className="grid__item" href="#preview-1">
        <div class="box">
							<div class="box__shadow"></div>
							<img class="box__img" src="img/12.jpg" alt="Some image"/>
							<h3 class="box__title box__title--straight box__title--left"><span class="box__title-inner" data-hover={this.props.item.name}>{this.props.item.name}</span></h3>
							<h4 class="box__text box__text--bottom box__text--right"><span class="box__text-inner">Design</span></h4>
							<div class="box__deco box__deco--top">&#10153;</div>
						</div>
  </a>
  );
  }
}

export default PortfolioItem;
