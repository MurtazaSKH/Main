import React, {Component} from 'react';
import 'whatwg-fetch';
import {setInStorage,getFromStorage} from '../../utils/storage';
// const axios = require ('axios');

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
      addProductError: '',
      pictures: [],
      selectedFile: '',
      imagePreviewURL: ''
    };
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onTextProductName= this.onTextProductName.bind(this);
    this.onTextProductDesc= this.onTextProductDesc.bind(this);
    this.onTextProductPrice = this.onTextProductPrice.bind(this);
    this.onTextProductQuantity = this.onTextProductQuantity.bind(this);
    this.fileChangedHandler=this.fileChangedHandler.bind(this);
    this.uploadHandler=this.uploadHandler.bind(this);
  }

  fileChangedHandler (event) {
    // const file = event.target.file[0];
    this.setState({selectedFile: event.target.files[0]});
    console.log(event.target.files[0]);
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState ({
        selectedFile: file,
        imagePreviewURL: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  uploadImage (imageFile) {

  }
  uploadHandler () {
    // console.log(this.state.selectedFile);
    // axios.post('/file-upload', this.state.selectedFile,{
    // onUploadProgress: progressEvent => {
    //   console.log(progressEvent.loaded / progressEvent.total)
    // }})
    // uploadImage(this.state.selectedFile);
    return new Promise((resolve,reject)=> {
      let imageFormData = new FormData();
      imageFormData.append('imageFile',this.state.selectedFile);
      var xhr = new XMLHttpRequest();
      // ../../../../../BnB-1/server/routes/saveImage.js
      var url = 'E:\Main\BnB-1\client\app\components\Products\saveImage.js'
      xhr.open('post','\saveImage.js',true);
      console.log('Response:'+this.response)
      xhr.onload = function() {
        console.log('Status:'+this.status)
        if(this.status ==200) {
          resolve(this.response);
        } else {
          reject (this.statusText);
        }
      };

      xhr.send(imageFormData);
    });
  }

  onAddProduct (event) {
    event.preventDefault();
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
      isLoading, token, productName, productDesc, productPrice, productQuantity, addProductError, selectedFile, imagePreviewURL
    } = this.state;
    let $imagePreview = null;
    if(imagePreviewURL) {
      $imagePreview = (<div><img style={{maxWidth:'100%', padding:'15px 0'}} src={imagePreviewURL} /><button onClick={this.uploadHandler}>Upload</button></div>);
    }

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
              <input type="text" className="form-control" value={productQuantity}
            onChange={this.onTextProductQuantity} placeholder="Enter Product Quantity"/>
            </div>
            <div className="form-group">
              <label htmlFor="files" className="btn btn-default" style={{backgroundColor:'#d0ef8b'}}>Select Image</label>
              <input id="files" type="file" style={{display:'none'}} onChange={this.fileChangedHandler} text="asd"/>
              {$imagePreview}

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
