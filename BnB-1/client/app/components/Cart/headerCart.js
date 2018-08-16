import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import HeaderCartItem from './headerCartItems';


class HeaderCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      errors: {}
    }
  }

  render() {

    if(this.props.cart.cart[0]) {
      return(
        <div>
          <ul className="cart-box cart-box-pages active">
              {/*  */}
              {this.props.cart.cart[0].items.map((item,index) => <HeaderCartItem key={index} itemDetails={item}></HeaderCartItem>)}
              <li className="cart-subtotal text-right">Total: ${this.props.cart.cart[0].totalPrice}</li>
              <li className="cart-footer">
                <div className="row">
                  <div className="col-xs-6">
                    <Link to="/" className="btn btn-default">View Cart</Link>
                  </div>
                  <div className="col-xs-6">
                    <Link to='/' className="btn btn-default">Checkout</Link>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      );
    }
    else {
      // console.log(this.props.cart.cart[0]);
      return(
        <div>
          <ul className="cart-box cart-box-pages active">
              <li className="cart-content">
                Your cart is empty.
              </li>
              <li className="cart-subtotal text-right">Total: $0</li>
              <li className="cart-footer">
                <div className="row">
                  <div className="col-xs-12">
                    {/* <a href="cart.html" className="btn btn-default" title="View Cart">View Cart</a> */}
                    <Link style={{width:'100%'}} to="/" className="btn btn-default">View Cart</Link>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      );
    }

    return(<div>test</div>);
  }
}

HeaderCart.propTypes = {
  cart: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  errors: state.errors
})

export default connect(mapStateToProps,{})(HeaderCart);
