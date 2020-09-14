import React, {Component} from 'react';
import Product from "../../../Components/ProductBox/ProductBox";
import './services.scss';

class CreateServices extends Component {
    render () {
        return (
            <div className="bus-services-container">
                <h1>Create A New Product</h1>
                <div className="new-service"> {/* New Service Section */}
                    <Product className="product-box-create"/> {/* Service Box Template */}
                    <div className="new-service-form"> {/* New Service Form Section */}
                        <form>

                            <div style={{float:'left'}} className="new-grid">
                                <div>
                                    {/* Service Name */}
                                    <label for="service-name">
                                        <div>
                                            <h3 style={{float: 'left'}} className="number-point">1.</h3>
                                            <h3>What Is The Service Called?</h3>
                                        </div>
                                    </label>
                                    <input
                                        id="service-name"
                                        className="prod-input service-name"
                                        placeholder="Enter your service name..."
                                    />
                                    {/* End of Service Name */}
                                </div>

                                <div>
                                    {/* Service Category */}
                                    <label for="service-category">
                                        <div>
                                            <h3 style={{float: 'left'}} className="number-point">2.</h3>
                                            <h3>Choose Your Service Category</h3>
                                        </div>
                                    </label>
                                    <select
                                        id="service-category"
                                        className="prod-input service-category"
                                    >
                                        <option value="" disabled selected>Select a Category</option>
                                        <option>Category 1</option>
                                        <option>Category 2</option>
                                        <option>Category 3</option>
                                        <option>Category 4</option>
                                    </select>
                                    {/* End of Service Category */}
                                </div>

                                <div>
                                    {/* Service Description */}
                                    <label for="service-description">
                                        <div>
                                            <h3 style={{float: 'left'}} className="number-point">3.</h3>
                                            <h3>Describe Your Service</h3>
                                        </div>
                                    </label>
                                    <input
                                        id="service-description"
                                        className="prod-input service-description"
                                        placeholder="Enter your service description..."
                                    />
                                    {/* End of Service Description */}
                                </div>
                            </div>

                            <div style={{float: 'right'}} className="new-grid">
                                <div>
                                    {/* Service Images Upload */}
                                    <label for="service-images">
                                        <div>
                                            <h3 style={{float: 'left'}} className="number-point">4.</h3>
                                            <h3>Upload Service Images</h3>
                                        </div>
                                    </label>
                                    <input
                                        id="service-images"
                                        type="file"
                                        className="prod-input service-images"
                                    />
                                    {/* End of Service Images Upload */}
                                </div>

                                <div>
                                    {/* Additional Service Images Upload */}
                                    <label for="service-add-images">
                                        <div>
                                            <h3 style={{float: 'left'}} className="number-point">5.</h3>
                                            <h3>Upload Additional Images</h3>
                                        </div>
                                    </label>
                                    <input
                                        id="service-add-images"
                                        type="file"
                                        className="prod-input service-add-images"
                                    />
                                    {/* End of Additional Service Images Upload */}
                                </div>

                                <div>
                                    {/* Set Service Price */}
                                    <label for="service-price">
                                        <div>
                                            <h3 style={{float: 'left'}} className="number-point">6.</h3>
                                            <h3>Set Service Price</h3>
                                        </div>
                                    </label>
                                    <input
                                        id="service-price"
                                        className="prod-input service-price-text"
                                        placeholder="Enter a Figure..."
                                    />
                                    Or
                                    <input
                                        type="button"
                                        className="prod-input service-price-btn"
                                        value="Get A Quote"
                                    />
                                    {/* End of Set Service Price */}
                                </div>
                            </div>


                        </form>
                        <div className="service-submit-btn">
                            <button type="submit">Submit</button>
                        </div>
                    </div> {/* End of New Service Form Section */}
                </div> {/* End of New Service Form Section */}
            </div>
        );
    }
}

export default CreateServices;
