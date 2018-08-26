import React from 'react';
import config from '../../config.js';
import {load} from '../../utils/spreadsheet';
import PortfolioItem from '../Portfolio/PortfolioItem';
import PortfolioItemDetail from '../Portfolio/PortfolioItemDetail';

class Portfolio extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      items: [{name:'Explottens',link:'link1',description:'desc1',type:'Des'},{name:'FunnyWings',link:'link2',description:'desc2',type:'Des,Dev'},{name:'SA',link:'link2',description:'desc2',type:'QA'}],
      error: null
    }
    // this.state = {
    //   titleCss: [],
    //   boxTextCss: [],
    //   boxPositionCss:[]
    // }
  }

  componentDidMount() {
  // 1. Load the JavaScript client library.
  // window.gapi.load("client", this.initClient);
  }

  initClient = () => {
  // 2. Initialize the JavaScript client library.
  window.gapi.client
    .init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
    // 3. Initialize and make the API request.
    load(this.onLoad);
  });
  };

  onLoad = (data, error) => {
  if (data) {
    const items = data.items;
    this.setState({ items });
  } else {
    this.setState({ error });
  }
};

  render () {
    return (
      <section className="tc-works sec-spacer sec-color" id="tc-work">
          <div className="uk-container uk-container-center">
              <h3 className="uk-text-center uk-margin-bottom-remove">Check Out</h3>
              <h1 className="uk-margin-top-remove uk-text-center mb60">My Recent Work</h1>
              <div className="filter-style1 mb60">
                  <ul id="filter">
                      <li data-uk-filter="" className="uk-active">
                          <a href="">All</a>
                      </li>
                      <li data-uk-filter="Des" className="">
                          <a href="">Design</a>
                      </li>Des
                      <li data-uk-filter="Dev" className="">
                          <a href="">Development</a>
                      </li>
                      <li data-uk-filter="QA" className="">
                          <a href="">QA</a>
                      </li>
                  </ul>
              </div>
              {/* uk-child-width-1-2 uk-child-width-1-3@m */}
              <div className="uk-grid-width-large-1-3 uk-grid-width-medium-1-2 uk-grid-width-small-1-1" data-uk-grid="{gutter: 10, controls: &#39;#filter&#39;}"
                  uk-grid>
                    {/* style={{position: 'relative', marginLeft: -'10px', height: '245.109px'}} */}
                  {/* <PortfolioItem/> */}
                  {this.state.items.map((item,index) => <PortfolioItem key={index} item={item} ></PortfolioItem>)}
                  {/* <div data-uk-filter="filter-a" data-grid-prepared="true" aria-hidden="true">

                      <div className="pfolio-item">
                          <img src="img/2.jpg" alt="Portfolio Image"/>
                          <div className="caption">
                              <h3>
                                  <a href="#">UX Looks Printer</a>
                              </h3>
                              <p>Illustration</p>
                          </div>
                          <div className="link-wrap">
                              <a href="img/2.jpg" data-uk-lightbox="{group:&#39;tc-works&#39;}">
                                  <i className="uk-icon-search"></i>
                              </a>
                              <a href="#">
                                  <i className="uk-icon-link"></i>
                              </a>
                          </div>
                      </div>
                  </div> */}
              </div>
          </div>
      </section>
  );
  }
}

export default Portfolio;
