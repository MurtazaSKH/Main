import React from 'react';

class HeaderCartItem extends React.Component {
  constructor() {
    super();
  };
  render () {
    return (
      <li className="cart-content">
        <div className="cart-img">
          <a href="product-detail.html" title="Lemon"><img src="images/featured-product-04.png" alt="Product"/></a>
        </div>
        <div className="cart-dtl">
          <h6 className="cart-title"><a href="product-detail.html" title="Lemon">{this.props.itemDetails.name}</a></h6>
          <div className="cart-meta">
            <div className="cart-price">Price: Rs {this.props.itemDetails.price}</div>
            <div className="cart-qty">Qty: {this.props.itemDetails.quantity}</div>
          </div>
          <div className="cart-remove">
            <a href="#" title="Remove From Cart" onClick={() => {
              this.props.removeItem(this.props.itemDetails.product_id);
            }}><i className="fa fa-close"></i></a>
          </div>
          <div className="cart-add">
            <a href="#" title="Remove From Cart" onClick={() => {
              this.props.addItem(this.props.itemDetails.product_id);
            }} ><i className="fa fa-plus"></i></a>
          </div>
        </div>
      </li>
    );
  }
}

export default HeaderCartItem;
