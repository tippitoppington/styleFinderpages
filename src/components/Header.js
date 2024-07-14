import React from 'react';

import '../css/header-style.css';

const Header = () => {
	return (
		<div className='device-headers'>
			<div className='topHeader m '>
				<div className='th-container'>
					<span className='ship'>
						Free Shipping With $25 Purchase. Exclusions & Details
					</span>
				</div>
			</div>

			<header className='nav-m'>
				<div className='hdr-nav'>
					<img
						alt='menu'
						className='menu-icon'
						src={`${process.env.PUBLIC_URL}/img/header/m-menu.png`}
						width='77'
						height='auto'
					/>
					<img
						alt='logo'
						className='macys-logo'
						src={`${process.env.PUBLIC_URL}/img/header/m-logo.png`}
						width='450'
						height='130'
					/>
					<img
						alt='bag'
						className='bag'
						src={`${process.env.PUBLIC_URL}/img/header/m-bag.png`}
						width='92'
						height='110'
					/>
				</div>

				<div className='search-nav'>
					<form action=''>
						<input
							type='text'
							placeholder='Search or enter web id'
							name='search'
						/>
						<button type='submit'>
							<img
								alt='submit'
								src={`${process.env.PUBLIC_URL}/img/header/m-search.png`}
								width='105'
								height='117'
							/>
						</button>
					</form>
				</div>
			</header>
			<header className='nav-t'>
				<div className='hdr-nav'>
					<img
						alt='menu'
						className='menu-icon'
						src={`${process.env.PUBLIC_URL}/img/header/m-menu.png`}
						width='77'
						height='auto'
					/>
					<img
						alt='logo'
						className='macys-logo'
						src={`${process.env.PUBLIC_URL}/img/header/m-logo.png`}
						width='450'
						height='130'
					/>

					<div className='search-nav'>
						<form action=''>
							<input
								type='text'
								placeholder='Search or enter web id'
								name='search'
							/>
							<button type='submit'>
								<img
									alt='search'
									src={`${process.env.PUBLIC_URL}/img/header/m-search.png`}
									width='105'
									height='117'
								/>
							</button>
						</form>
					</div>

					<img
						alt='bag'
						className='bag'
						src={`${process.env.PUBLIC_URL}/img/header/m-bag.png`}
						width='92'
						height='110'
					/>
				</div>
			</header>

			<div className='topHeader d'>
				<div className='th-container'>
					<span className='signup'>
						Sign Up for Emails & get 25% off! Exclusions apply. Sign Up
					</span>
					<span className='ship'>
						Free Shipping With $25 Purchase. Exclusions & Details
					</span>
				</div>
			</div>
			<header className='nav-d'>
				<div className='top-nav'>
					<div className='top-nav-inner'>
						<img
							alt='logo'
							src={`${process.env.PUBLIC_URL}/img/header/logoTopNav.gif`}
							width='1167'
							height='200'
						/>
						<img
							alt=''
							src={`${process.env.PUBLIC_URL}/img/header/acctTopNav.gif`}
							width='622'
							height='200'
						/>
					</div>
				</div>
				<div className='hdr-nav'>
					<div className='hdr-nav-inner'>
						<img
							alt=''
							src={`${process.env.PUBLIC_URL}/img/header/hdrnav.gif`}
							width='468'
							height='80'
						/>
						<img
							alt=''
							src={`${process.env.PUBLIC_URL}/img/header/SearchBag.gif`}
							width='1208'
							height='80'
						/>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
