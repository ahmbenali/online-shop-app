import { useState } from 'react';

export default function useProductCounter() {
	const [counter, setCounter] = useState(0);

	const increment = () => setCounter(counter => counter + 1);

	const decrement = () => // do not decrement counter below 0
		setCounter(counter => (counter > 0 ? counter - 1 : 0));

	return { counter, increment, decrement };
}
