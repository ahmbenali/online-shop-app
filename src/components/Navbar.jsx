import { useContext } from 'react';
import { AppContext } from './AppContext';
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

export default function Navbar() {
	const context = useContext(AppContext);
	// console.log('CONTEXT: ',context);

	return (
		// <div style={{ paddingTop: '1rem', width: '50%', margin: '0rem auto .5rem' }}>
		<div
			className='navbar'
			style={{
				backgroundColor: 'teal',
				border: 'solid 1px teal',
				borderRadius: '5px',
				height: '50%',
				padding: '3px'
			}}
		>
			{/* Shopping in{' '} */}
			<select
				style={{
					backgroundColor: 'teal',
					border: 'none',
					color: 'white',
				}}
				onChange={ev => context.setCurrency(ev.target.value)}
			>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
			</select>
			{/* - Using {} theme{' '} */}
			<button
				style={{
					// backgroundColor: 'green'
					border: 'none',
					backgroundColor: 'teal',
					padding: '0px',
					margin: '0 2px',
				}}
				onClick={context.toggleTheme}
			>
				{' '}
				{context.theme === 'dark' ? (
					<BsSun color='white' borderRadius={5} fontSize={11}/>
				) : (
					<MdDarkMode color='white'/>
				)}
			</button>
			{/* <hr style={{paddingTop: '1rem'}}/> */}
		</div>
	);
}
