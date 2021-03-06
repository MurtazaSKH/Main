import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {saveContactAction} from '../../actions/sheetActions';


class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name:''
    }
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick (e) {
    this.props.saveContactAction();
  }
  render () {
    return (
      <section className="tc-contact sec-spacer" id="tc-contact">
          <div className="uk-container uk-container-center">
              <div className="uk-grid" data-uk-grid-margin="">
                  <div className="uk-width-medium-1-1 uk-row-first">
                      <h1 className="uk-margin-top-remove uk-text-center mb80">Connect With Me!</h1>
                      <div className="spacer2"></div>
                      <div className="uk-grid mb100" data-uk-grid-margin="">
                          <div className="uk-width-medium-1-2">
                              <div className="contact-info uk-animation-hover">
                                  <i className="li li-map-pointer uk-animation-scale"></i>
                                  <p>Islamabad - Pakistan</p>
                              </div>
                          </div>
                          <div className="uk-width-medium-1-2">
                              <div className="contact-info uk-animation-hover">
                                  <i className="li li-envelope uk-animation-scale"></i>
                                  <p><a href="mailto:murtazahashmi@outlook.com">murtazahashmi@outlook.com</a></p>
                                  {/* connect@murtazahashmi.com */}
                              </div>
                          </div>
                      </div>
                      <div id="form-messages"></div>
                      {/* method="post" action="" */}
                      <form className="uk-form contact-form" id="contact-form" >
                          <div className="uk-grid" data-uk-grid-margin="">
                              <div className="uk-width-medium-1-2 uk-row-first">
                                  <div className="form-field">
                                      <input type="text" placeholder="Your Name" name="name" id="name" required=""/>
                                  </div>
                                  <div className="form-field">
                                      <input type="email" name="email" id="email" placeholder="Email Address" required=""/>
                                  </div>
                                  <div className="form-field">
                                      <input type="text" name="message" id="message" placeholder="Subject"/>
                                  </div>
                              </div>
                              <div className="uk-width-medium-1-2">
                                  <div className="form-field">
                                      <textarea placeholder="Your Message Here" rows="9"></textarea>
                                  </div>
                              </div>
                          </div>
                          <div className="form-button mt30">
                              <button className="readon pill" onClick={this.onSubmitClick}>Send</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
  }
}

Contact.protoropTypes = {
  saveContactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  status:state.status.status
})

export default connect(mapStateToProps,{saveContactAction})(Contact);
