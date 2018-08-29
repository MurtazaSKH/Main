import React from 'react';
// import {Link} from 'react-router-dom';


import Portfolio from '../Portfolio/Portfolio';
// import Testimonial from '../Common/Testimonial';
import About from '../Common/About';
import Contact from '../Common/Contact';

class Landing extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        {/* Landing Section */}
        <div className="tc-slider" id="tc-slider" style={{maxWidth:'100%'}}>
            <div className="content uk-slidenav-position largeScreen">
                <div className="glitch">
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                </div>
                <div className="">
                  {/* <h2 className="content__title"></h2> */}
                  <h2 className="content__text">
                      Hi!
                      <br/>I’m Murtaza.
                      <br/>A Full Stack Dev.</h2>
                </div>

                <div className="down-arrow pulse-infinite">
                    <a href="#tc-about" data-uk-smooth-scroll="{offset: 80}">
                        <i className="li li-magic-mouse"></i>
                    </a>
                </div>
            </div>
            <div className="content mediumSmallScreen">
              <h2 className="content__text">
                Hi!
                <br/>I'm Murtaza
                <br/>A Full Stack Dev.
              </h2>
            </div>
        </div>

        {/* Main Starts */}
        <main className="tc-main" id="tc-main">
          <About/>
          <Portfolio/>
          {/* <Testimonial/> */}
          <Contact/>
        </main>

      </div>
      // <div>
      //   <div className="content">
      //     <div className="grid">
      //       {this.state.items.map((item,index) => <PortfolioItem key={index} item={item} ></PortfolioItem>)}
      //     </div>
      //   </div>
      //   <div className="overlay">
  		// 		<div className="overlay__reveal"></div>
  		// 		<PortfolioItemDetail/>
      //   </div>
      //
      // </div>
    );
  }
}

export default Landing;
