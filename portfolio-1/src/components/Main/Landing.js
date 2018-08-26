import React from 'react';
import {Link} from 'react-router-dom';

import config from '../../config.js';
import {load} from '../../utils/spreadsheet';
import PortfolioItem from '../Portfolio/PortfolioItem';
import PortfolioItemDetail from '../Portfolio/PortfolioItemDetail';

class Landing extends React.Component {
  constructor(){
    super();
    this.state= {
      items: [{name:'Explottens',link:'link1',description:'desc1'},{name:'FunnyWings',link:'link2',description:'desc2'}],
      error: null
    }
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

  render() {
    return (
      <div>
        <div className="content">
          <div className="grid">
            {this.state.items.map((item,index) => <PortfolioItem key={index} item={item} ></PortfolioItem>)}
          </div>
        </div>
        <div className="overlay">
  				<div className="overlay__reveal"></div>
  				<PortfolioItemDetail/>
        </div>

      </div>
    );
  }
}

export default Landing;
