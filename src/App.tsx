import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import Dashboard from 'Modules/Dashboard/dashboard';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Dashboard />
			</div>
		</ThemeProvider>
	);
}

export default App;
