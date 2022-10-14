import { NavLink } from 'react-router-dom';

export default function Nav() {
	return (
		<nav>
			<ul
				style={{
					listStyleType: 'none',
          display: 'flex',
          // backgroundColor: 'yellow',
          width: '50vw',
          justifyContent: 'start',
          padding: '0',
          gap: '20px',
          // marginLeft: '0'
          color: 'teal'

				}}
			>
				<li>
					<NavLink activeClassName='nav-active' to='/' exact>
						Home 
					</NavLink>
				</li>
        <li>|</li>
				<li>
					<NavLink activeClassName='nav-active' to='/about' exact>
						About 
					</NavLink>
				</li>
        <li>|</li>
				<li>
					<NavLink activeClassName='nav-active' to='/products'>
						Products
					</NavLink>
				</li>
        <li>|</li>
				<li>
					<NavLink activeClassName='nav-active' to='/add-product'>
						Add Product
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
