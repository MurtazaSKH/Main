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
      items: [],
      errors: {}
    }
  }

  componentDidMount () {
    window.gapi.load('client',this.initClient);
  }

  initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then( () => {
        load(this.onLoad);
      }
      )
  }

  onLoad = (data,errors) => {
    if(data) {
      const items = data.items;
      this.setState({items});
    } else {
      this.setState({errors});
    }
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="grid">
            <PortfolioItem/>
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
