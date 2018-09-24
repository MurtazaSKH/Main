import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addCartItem,removeCartItem} from '../../actions/cartActions';

import HeaderCartItem from './headerCartItems';

// Cart that is displayed when user hovers cart icon in header bar
class HeaderCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      errors: {}
    }
    this.onClickAdd=this.onClickAdd.bind(this);
    this.onClickRemove=this.onClickRemove.bind(this);
  };

  // Updating cart item, by adding one more
  onClickAdd(product_id) {
    const productData = {
      user_id:this.props.cart.cart.user,
      product_id:product_id
    };
    this.props.addCartItem(productData);
  }
  // Updating cart item, by removing one
  onClickRemove(product_id) {
    const productData = {
      user_id:this.props.cart.cart.user,
      product_id:product_id
    };
    this.props.removeCartItem(productData);
  }
  // On component mount check if there's a cart or render empty
  render() {
    if(this.props.cart.cart.totalQuantity>0) {
      return(
        <div>
          <ul className="cart-box cart-box-pages active">
              {/*  */}
              {this.props.cart.cart.items.map((item,index) => <HeaderCartItem key={index} itemDetails={item} addItem={this.onClickAdd} removeItem={this.onClickRemove}></HeaderCartItem>)}
              <li className="cart-subtotal text-right">Total: ${this.props.cart.cart.totalPrice}</li>
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
  }
}

HeaderCart.propTypes = {
  cart: PropTypes.object.isRequired,
  addCartItem: PropTypes.func.isRequired,
  // removeCartItem: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  errors: state.errors
})

export default connect(mapStateToProps,{addCartItem,removeCartItem})(HeaderCart);
