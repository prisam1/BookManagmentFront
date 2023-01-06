import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
	return (
		
			<div className='container'>
				<h1 className='mt-3'>Signup</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Signup />
					</div>
								
				</div>
				<h3 className='mt-3'>Login</h3>
				<div className='row '>
					<div className='col-sm'>
						<Login />
					</div>
				</div>
				
				</div>
			
	);
};

export default App;
