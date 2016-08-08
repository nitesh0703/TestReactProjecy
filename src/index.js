/* eslint-disable no-console */
console.log('hi');
//

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Search';

//const App = function(){
//	return <div> Hi! </div>;
//}


//const App = function(){
//	return <div> <SearchBar /></div>;
//}

class App extends React.Component{
	render() {
			return(
			<div>
				<SearchBar /> ABS
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
