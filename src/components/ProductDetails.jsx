import { useEffect, useState, useContext } from 'react';
import {
	Link,
	Route,
	Switch,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import useFetch from '../useFetch';
import { AppContext } from './AppContext';
import ProductDelivery from './ProductDelivery';

export default function ProductDetails() {
	const params = useParams();
	const match = useRouteMatch();
	const context = useContext(AppContext);
	// console.log('CONTEXT: ',context);
  // console.log('match: ',match);
  

	const [product, setProduct] = useState({});
	const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');

	const { name, description, price, image } = product;
	// console.log('PARAMS: ', params);
	const prodId = params.prodId;

	useEffect(() => {
		get(`productdetails/id${prodId}.json`)
			.then(data => data && setProduct(data))
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			{/* <Link to='/'>Back Home</Link> */}
			{product && (
				<div>
					<h2>{name}</h2>
					<p>{description}</p>
					<h3>
						{price} {context.currency === 'EUR' ? '€' : '$'}
					</h3>
					<img src={image} alt={name} width='100' />
					<p>
						View <Link to={`${match.url}/delivery`}>delivery notes</Link>
					</p>
				</div>
			)}
			<Switch>
				<Route exact path={`${match.path}/delivery`}>
					<ProductDelivery />
				</Route>
			</Switch>
		</>
	);
}
