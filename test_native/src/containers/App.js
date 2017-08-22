
/**
 * File Name       : App.js
 * Author          : Asheesh Sahu
 * Description     : Application route
 * Version         : 1.0
 * Last Updated    : Aug 10  2017 
 * Last Updated By : Asheesh Sahu
 **/
import React, {Component} from 'react';
import {
	Router, 
	Scene 
} from 'react-native-router-flux';

import Login from '../components/Login';	
import Items from '../components/Items';
 export default class App extends React.Component {
	constructor (props) {
	    super(props);
	}

	render () {
		return(
			<Router>
			    <Scene key="root"  hideTabBar={false} renderBackButton={'Closure'}>
			    	<Scene key="login" component={Login} title="Login" initial={true}  />
			    	<Scene key="items" component={Items} title="Items" hideNavBar = {true} />
			    </Scene>
			</Router>
		)
	}
}
