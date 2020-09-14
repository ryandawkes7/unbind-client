import React from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './homescreen.css';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		// Alter the navigation depending on whether the user has logged in or not.
		const isAuthenticated = window.localStorage.getItem('isAuthenticated');

		this.state = {
			isLoggedIn: isAuthenticated
		};
	}

	state = {
		username: ''
	}

	/* To populate 'state.username', use the 'componentDidMount' lifecycle method */
	componentDidMount() {
		/* This api call gets the users details once they have logged in */
		axios({
			url: "/authentication/userdetails",
			method: "POST"
		})
			.then(response => {
				console.log(response);
				this.setState({ username: response.data.username })
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="main">
				{/* If user is logged in display */ }
				{ this.state.isLoggedIn &&
				<div>
					<Carousel autoPlay>
						<div className="carousel-component">
							<h1 className="carousel-title">Graphic Design</h1>
							<Link to='/personal/services' className="carousel-button">View More Like This</Link>
							<img src={ require("../../../Images/crates.png") } alt=""/>
						</div>
						<div className="carousel-component">
							<h1 className="carousel-title">Software Developer</h1>
							<button className="carousel-button">View More Like This</button>
							<img src={ require("../../../Images/computer.png") } alt=""/>
						</div>
					</Carousel>

					<div className="most-recent-section">
						<h2 className="most-recent-title">MOST RECENT</h2>

						{/* Container 1 */ }
						<div className="recent-containers">
							<div className="recent-container">
								<img className="recent-image" src={ require("../../../Images/cleaning.png") } alt=""/>
								<div className="recent-text-container">
									<h4 className="recent-item-title">Mobile Cleaning</h4>
									<p className="recent-info-text">Lorem ipsum dolor sit amet, consetetur sadipscing
										elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
										erat, sed diam voluptua. At vero eos et accusam et</p>
									<div className="divider-container">
										<Divider className="recent-divider"/>
									</div>
									<div className="recent-button">
										<button className="recent-buy-btn">PRICE</button>
									</div>
									<div className="recent-company-title">
										<p className="recent-company-name">Company Name</p>
									</div>
								</div>
							</div>

							{/* Container 2 */ }
							<div className="recent-container">
								<img className="recent-image" src={ require("../../../Images/cleaning.png") } alt=""/>
								<div className="recent-text-container">
									<h4 className="recent-item-title">Mobile Cleaning</h4>
									<p className="recent-info-text">Lorem ipsum dolor sit amet, consetetur sadipscing
										elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
										erat, sed diam voluptua. At vero eos et accusam et</p>
									<div className="divider-container">
										<Divider className="recent-divider"/>
									</div>
									<div className="recent-button">
										<button className="recent-buy-btn">PRICE</button>
									</div>
									<div className="recent-company-title">
										<p className="recent-company-name">Company Name</p>
									</div>
								</div>
							</div>

							{/* Container 3 */ }
							<div className="recent-container">
								<img className="recent-image" src={ require("../../../Images/cleaning.png")} alt=""/>
								<div className="recent-text-container">
									<h4 className="recent-item-title">Mobile Cleaning</h4>
									<p className="recent-info-text">Lorem ipsum dolor sit amet, consetetur sadipscing
										elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
										erat, sed diam voluptua. At vero eos et accusam et</p>
									<div className="divider-container">
										<Divider className="recent-divider"/>
									</div>
									<div className="recent-button">
										<button className="recent-buy-btn">PRICE</button>
									</div>
									<div className="recent-company-title">
										<p className="recent-company-name">Company Name</p>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>


		}

		{/* If user is not logged in display */}
		{!this.state.isLoggedIn &&
		<div>
			<div className="intro">
				<div className="intro-back">
					<img src={require('../../../Images/intro-banner.png')} alt=""/>
				</div>
				<div className="intro-backdrop">
					<div className="intro-title">
						<h1>UNBIND</h1>
						<div className="intro-divider" />
						<h2>Explore Services That Will Take Your Company To The Skies</h2>
					</div>
					<section id="intro-about-section">
						<div className="intro-info-pnls">
							<div className="intro-info-panel">
								<div className="intro-panel-hdr">
									<img src={require("../../../Images/price-tag.png")} alt=""/>
									<p>Explore A Variety of Services</p>
								</div>
								<div className="intro-box">
									<p>
									Insert description about stuff here...
									</p>
								</div>
							</div>
							<div className="intro-info-panel">
								<div className="intro-panel-hdr">
									<img src={require("../../../Images/price-tag.png")} alt=""/>
									<p>Explore A Variety of Services</p>
								</div>
								<div className="intro-box">
									<p>
										Insert description about stuff here...
									</p>
								</div>
							</div>
							<div className="intro-info-panel">
								<div className="intro-panel-hdr">
									<img src={require("../../../Images/price-tag.png")} alt=""/>
									<p>Explore A Variety of Services</p>
								</div>
								<div className="intro-box">
									<p>
										Insert description about stuff here...
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		}
	</div>

	)
	}

	// const productList = useSelector(state => state.productList);
	// const { products, loading, error} = productList;
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	fetch("http://localhost:4000/api/test")
	// 		.then(res => console.log(res.text()))
	// 	dispatch(listProducts());
	// 	return() => {
	// 		//
	// 	};
	// }, [])

// 	return loading ? <div>Loading...</div> :
// 		error? <div>{error}</div> :
// 			<ul className="products-end"> {
// 				products.map(product =>
// 					<li key={product._id}>
// 						<div className="product">
// 							<Link to={'/products/' + product._id}>
// 								<img className="product-image" src={product.image} alt="product" />
// 							</Link>
// 							<div className="product-name">
// 								<Link to={'/products/' + product._id}>{product.name}</Link>
// 							</div>
// 							<div className="product-brand">{product.brand}</div>
// 							<div className="product-price">{product.price}</div>
// 							<div className="product-rating">{product.rating} Stars ({product.numReviews})</div>

// 						</div>
// 					</li>
// 				)
// 			}
// 			</ul>
}

export default HomeScreen;
