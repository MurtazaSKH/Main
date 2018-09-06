import React from 'react';



class PortfolioItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titleCss: [],
      boxTextCss: [],
      boxPositionCss:[]
    }
  }

  renderSwitch(type) {
    switch(type) {
      case 'Des':
        return 'Design';
      case 'Dev':
        return 'Development';
      case 'Des,Dev':
        return 'Design & Development';
      case 'QA':
        return 'Quality Assurance';
      default:
        return '';
    }
  }

  render () {
    return (
    <div data-uk-filter={this.props.item.type} data-grid-prepared="true" aria-hidden="false" style={{position: 'absolute', boxSizing: 'borderBox', paddingLeft: '10px', paddingBottom: '10px', top: '0px', opacity: '1', left: '0px', display: 'block',minHeight:'252px'}}>

        <div className="pfolio-item">

          <div >
            <img src={this.props.item.imageLink?this.props.item.imageLink:"img/filler.jpg"} style={{minHeight:'252px'}} alt="Portfolio"/>
            <div className="caption">
                <h3>
                    <a>{this.props.item.name}</a>
                </h3>
                <p>{this.renderSwitch(this.props.item.type)}</p>
            </div>
            <div className="link-wrap">
              {/*  href="img/2.jpg"*/}
                <a href={'#mod'+this.props.item.id} data-uk-modal>
                    <i className="li li-arrows-expand"></i>
                </a>

            </div>
          </div>

        </div>
        {/* Modal */}
        <div id={'mod'+this.props.item.id} className="uk-modal">
            <div className="uk-modal-dialog .uk-padding-remove" style={{padding:0,width:'800px'}}>

                <div className="uk-cover-background">
                  <a className="uk-modal-close uk-close" style={{float:'right',position:'absolute'}}>
                    <i className="li li-arrows-remove"></i>
                  </a>
                  <img src={this.props.item.imageLink?this.props.item.imageLink:"img/filler.jpg"} alt="Portfolio Image" />
                </div>
                <div style={{padding:'30px'}}>

                    <h2 style={{color:'black',fontFamily: 'TitleFont'}}> {this.props.item.name}</h2>
                    <h3 style={{borderBottom:'1px solid #00000030',paddingBottom:'10px',fontFamily:'TitleFont'}}>{this.renderSwitch(this.props.item.type)}</h3>
                    <h3 style={{fontFamily:'TitleFont'}}>Tech Used: {this.props.item.tech}</h3>
                    <h3 style={{fontFamily:'TitleFont',paddingBottom:'35px'}}> {this.props.item.description}</h3>

                    {/* .tc-contact .form-button button */}
                    <a href={this.props.item.link} target="_blank"  style={{marginTop:'10px',padding: '10px 40px',
    backgroundColor: 'var(--main-bg-color)', fontFamily:'TitleFont'}} >Visit</a>

                </div>

            </div>
        </div>
    </div>
  );
  }
}

export default PortfolioItem;
