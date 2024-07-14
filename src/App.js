import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ContempNav from './components/ContempNav';
import InspoPage from './Pages/InspoPage';
import LookbookPage from './Pages/LookbookPage';
import Header from './components/Header';

function App() {
	console.log('App rendering');
	return (
		<div className='App'>
			<Router>
				<Header />
				<ContempNav />
				<Switch>
					<Route exact path='/' component={LookbookPage} />
					<Route exact path='/inspo' component={InspoPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
