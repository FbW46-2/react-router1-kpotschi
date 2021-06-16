import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom';
import './App.css';
import Hobbies from './Hobbies';
import Contact from './Contact';
import Home from './Home';
import PageNotFound from './PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const navLinks = [
		{ url: '/', name: 'Me', component: Home },
		{ url: '/hobbies', name: 'Hobbies', component: Hobbies },
		{ url: '/contact', name: 'Contact', component: Contact },
	];

	return (
		<Router>
			<nav>
				<ul>
					{navLinks.map((item, index) => (
						<li key={index}>
							<NavLink exact={true} className='router-link' to={item.url}>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<Switch>
				<Redirect from='/me' to='/' />
				{navLinks.map((item, index) => (
					<Route key={index} exact path={item.url} component={item.component} />
				))}
				<Route path='*' component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default App;
