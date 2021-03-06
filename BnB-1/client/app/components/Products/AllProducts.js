import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {viewAllProducts} from '../../actions/productActions';
import ProductItem from './ProductItem';
import Pagination from 'jw-react-pagination';

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    // var exampleItems = [...Array(20).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
    this.state = {
      products: [],
      pageOfItems: [],
      numberOfRows: 10
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.onRowsIncrement = this.onRowsIncrement.bind(this);
    this.onRowsDecrement = this.onRowsDecrement.bind(this);
  }

  handlePageChange (pageOfItems) {
    // console.log('Active page is:'+ pageOfItems);
    this.setState({pageOfItems});
  }

  onRowsIncrement(){
    if(this.state.numberOfRows<21){
      this.setState({
        numberOfRows: this.state.numberOfRows+1
      });
    }
  }
  onRowsDecrement(){
    if(this.state.numberOfRows>1){
      this.setState({
        numberOfRows: this.state.numberOfRows-1
      });
    }
  }
  componentDidMount() {
    this.props.viewAllProducts(); 
  }

  render() {
    return (<div>
      <section id="shop-list-right" className="shop-page shop-list-page shop-right-list shop-main-block">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="shop-page-products-main-block">
                <div className="shop-nav">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="sort-btn">
                        <div className="sort-dropdown dropdown">
                          <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Search: <span className="drp-name" data-bind="label"><input type="text" style={{backgroundColor:'#ebe7de', border:'none'}} /></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 pad-rt-0">
                      <div className="product-display">
                        <div className="select-filter number">
                          <span className="drp-name" data-bind="label">Show:</span>
                          <input type="text" value={this.state.numberOfRows} name="qtybutton" className="cart-plus-minus-box" readOnly/>
                          <div className="inc qtybutton" onClick={this.onRowsIncrement}> <i className="fa fa-sort-asc"></i></div>
                          <div className="dec qtybutton" onClick={this.onRowsDecrement}><i className="fa fa-sort-desc"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5 pad-lt-0">
                      <div className="row">
                        <div className="col-xs-2 pad-rt-0">
                          <div className="grid-icon">
                            <a href="#" className="btn" title="grid icon"><i className="fa fa-th"></i></a>
                          </div>
                        </div>
                        <div className="col-xs-8 pad-rt-0">
                          <div className="sort-btn">
                            <div className="sort-dropdown dropdown">
                              <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Grid: <span className="drp-name" data-bind="label">3 &amp; Sidebar</span>
                                <span><i className="fa fa-sort-desc"></i></span>
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><a href="#" title="dropdown">4 &amp; Sidebar</a></li>
                                <li><a href="#" title="dropdown">5 &amp; Sidebar</a></li>
                                <li><a href="#" title="dropdown">6 &amp; Sidebar</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-2 pad-lt-0">
                          <div className="grid-icon">
                            <a href="#" className="btn active" title="grid icon"><i className="fa fa-th-list"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="products" className="list-products-main-block">
                  {this.state.pageOfItems.map((product,index) => <ProductItem key={index} product={product} ></ProductItem>)}
                  <Pagination
                    items={this.props.productsFromStore.allProducts} onChangePage={this.handlePageChange} className="pagination-block"
                    pageSize={this.state.numberOfRows}
                    onChange={this.handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);


  }

}

AllProducts.propTypes = {
  productsFromStore: PropTypes.object.isRequired,
  viewAllProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  productsFromStore: state.allProducts
})

export default connect(mapStateToProps,{viewAllProducts})(AllProducts);
