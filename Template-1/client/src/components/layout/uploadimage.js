import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {uploadImageFile} from '../../actions/formAction';


class UploadImage extends React.Component {
  constructor() {
    super();
    this.state = {
      imageFile: '',
      imagePreviewURL:'',
      errors: {}
    }

    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e) {
    // this.setState({[e.target.name]:e.target.value});
    this.setState({imageFile:e.target.files[0]});
    // console.log(e.target.files[0]);
    let reader = new FileReader();
    let file=e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imageFile:file,
        imagePreviewURL:reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  onSubmit(e) {
    e.preventDefault();

    // let imageData = new FormData();
    // var formelement = document.getElementById('testForm');
    let imageData = new FormData(document.getElementById('testForm'));
    // imageData = {
    //   imageFile: this.state.imageFile
    // }
    // console.log(this.state.file);
    // imageData.append('imageFile',this.state.file);
    imageData.append('test',"value");
    // console.log(imageData);
    for (var key of imageData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    this.props.uploadImageFile(imageData);
  }

  render() {
    const {imageFile,imagePreviewURL} = this.state;
    let $imagePreview=null;
    if(imagePreviewURL) {
      $imagePreview = (<div><img src={imagePreviewURL}></img></div>);
    }
    return (
      <div>
        <form id="testForm" onSubmit={this.onSubmit}>
          {/* onClick={this.onSubmit} */}
          <input type="file" name="imageFile" onChange={this.onChange}/>
          {$imagePreview}
          <button type="Submit">Upload</button>
        </form>
      </div>
    );
  }
}

// UploadImage.propTypes= {
//   uploadImageFile: PropTypes.func.isRequired
// }

export default connect(null,{uploadImageFile})(UploadImage);
