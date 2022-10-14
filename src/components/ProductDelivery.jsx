import { useLocation } from 'react-router-dom';

export default function ProductDelivery() {
	const location = useLocation();
	console.log('LOCATION: ', location);

	return (
		<div style={{ height: '100vw' }}>
			<h3>Delivery instructions</h3>
			<p>The product will be delivered in less than 24 hours.</p>
		</div>
	);
}
