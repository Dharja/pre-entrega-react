import React from 'react';
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";


const App = () => {
	return (
		<div className="App">
    		<NavBar />
    		<ItemListContainer />
    	</div>
	);
}

export default App;
