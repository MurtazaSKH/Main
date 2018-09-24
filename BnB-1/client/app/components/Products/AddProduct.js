import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {uploadImage,addProduct} from '../../actions/productActions';
import classnames from 'classnames';

class AddProduct extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      // isLoading: false,
      name: '',
      desc: '',
      price: '',
      quantity: '',
      imageFile:'',
      imagePreviewURL:'',
      imageUploaded:'None',
      showError:'None',
      errors:{}
    };

    this.onChange = this.onChange.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onSaveImage = this.onSaveImage.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  // Chaning input fields set state
  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  // When user selects image preview is displayed but not saved to server
  onImageChange(e) {
    this.setState({imageFile:e.target.files[0],imageUploaded:'false'});

    let reader = new FileReader();
    let file=e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        imageFile:file,
        imagePreviewURL: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  // When user uploads image to server
  onSaveImage(e) {
    e.preventDefault();
    let imageFile = new FormData(document.getElementById('imageForm'));
    this.props.uploadImage(imageFile);
    this.setState({imageUploaded:'True',showError:'None'});
  }

  // Checking when image is added
  onAddProduct(e) {
    if(this.state.imageUploaded==='false') {
      this.setState({showError:'Inline'})
      // If user says continue without image change state to 'None'
    }
    const productData = {
      name: this.state.name,
      description: this.state.desc,
      price: this.state.price,
      // category: this.state.category,
      quantity: this.state.quantity,
      imageLink: this.props.product.filename
    };

    this.props.addProduct(productData);
  }

  render () {
    let $imagePreview = null;
    if(this.state.imagePreviewURL) {
      $imagePreview = (<div><img style={{maxWidth:'100%', padding:'15px 0'}} src={this.state.imagePreviewURL} /><button type="Submit" className="btn btn-default">Upload</button></div>);
      // Change upload to "Change" when image is uploaded
      // Loading animation when uploading
    }

    const {errors} = this.props;
    // console.log(errors);
    return (<div><section className="account-page login-page register-page">
      <div className="container">
        <h3 className="register-page-heading text-center">Add New Product</h3>
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="register-form">
            <h5 className="register-heading text-center">Please Fill the Form </h5>
            <div className="form-group">
              <input type="text" className={classnames('form-control',{'error-input-border':errors.name})}  placeholder="Enter Product Name" name="name" value={this.state.name} onChange={this.onChange} />
              {errors.name && (<label className="error-feedback">{errors.name}</label>)}
            </div>
            <div className="form-group">
              <input type="text" className={classnames('form-control',{'error-input-border':errors.description})}  placeholder="Enter Product Description" name="desc" value={this.state.desc} onChange={this.onChange} />
              {errors.description && (<label className="error-feedback">{errors.description}</label>)}
            </div>
            <div className="form-group">
              <input type="text" className={classnames('form-control',{'error-input-border':errors.price})} name="price" placeholder="Enter Product Price" value={this.state.price} onChange={this.onChange} />
              {errors.price && (<label className="error-feedback">{errors.price}</label>)}
            </div>
            <div className="form-group">
              <input type="text" className={classnames("form-control",{'error-input-border':errors.quantity})} name="quantity" value={this.state.quantity}
            onChange={this.onChange} placeholder="Enter Product Quantity"/>
              {errors.quantity && (<label className="error-feedback">{errors.quantity}</label>)}
            </div>
            <div className="form-group">
              <form id="imageForm" onSubmit={this.onSaveImage}>
                {/* onClick={this.onSubmit} */}
                <label htmlFor="imageFile" className="btn btn-default" style={{backgroundColor:'#d0ef8b'}}>Select Image</label>
                <input id="imageFile" type="file" style={{display:'none'}} name="imageFile" onChange={this.onImageChange}/>
                {$imagePreview}

              </form>
            </div>
            <label className="error-feedback" name="uploadImageError" style={{display:this.state.showError}}>Please Upload Image before proceeding or it will not be saved.</label>
            <button onClick={this.onAddProduct} className="btn btn-default">Add Product</button>
          </div>
        </div>
      </div>
    </section></div>);
  }
}

AddProduct.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product,
  errors: state.errors
})

export default connect(mapStateToProps,{uploadImage,addProduct})(AddProduct);
