import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar.js';
import MainNav from './components/MainNav.js';
import AlertDialog from './components/Dialog.js';
import ContentArea from './components/Content.js';

class App extends Component {

	state = {
		mainNavIsOpen: false,
		dialogIsOpen: false,
		dialogValue: null,
		contentState: 'lyrics'
	};

	toggleMainNav = (status, value) => {
		let newState = {};
		console.log('value', value);
		if(value) newState.contentState = value;
		newState.mainNavIsOpen = status;
		this.setState(newState);
	};

	toggleDialog = (status, value) => {
		let newState = {};
		if(value) newState.value = value;
		newState.dialogIsOpen = status;
		this.setState(newState);
	};

	render() {
		return (
			<div className="App">
				<Toolbar onToggle={() => { this.toggleMainNav(true) }} onClick={() => { this.toggleDialog(true) }}></Toolbar>
				<MainNav open={ this.state.mainNavIsOpen } onClick={({state, value}) => { this.toggleMainNav(state, value) }}></MainNav>
				<AlertDialog open={ this.state.dialogIsOpen } onClick={(e) => { this.toggleDialog(false, e) }}></AlertDialog>
				<ContentArea page={ this.state.contentState }></ContentArea>
			</div>
		);
	}
}

export default App;
