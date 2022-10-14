import { useState } from 'react';
import StoreFront from './components/StoreFront';
import Button from './ui-kit/Button';
import Container from './ui-kit/Container';
import Input from './ui-kit/Input';
import Link from './ui-kit/Link';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<Container>
			{loggedIn ? (
				<div>
					<StoreFront />{' '}
					<button
						className='btn btn-outline'
						onClick={() => setLoggedIn(false)}
					>
						Logout
					</button>
				</div>
			) : (
				<div>
					<h2>Please Login</h2>
					<Button className='btn btn-primary' onClick={() => setLoggedIn(true)}>
						Login
					</Button>
				</div>
			)}
		</Container>
	);
}

export default App;
