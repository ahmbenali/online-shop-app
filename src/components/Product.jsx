import { useState } from 'react';
import { Link } from 'react-router-dom';
import useProductCounter from '../useProductCounter';

export default function Product({ details }) {
	const { id, name, description, image } = details;

	const { counter, increment, decrement } = useProductCounter();

	return (
		<Link to={`products/${id}`}>
			<div className='product'>
				<img src={image} width='50' alt={name} />
				<div className='product-info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
				<div className='product-buttons'>
					<button
						disabled={counter === 0}
						onClick={decrement}
						className='product-sub'
					>
						-
					</button>
					<button className='product-count'>
						<h3 className='product-count'>{counter}</h3>
						{/* {counter ? counter : ''} */}
					</button>
					<button onClick={increment} className='product-add'>
						+
					</button>
				</div>
			</div>
		</Link>
	);
}
