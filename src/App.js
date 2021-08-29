import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<Router>
				<>
					<Header />
					<AppBody>
						<Sidebar />
						<Switch>
							<Route path='/' exact>
								{/* Chat */}
							</Route>
						</Switch>
					</AppBody>
				</>
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
