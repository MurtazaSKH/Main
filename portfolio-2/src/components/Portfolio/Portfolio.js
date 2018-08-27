import React from 'react';
import config from '../../config.js';
// import {load} from '../../utils/spreadsheet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loadPortfolioItems} from '../../actions/sheetActions';
import PortfolioItem from '../Portfolio/PortfolioItem';
import PortfolioItemDetail from '../Portfolio/PortfolioItemDetail';

class Portfolio extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      items: [{name:'Explottens',link:'link1',description:'desc1',type:'Des'},{name:'FunnyWings',link:'link2',description:'desc2',type:'Des,Dev'},{name:'SA',link:'link2',description:'desc2',type:'QA'}],
      error: null
    }
  }

  componentDidMount() {
  // this.props.loadPortfolioItems();
  }

  render () {
    if(this.props.portfolioItems.portfolioItems.items) {
      // console.log(this.props.portfolioItems.portfolioItems.items);
      this.state.items = this.props.portfolioItems.portfolioItems.items;
    }
    return (
      <section className="tc-works sec-spacer sec-color" id="tc-work">
          <div className="uk-container uk-container-center">
              {/* <h3 className="uk-text-center uk-margin-bottom-remove">Check Out</h3> */}
              <h1 className="uk-margin-top-remove uk-text-center mb60" style={{color:'#1d2121'}}>Recent Work</h1>
              <div className="filter-style1 mb60">
                  <ul id="filter">
                      <li data-uk-filter="" className="uk-active">
                          <a href="">All</a>
                      </li>
                      <li data-uk-filter="Des" className="">
                          <a href="">Design</a>
                      </li>
                      <li data-uk-filter="Dev" className="">
                          <a href="">Development</a>
                      </li>
                      <li data-uk-filter="QA" className="">
                          <a href="">QA</a>
                      </li>
                  </ul>
              </div>
              {/* uk-child-width-1-2 uk-child-width-1-3@m */}
              <div className="uk-grid-width-large-1-3 uk-grid-width-medium-1-2 uk-grid-width-small-1-1" data-uk-grid="{gutter: 10, controls: &#39;#filter&#39;}">
                  {/* {this.state.items.map((item,index) => <PortfolioItem key={index} item={item} ></PortfolioItem>)} */}
                  {this.state.items.map((item,index) => <PortfolioItem key={index} item={item} ></PortfolioItem>)}

              </div>
          </div>
      </section>
  );
  }
}

Portfolio.propTypes = {
  portfolioItems: PropTypes.object.isRequired,
  loadPortfolioItems: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  portfolioItems: state.portfolioItems,

})

export default connect(mapStateToProps,{loadPortfolioItems})(Portfolio);
