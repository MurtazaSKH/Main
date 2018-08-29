import React from 'react';

const About = () => {
  return(
    <section className="tc-about tc-service-style1 sec-spacer" id="tc-about">
        <div className="uk-container-center uk-container">
            <div className="uk-grid uk-grid-small" data-uk-grid-margin="">
                <div className="uk-width-medium-3-3 uk-row-first">
                    <div className="services-heading">
                        <h3>ABOUT ME</h3>
                        {/* <h1>WHAT I DO</h1> */}
                        <p>
                            I’m a full stack web developer and a keen coder. I have professional experience with designing and developing web applications, seeing them through from Scratch to Production. While also planning and testing till the required standards are met.
                        </p>
                    </div>
                </div>
                {/* <div className="uk-width-medium-1-3">
                    <div className="services-item uk-animation-hover">
                        <i className="uk-animation-scale li li-tablet"></i>
                        <h3>UX DESIGN</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sequi at nemo quibusdam eligendi
                            dolor</p>
                    </div>
                </div>
                <div className="uk-width-medium-1-3">
                    <div className="services-item uk-animation-hover">
                        <i className="uk-animation-scale li li-photo"></i>
                        <h3>PHOTOGRAPHY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sequi at nemo quibusdam eligendi
                            dolor</p>
                    </div>
                </div> */}
            </div>

            <div className="uk-grid uk-grid-small" data-uk-grid-margin="">
                <div className="uk-width-medium-1-3 uk-row-first">
                    <div className="services-item uk-animation-hover">
                        <i className="uk-animation-scale li li-webpage-multiple"></i>
                        <h3>Web Design</h3>
                        <p>Designing Websites: Using HTML/CSS/Jquery</p>
                    </div>
                </div>
                <div className="uk-width-medium-1-3">
                    <div className="services-item uk-animation-hover">
                        <i className="uk-animation-scale li li-computer-imac-slim"></i>
                        <h3>Front & Back-End Dev</h3>
                        <p>Full stack development with various technologies, more recently React and Node Js</p>
                    </div>
                </div>
                <div className="uk-width-medium-1-3">
                    <div className="services-item uk-animation-hover">
                        <i className="uk-animation-scale li li-lifesaver"></i>
                        <h3>QA</h3>
                        <p>Creating and Implementing Testplans</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
