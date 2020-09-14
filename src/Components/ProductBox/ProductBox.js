import React, {Component} from 'react';
import './ProductBox.scss';

class ProductBox extends Component {

    render () {
        return (
            <div className="prod-box-container">
                <img
                    src={require('./img/prod-box-img.svg')}
                    alt="" className="prod-box-header"
                    style={{width: '100%'}}
                />  {/* Header Image */}

                <div className="prod-title-container"> {/* Title & Rating Section */}
                    <h3 className="prod-box-title">Service Name</h3>
                    <div className="rating-system">
                        <h4>2.5 out of 5 Stars</h4>
                    </div>
                </div> {/* End of Title & Rating Section */}
                <div className="prod-description-container"> {/* Service Description Section */}
                    <p>Lorem ipsumadsfhjhkgsaligsuiltrewrytuio;lkretrfe`rb;tjw5p49uhgo34ibg2p;hf    wbfyvrpoebg</p>
                </div> {/* End of Service Description Section */}
                <div className="prod-footer-container">
                    <div className="footer-comp company">
                        <img src={require('./img/company-logo.svg')} alt="" />
                        <p>Company Title</p>
                    </div>
                    <div className="footer-comp price">
                        <p>From</p>
                        <button>
                            <h3>£35</h3>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductBox;
