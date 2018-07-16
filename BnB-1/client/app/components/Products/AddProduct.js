import React, {Component} from 'react';
import 'whatwg-fetch';
import {setInStorage,getFromStorage} from '../../utils/storage';

class AddProduct extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: false,
      token: '',
      productName: '',
      productDesc: '',
      productPrice: '',
      productQuantity: '',
      addProductError: ''
    };
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onTextProductName= this.onTextProductName.bind(this);
    this.onTextProductDesc= this.onTextProductDesc.bind(this);
    this.onTextProductPrice = this.onTextProductPrice.bind(this);
    this.onTextProductQuantity = this.onTextProductQuantity.bind(this);
  }

  onAddProduct () {
    const {isLoading, productName, productDesc, productPrice, productQuantity, addProductError} = this.state;

    this.setState ({isLoading: true});
    console.log('Adding Product');
    fetch('/api/products/add', {
      method : 'POST',
      headers :
      {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify ({
        name: productName,
        description: productDesc,
        price: productPrice,
        quantity: productQuantity
      })
    })
    .then(res => res.json())
    .then(json => {
      if(json.success) {
        this.setState ({addProductError:json.message, isLoading: false, productName: '', productDesc:'', productPrice:'',productQuantity:''})
      } else {
        this.setState ({addProductError:json.message,isLoading: false});
      }
    });
  }

  onTextProductName (event) {
    this.setState ({productName: event.target.value});
  }

  onTextProductDesc (event) {
    this.setState ({productDesc: event.target.value});
  }
  onTextProductPrice (event) {
    this.setState ({productPrice: event.target.value});
  }
  onTextProductQuantity (event) {
    this.setState ({productQuantity: event.target.value});
  }

  render () {
    const {
      isLoading, token, productName, productDesc, productPrice, productQuantity, addProductError
    } = this.state;

    if(isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    return (<div><section className="account-page login-page register-page">
      <div className="container">
        <h3 className="register-page-heading text-center">Add New Product</h3>
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="register-form" onSubmit={this.onAddProduct}>
            <h5 className="register-heading text-center">Please Fill the Form {
              (addProductError)
                ? (<div> {addProductError}</div>)
                : (null)
            }</h5>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Enter Product Name" value={productName} onChange={this.onTextProductName} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Enter Product Description" value={productDesc} onChange={this.onTextProductDesc} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Enter Product Price" value={productPrice} onChange={this.onTextProductPrice} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" value={productQuantity}
            onChange={this.onTextProductQuantity} placeholder="Enter Product Quantity"/>
            </div>
            <button onClick={this.onAddProduct} className="btn btn-default">Add Product</button>
            {/* <div className="login-text">
              <div className="row">
                <div className="col-xs-6">
                  <a href="forget-password.html" title="Forgot Password?">Forgot Password?</a>
                </div>
                <div className="col-xs-6 text-right">
                  <a href="#" title="Register With Us" onClick={this.changeForm}>Have An Account?</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a href="#" title="Login With Facebook" className="btn social-login fb-login"><i className="fa fa-facebook fa-lg"></i>Login with facebook</a>
              </div>
              <div className="col-md-6">
                <a href="#" title="Login With Google" className="btn social-login google-login"><i className="fa fa-google-plus fa-lg"></i>login with google</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section></div>);
  }


}

export default AddProduct;
