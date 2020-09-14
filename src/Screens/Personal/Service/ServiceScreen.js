import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../../../Actions/productActions";

import './service.css';

function ServiceScreen(props){

	const [qty, setQty] = useState(1);
	const productDetails = useSelector(state => state.productDetails);
	const {product, loading, error} = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsProduct(props.match.params.id));
		return() => {
			//
		};
	}, [])

	return <div>
		<div className="back-to-results">
			<Link to="/">Back to Results</Link>
		</div>

		{loading? <div>Loading...</div>:
			error? <div>{error}</div>:
				(
					<div className="details">
						<div className="details-image">
							<img src={productDetails.image} alt="product"></img>
						</div>
						<div className="details-info">
							<ul>
								<li>
									<h4>{productDetails.name}</h4>
								</li>
								<li>
									{productDetails.rating} Stars ({productDetails.numReviews} Reviews)
								</li>
								<li>
									Price: <b>{productDetails.price}</b>
								</li>
								<li>
									Description:
									<div>
										{productDetails.description}
									</div>
								</li>
							</ul>
						</div>

						<div className="details-action">
							<ul>
								<li>
									Price: {productDetails.price}
								</li>

								<li>
									Status: {productDetails.status}
								</li>

								<li>
									Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
									{[...Array(product.countInStock).keys()].map(x =>
										<option value={x+1}>{x+1}</option>
									)}
								</select>
								</li>

								<li>
									<button className="button">Add to Basket</button>
								</li>
							</ul>
						</div>
					</div>


				)
		}
	</div>

}


export default ServiceScreen;
