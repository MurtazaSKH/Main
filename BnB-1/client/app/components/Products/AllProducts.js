import React, {Component} from 'react';
import ProductItem from './ProductItem';
// import 'whatwg-fetch';
// import {setInStorage,getFromStorage} from '../../utils/storage';

class AllProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // this.setState({isLoading: false});
    console.log('componentMounted');

    fetch('/api/products/viewAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'applicaiton/json',
        'Accept': 'application/json',
        'X-API-Key': '8e6d52b0'
      }
    })
    .then(res=>res.json())
    .then(json =>{
      console.log('json',json);
      if(json.success){
        console.log(json.message);
      }
    });
  }

  render() {
    // return (<div>
    //   <section id="shop-list-right" className="shop-page shop-list-page shop-right-list shop-main-block">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-12 col-sm-12">
    //           <div className="shop-page-products-main-block">
    //             <div className="shop-nav">
    //               <div className="row">
    //                 <div className="col-md-4 col-sm-6">
    //                   <div className="sort-btn">
    //                     <div className="sort-dropdown dropdown">
    //                       <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //                         Sort By: <span className="drp-name" data-bind="label">Default</span>
    //                         <span><i className="fa fa-sort-desc"></i></span>
    //                       </button>
    //                       <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
    //                         <li><a href="#">Discount</a></li>
    //                         <li><a href="#">Price Low</a></li>
    //                         <li><a href="#">Price High</a></li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-2 col-sm-4 col-xs-6 pad-rt-0">
    //                   <div className="product-display">
    //                     <form id="select-filter" action="#">
    //                       <div className="select-filter number">
    //                         <span className="drp-name" data-bind="label">Show:</span>
    //                         <input type="text" value="9" name="qtybutton" className="cart-plus-minus-box"/>
    //                         <div className="inc qtybutton"> <i className="fa fa-sort-asc"></i></div>
    //                         <div className="dec qtybutton"><i className="fa fa-sort-desc"></i></div>
    //                       </div>
    //                     </form>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-offset-1 col-md-5 pad-lt-0">
    //                   <div className="row">
    //                     <div className="col-xs-2 pad-rt-0">
    //                       <div className="grid-icon">
    //                         <a href="#" className="btn" title="grid icon"><i className="fa fa-th"></i></a>
    //                       </div>
    //                     </div>
    //                     <div className="col-xs-8 pad-rt-0">
    //                       <div className="sort-btn">
    //                         <div className="sort-dropdown dropdown">
    //                           <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //                             Grid: <span className="drp-name" data-bind="label">3 &amp; Sidebar</span>
    //                             <span><i className="fa fa-sort-desc"></i></span>
    //                           </button>
    //                           <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    //                             <li><a href="#" title="dropdown">4 &amp; Sidebar</a></li>
    //                             <li><a href="#" title="dropdown">5 &amp; Sidebar</a></li>
    //                             <li><a href="#" title="dropdown">6 &amp; Sidebar</a></li>
    //                           </ul>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="col-xs-2 pad-lt-0">
    //                       <div className="grid-icon">
    //                         <a href="#" className="btn active" title="grid icon"><i className="fa fa-th-list"></i></a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div id="products" className="list-products-main-block">
    //               {/* Insert Product items here */}
    //             <ProductItem/>
    //             </div>
    //             <div className="pagination-block">
    //               <div className="row">
    //                 <div className="col-xs-2">
    //                   <div className="prev">
    //                     <a href="#" className="btn btn-default" title="Previous"><i className="fa fa-long-arrow-left"></i></a>
    //                   </div>
    //                 </div>
    //                 <div className="col-xs-8 text-center">
    //                   <ul className="pagination">
    //                     <li><a href="#" title="Pagination">1</a></li>
    //                     <li className="active"><a href="#" title="Pagination">2</a></li>
    //                     <li><a href="#" title="Pagination">3</a></li>
    //                     <li><a href="#" title="Pagination">4</a></li>
    //                     <li><a href="#" title="Pagination">5</a></li>
    //                   </ul>
    //                 </div>
    //                 <div className="col-xs-2 text-right">
    //                   <div className="next">
    //                     <a href="#" className="btn btn-default" title="Next"><i className="fa fa-long-arrow-right"></i></a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>);
    return (<div>All Products</div>);
    // let items=this.state.items;
    // return (<div>{items.map(item => <div key={item.name}>{item.name}</div>)}</div>);
  }

}



export default AllProducts;
