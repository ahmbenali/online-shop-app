import { useEffect, useState, useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import useFetch from '../useFetch';
import useProductCounter from '../useFetch';
import AddProductForm from './AddProductForm';
import { AppContext } from './AppContext';
import ProductsList from './ProductsList';

export default function StoreFront() {
	// const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) ?? []);
	const [products, setProducts] = useState([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [validation, setValidation] = useState('');
	// const [isLoading, setIsLoading] = useState(true);
	const { get, post, loading } = useFetch(
		'https://react-tutorial-demo.firebaseio.com/'
	);

	const context = useContext(AppContext);

	useEffect(() => {
		get('products.json').then(data => {
			// console.log('DATA: ', data);
			data && setProducts(data);
		});
	}, []);

	/* 	useEffect(() => {
		fetch('https://react-tutorial-demo.firebaseio.com/products.json')
			.then(res => res.json())
			.then(data => {
				// console.log('DATA: ',data);
				data && setProducts(data)
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}, []) */

	useEffect(() => {
		// localStorage.setItem('products', JSON.stringify(products));
		let len = products.length;
		document.title =
			len === 0 ? 'No products' : len === 1 ? '1 product' : `${len} products`;
	}, [products]);

	// document.title = `Your have ${products.length} products` ??

	function handleFormSubmit(event) {
		event.preventDefault();

		if (!name || !description) {
			setValidation('Please fill out all fields!');
			return; // prevent to  continue with setProducts
			// -> do not allow adding product without name or description
		}

		// fetch('https://api.learnjavascript.online/demo/react/admin/products', {
		// 	method: 'post',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({ name, description }),
		// })
		// 	.then(res => res.json())
		post('products.json', { name, description })
			.then(data => {
				// console.log('DATA: ', data);
				console.log({ message: 'Product added successfully' });
				data &&
					setProducts([
						...products,
						{
							id: products.length + 1,
							name: name,
							description: description,
						},
					]);
				setName('');
				setDescription('');
				setValidation('');
			})
			.catch(err => console.log(err));

		// if (!name) {
		// 	setValidation('Please enter a name');
		// 	return
		// }
		// if (!description) {
		// 	setValidation('Please enter a description');
		// 	return; // do not allow adding product if one of the fields is missing
		// }
	}

	function handleDeleteButton(id) {
		setProducts(products.filter(product => product.id !== id));
	}

	const handleNameChange = ev => setName(ev.target.value);
	const handleDescriptionChange = ev => setDescription(ev.target.value);

	return (
		<>
			<p>
				You're shopping in <strong>{context.currency}</strong>
			</p>
			<ProductsList
				loading={loading}
				products={products}
				onDeleteButton={handleDeleteButton}
			/>
			<div>{products.length === 0 && <p>Add your first product</p>}</div>

			{/* <Link to='/add-product'>Add Product</Link> */}
			{/* <Switch>
				<Route exact path='/add-product'> */}
			<AddProductForm
				onFormSubmit={handleFormSubmit}
				name={name}
				description={description}
				validation={validation}
				products={products}
				onNameChange={handleNameChange}
				onDescriptionChange={handleDescriptionChange}
			/>
			{/* </Route>
			</Switch> */}
		</>
	);
}
