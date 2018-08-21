import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/userActions';
import HeaderCart from '../Cart/headerCart';

// import HeaderUser from './headerUser';

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      showCart: false,
      timeout:2000
    }
    this.handleCartHover=this.handleCartHover.bind(this);
    this.logout=this.logout.bind(this);
  };

  handleCartHover(e) {
    this.setState({showCart:true});
  }
  logout() {
    this.props.logoutUser();
  }
  render() {
    return (
      <div>
          <section className="nav-bar">
            {/* <div className="top-bar hidden-xs">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 hidden-sm">
                    <p className="top-bar-text"><span>Origano</span> Free shipping on all orders over $20</p>
                  </div>
                  <div className="col-md-7">
                    <ul className="top-bar-nav text-right">
                      <li><a href="#" title="Help Center">Help Center</a></li>
                      <li><a href="#" title="Online Support">Online Support</a></li>
                      <li><a href="#" title="Forum">Forum</a></li>
                      <li><a href="#" title="Articles">Articles</a></li>
                      <li className="track-order"><a href="order-history.html" title="Track Your Order">Track Your Order</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="logo logo-pages">
                    <a href="index.html" title="Logo"><img src="images/logo-footer.png" className="img-responsive" alt="logo"/></a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="navigation">
                    <div id="cssmenu">
                      <ul>
                        <li><a href="#">Home</a>
                          <ul>
                            <li><a href="index.html">Home Style 1</a></li>
                            <li><a href="https://mediacity.co.in/origano/version2/index.html">Home Style 2</a></li>
                            <li><a href="https://mediacity.co.in/origano/version3/index.html">Home Style 3</a></li>
                            <li><a href="https://mediacity.co.in/origano/version4/index.html">Home Style 4</a></li>
                            <li><a href="https://mediacity.co.in/origano/version5/index.html">Home Style 5</a></li>
                            <li><a href="https://mediacity.co.in/origano/version6/index.html">Home Style 6</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Pages</a>
                          <ul>
                            <li><a href="about-us.html">About Us</a></li>
                            <li className="had-sub"><a href="#">Gallery</a>
                              <ul>
                                <li><a href="gallery-grid-3-cols.html">Gallery Grid 3 Columns</a></li>
                                <li><a href="gallery-grid-4-cols.html">Gallery Grid 4 Columns</a></li>
                                <li><a href="gallery-masonry-3-cols.html">Gallery Masonry 3 Columns</a></li>
                                <li><a href="gallery-masonry-4-cols.html">Gallery Masonry 4 Columns</a></li>
                              </ul>
                            </li>
                            <li><a href="deals.html">Deals Page</a></li>
                            <li><a href="403.html">403 Page</a></li>
                            <li><a href="404.html">404 Page</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                            <li><a href="disclaimer.html">Disclaimer</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="terms.html">Terms</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Blog</a>
                          <ul>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-listing.html">Blog Listing</a></li>
                            <li><a href="blog-masonry.html">Blog Masonry</a></li>
                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                            <li><a href="single-blog-with-image.html">Single Blog With Image</a></li>
                            <li><a href="single-blog-with-video.html">Single Blog With Video</a></li>
                            <li><a href="single-blog-with-audio.html">Single Blog With Audio</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Shop</a>
                          <ul>
                            <li className="had-sub"><a href="#">Shop Page</a>
                              <ul>
                                <li><a href="shop-4-cols-style-1.html">Shop 4 Columns Style 1</a></li>
                                <li><a href="shop-4-cols-style-2.html">Shop 4 Columns Style 2</a></li>
                                <li><a href="shop-4-cols-style-3.html">Shop 4 Columns Style 3</a></li>
                              </ul>
                            </li>
                            <li className="had-sub"><a href="#">Shop Left Sidebar</a>
                              <ul>
                                <li><a href="shop-left-sidebar-style-1.html">Shop Left Sidebar Style 1</a></li>
                                <li><a href="shop-left-sidebar-style-2.html">Shop Left Sidebar Style 2</a></li>
                                <li><a href="shop-left-sidebar-style-3.html">Shop Left Sidebar Style 3</a></li>
                              </ul>
                            </li>
                            <li className="had-sub"><a href="#">Shop Right Sidebar</a>
                              <ul>
                                <li><a href="shop-Right-sidebar-style-1.html">Shop Right Sidebar Style 1</a></li>
                                <li><a href="shop-Right-sidebar-style-2.html">Shop Right Sidebar Style 2</a></li>
                                <li><a href="shop-Right-sidebar-style-3.html">Shop Right Sidebar Style 3</a></li>
                              </ul>
                            </li>
                            <li><a href="shop-left-list.html">Shop Left List</a></li>
                            <li><a href="shop-Right-list.html">Shop Right List</a></li>
                            <li><a href="product-detail.html">Product Detail</a></li>
                            <li><a href="product-detail-left.html">Product Detail Left Sidebar</a></li>
                            <li><a href="product-detail-right.html">Product Detail right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="active"><a href="#">Account</a>
                          <ul>
                            <li className="had-sub"><a href="#">My Account</a>
                              <ul>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="wallet.html">Origano Wallet</a></li>
                                <li><a href="order-history.html">Order History</a></li>
                                <li><a href="wishlist.html">Wish List</a></li>
                                <li><a href="returns.html">Returns</a></li>
                                <li><a href="forget-password.html">Forget Password</a></li>
                                <li><a href="address-book.html">Address Book</a></li>
                                <li><a href="add-address.html">Add Address</a></li>
                              </ul>
                            </li>
                            <li className="active"><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="checkout-confirm.html">Checkout Confirm</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Contact</a>
                          <ul>
                            <li><a href="contact.html">Contact Style 1</a></li>
                            <li><a href="contact-style-2.html">Contact Style 2</a></li>
                            <li><a href="contact-style-3.html">Contact Style 3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-info-bar">
                    <ul className="info-list">
                      <HeaderUser user={this.props.user.user.name} logoutUserProp={this.logout}/>
                    </ul>
                  </div>
                </div>
                  <div onMouseEnter={()=>{this.setState({showCart:true});}} onMouseLeave={()=>{this.setState({showCart:false});}}>
                    <div className="col-md-1" >
                      <div className="navbar-cart-icon">
                        <a href="#" title="Cart" className="cart" ><i className="fa fa-shopping-basket" aria-hidden="true"></i></a>

                      </div>
                    </div>
                    {this.state.showCart?<HeaderCart/>:null}
                  </div>
              </div>
            </div>
          </section>
          <section id="page-banner" className="page-banner" style={{backgroundImage: " url('images/bg/page-banner.jpg')"}}>
              <div className="container">
                <div className="banner-dtl">
                  <h3 className="banner-heading">Login</h3>
                  <div className="breadcrumb-block">
                    <ol className="breadcrumb">
                      <li><a href="index.html" title="Home">Home</a></li>
                      <li className="active">Login</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
      </div>
    );
  }
}

// Child component checking user logged in
const HeaderUser = (props) => {
  if(!props.user) {
    return(
      <div>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Sign Up</Link></li>
      </div>
  );
  } else {
    return(
      <div>
        <li><a href="#">{props.user}</a></li>
        <li><Link to='/AddProduct'>Add Product</Link></li>
        <li><a href="#" onClick={props.logoutUserProp}>Logout</a></li>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.userAuth,
  errors: state.errors
});

export default connect(mapStateToProps,{logoutUser})(Header);
