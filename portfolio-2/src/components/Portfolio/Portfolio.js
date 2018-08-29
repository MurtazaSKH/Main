import React from 'react';
// import {load} from '../../utils/spreadsheet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loadPortfolioItems} from '../../actions/sheetActions';
import PortfolioItem from '../Portfolio/PortfolioItem';
// import PortfolioItemDetail from '../Portfolio/PortfolioItemDetail';

class Portfolio extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      items: [
        {
          id:1,
          name:'Explottens',
          link:'http://explottens.com/',
          description:'Official Site for Steam Game by we.R.play, Design Concept by internal Artist.',
          type:'Des',
          imageLink:'img/explottens.jpg',
          tech:'HTML/CSS/JS'
        },
        {
          id:2,
          name:'Unity Plugins',
          link:'http://unityplugins.com/',
          description:"Werplay's list of unity plugins",
          type:'Des,Dev',
          imageLink:'img/unityPlugins.jpg',
          tech:'HTML/CSS/JS - Custom PHP, Ajax'
        },
        {
          id:3,
          name:'StudyAce',
          link:'http://studyace.com/',
          description:'As QA Lead developed a test plan and performed testing.',
          type:'QA',
          imageLink:'img/SA.jpg',
          tech:'JMeter, Jira, Trello, Chrome Dev Tools'
        },
        {
          id:4,
          name:'we.R.play',
          link:'http://werplay.com/',
          description:'Official we.R.play website alongwith Portfolio',
          type:'Des',
          imageLink:'img/wRp.jpg',
          tech:'HTML/CSS/JS'
        }
        ],
      error: null
    }
  }

  componentDidMount() {
  this.props.loadPortfolioItems();
  }


  render () {
    if(this.props.portfolioItems.portfolioItems.items) {
      // console.log(this.props.portfolioItems.portfolioItems.items);
      this.state.items = this.props.portfolioItems.portfolioItems.items;
    }
    if(this.props.status.link=='notchecked'){
      return (
        <section className="tc-works sec-spacer sec-color" id="tc-work">
            <div className="uk-container uk-container-center">
              <h1 className="uk-margin-top-remove uk-text-center mb60" style={{color:'#1d2121'}}>Recent Work</h1>
              <div className="uk-icon-spin"  style={{color:'#1d2121', fontSize:'59px',position: 'absolute'
      ,left: '48%'}}>
                <i className="li li-arrows-rotate-dashed"></i>
              </div>

            </div>
        </section>
    );
    }
    else {
      return (
        <section className="tc-works sec-spacer sec-color" id="tc-work">
            <div className="uk-container uk-container-center">
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
                <div className="uk-grid-width-large-1-3 uk-grid-width-medium-1-2 uk-grid-width-small-1-1" data-uk-grid="{gutter: 10, controls: &#39;#filter&#39;}">
                    {this.state.items.map((item,index) => <PortfolioItem key={index} item={item} ></PortfolioItem>)}
                </div>
            </div>
        </section>
    );
    }
  }
}

Portfolio.propTypes = {
  portfolioItems: PropTypes.object.isRequired,
  loadPortfolioItems: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  portfolioItems: state.portfolioItems,
  status:state.status.status
})

export default connect(mapStateToProps,{loadPortfolioItems})(Portfolio);
