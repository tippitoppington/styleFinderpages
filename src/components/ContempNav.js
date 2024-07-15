import React from 'react';
import { NavLink } from 'react-router-dom';

const ContempNav = () => {
	console.log('ContempNav rendering');
	return (
		<div className='contemp-nav-container sticky'>
			<div className='contemp-nav m'>
				<div className='contemp-primary'>
					<button className='title'>Contemporary</button>
				</div>
				<div className='contemp-secondary'>
					<NavLink activeClassName='active' to='/inspo'>
						<button type='button'>Style Inspo</button>
					</NavLink>

					<NavLink activeClassName='active' exact to='/'>
						<button type='button'>Lookbook</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default ContempNav;
