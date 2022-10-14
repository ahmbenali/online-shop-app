import { useEffect } from 'react';
import useFetch from '../useFetch';
import Loader from './Loader';
import Product from './Product';

export default function ProductsList(props) {
	// console.log('PROPS: ', props);
	const { products, onDeleteButton, loading } = props;




	return (
		<div>
			{loading && <Loader />}
			<ul className='store-front'>
				{products && products.map(product => (
					<li key={product.id}>
						<Product details={product} />
						<button
							className='btn-outline btn-delete'
							onClick={() => onDeleteButton(product.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
