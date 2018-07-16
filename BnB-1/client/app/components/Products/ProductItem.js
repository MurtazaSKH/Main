import React from 'react';

class ProductItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: ''
    };
  }

  render () {
    return (<div>
      <div className="list-products-block">
                <div className="row">
                  <div className="col-md-3">
                    <div className="list-products-img">
                      <a href="product-detail.html" title="Broccoli"><img src="images/shop/product-14.png" className="img-responsive" alt="products"/></a>
                    </div>
                    <div className="list-products-icon">
                      <ul>
                        <li><a href="cart.html" title="Add To Cart"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="images/shop/product-14.png" className="product-popup" title="Broccoli"><i className="fa fa-search"></i></a></li>
                        <li><a href="wishlist.html" title="Wish List"><i className="fa fa-heart-o"></i></a></li>
                        <li><a href="#" title="Compare"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="list-products-dtl">
                      <h5 className="list-products-name"><a href="product-detail.html" title="Broccoli">Broccoli</a></h5>
                      <a href="#" className="products-origin" title="mediacity farm">mediacity farm</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p className="list-products-info">in <a href="#" title="Organic">Organic</a> / <a href="#" title="Food">Food</a> / <a href="#" title="Vegetable">Vegetable</a> / <a href="#" title="Broccli">Broccli</a><br/>Carbohydrates, Fats, Minerals, Water, Nutrition, Manufacture, Food processor, Recipe, Restaurant</p>
                  </div>
                  <div className="col-md-2 text-center">
                    <div className="products-price-box">
                      <div className="price">$12.00</div>
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
    </div>);
  }
}

export default ProductItem;
