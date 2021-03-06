import React from 'react';
import ProductDetails from './ProductDetails';

// Vieww Product item in cart
class ProductItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    };
    // console.log(this.props);
  }

  render () {
    return (
    <div>
    <ul>
      <div className="list-products-block">
                <div className="row">
                  <div className="col-md-3">
                    <div className="list-products-img">
                      <a href="product-detail.html" title="Broccoli"><img src={this.props.product.imageLink?'images/products/'+this.props.product.imageLink:'images/products/product-NA.png'} className="img-responsive" alt="products"/></a>
                    </div>
                    <div className="list-products-icon">
                      <ul>
                        <li><a href="cart.html" title="Add To Cart"><i className="fa fa-shopping-bag"></i></a></li>
                        {/* <li><a href="images/shop/product-14.png" className="product-popup" title="Broccoli"><i className="fa fa-search"></i></a></li> */}
                        <li>
                          {/* <a href={"#mod"+this.props.product.productId} data-uk-modal><i className="fa fa-heart-o"></i></a> */}
                          {/* data-uk-modal={"target:'#"+this.props.product.productId+"'"} */}
                          <button data-uk-modal="{target:'#mod8'}"><i className="fa fa-heart-o" ></i></button>
                        </li>
                        {/* <li><a href="#" title="Compare"><i className="fa fa-random"></i></a></li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="list-products-dtl">
                      <h5 className="list-products-name"><a href="product-detail.html" title="Broccoli">{this.props.product.name}</a></h5>
                      <a href="#" className="products-origin" title="mediacity farm">mediacity farm</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p className="list-products-info"> {this.props.product.description}</p>
                  </div>
                  <div className="col-md-2 text-center">
                    <div className="products-price-box">
                      <div className="price"><span style={{fontSize:'20px'}}>PKR</span> {this.props.product.price}</div>
                      <div className="shop-products-rating">
                        <ul>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star-half-o"></i></li>
                        </ul>
                      </div>
                      <div className="rating-text">80 ratings</div>
                    </div>
                  </div>
                </div>
              </div>
    </ul>
    {/* <ProductDetails modalId={this.props.product.productId} productDetail={this.props.product}></ProductDetails> */}
    <div id={'mod'+this.props.product.productId} className="uk-modal-container" uk-modal="true">
    test
    </div>
    </div>
    );
  }
}

export default ProductItem;
