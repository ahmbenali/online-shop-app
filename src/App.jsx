import { useEffect, useContext } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { AppContext } from './components/AppContext';
import Home from './components/Home';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import StoreFront from './components/StoreFront';
import About from './components/About';
import NotFound from './components/NotFound';
import AddProductForm from './components/AddProductForm';

function App() {
	// document.title = 'Shop App';
	// useEffect(() => {
	// 	window.document.title = 'Online Shop';
	// }, []);
	const context = useContext(AppContext);
	return (
		<BrowserRouter>
			<div
				className={context.theme === 'dark' ? 'dark' : 'light'}
				style={{ padding: '0.5rem' }}
			>
				{' '}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Nav />
					<Navbar />
				</div>
				<hr
					style={{
						marginBottom: '2rem',
						// color: 'teal',
						// height: '1px',
						border: 'solid .1px teal',
						// backgroundColor: 'teal',
					}}
				/>
				{/* hr {height:1px; border:none; color:#000; background-color:#000;} */}
				<main>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/about'>
							<About />
							{/* <AddProductForm /> */}
						</Route>
						<Route exact path='/add-product'>
							<AddProductForm />
						</Route>
						<Route path='/products'>
							<StoreFront />
						</Route>
						<Route path='/products/:prodId'>
							<ProductDetails />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
