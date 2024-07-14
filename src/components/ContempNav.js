import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../css/main.css';
// import '../css/header-style.css';

const ContempNav = () => {
	console.log('ContempNav rendering');
	return (
		<>
			<div className='contemp-nav-container sticky'>
				<div className='contemp-nav m'>
					<div className='contemp-primary'>
						<button className='title'>Contemporary</button>
						<div className='depts'>
							<button className='active'>Women</button>
							<button>Men</button>
						</div>
					</div>
					<div className='contemp-secondary'>
						<NavLink
							activeClassName='active'
							to={(location) => ({ ...location, pathname: '/inspo' })}
							replace>
							<button type='button'>Style Inspo</button>
						</NavLink>

						<NavLink
							activeClassName='active'
							to={(location) => ({ ...location, pathname: '/' })}
							replace>
							<button type='button'>Lookbook</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContempNav;
