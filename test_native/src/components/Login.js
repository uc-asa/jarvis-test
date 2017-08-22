import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	ScrollView,
	Alert,
	Platform,
	ActivityIndicator,
	Dimensions
} from 'react-native';
import styles from '../css/style';
import {
    Actions 
} from 'react-native-router-flux';

var Utility         = require('../Reducers/Utility');
var Modal   	= require('./Modal');
var msgData 	= "";
import {handleLogin} from '../Reducers/AppAction';

export default class Login extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
	    	isLoading			: false,
	        emailAutoFocus		: true,
	        passwordAutoFocus	: false,
	   		msgModel			: false
	    };
	    this.email = '';
	    this.password = '';
	}
	
	checkLogin() {
	    let email = this.email;
	    let password = this.password;
	    let data = {
	        email: email,
	        password: password
	    };
	    let errorMsg = '';
	    if (typeof email == 'undefined' || email == '') {
	        errorMsg = 'Email and Password are required';
	        this.setState({
	            emailAutoFocus: true
	        });
	    } else if (typeof password == 'undefined' || password == '') {
	        errorMsg = 'Email and Password are required';
	        this.setState({
	            passwordAutoFocus: true
	        });
	    }
	    if (errorMsg) {
	        //alert(errorMsg);
	        msgData = errorMsg;
	        this.setState({
	            msgModel: true
	        });
	    } else {
	        this.setState({
	            isLoading: true
	        });
	        handleLogin(data, function(res) {
	            if (res == 1) {
	                Actions.items();
	            } else {
	                alert("User Not Registered!");
	            }
	            this.setState({
	                isLoading: false
	            });
	        }.bind(this));
	    }
	}
   
  render () {
	let color= "#fff";
    return (
    		<View style={[styles.loginTab,{backgroundColor:'#fefefe'}]}>
		    	<ScrollView pointerEvents={this.state.isLoading ? 'none' : 'auto'} ref="scrollView">
			    	<View style={[(Platform.OS === 'ios') ? styles.center : null, styles.loginCenter]}>
						<Text style={[styles.heading2,styles.textBlack]}>Xebia</Text>
						<View style={[styles.mtLg, styles.mbMd,]}>
							<TextInput 
								style={[(Platform.OS === 'ios') ? styles.width60 : null, 
										styles.textLeft, 
										styles.textInput, 
										styles.pl, 
										styles.headingFont
									]}
								ref="email"
								placeholder="Email address" 
								autoCapitalize="none" 
								autoCorrect={false} 
								keyboardType={'email-address'}
								onChangeText={email => this.email = email }
							/>
						</View>
						<View>
							<TextInput 
								ref="password"
								style={[(Platform.OS === 'ios') ? styles.width60 : null, 
										styles.textLeft, 
										styles.pl, 
										styles.textInput, 
										styles.headingFont
									  ]} 
								placeholder="Password"
								onChangeText={password => this.password= password}
								secureTextEntry={true}
								autoFocus={this.state.passwordAutoFocus}
								onSubmitEditing={()=>this.checkLogin()}
							/>
						</View>
						<TouchableOpacity 
								style={[styles.btnFullScreen,(Platform.OS === 'ios') ? styles.width60 : null, 
										styles.btnPrimary,
										styles.logButton,
										styles.rSm, 
										styles.mtMd,
										styles.middle
										]} 
								onPress={()=>this.checkLogin()}
						>
				    		<Text style={[styles.textCenter,
				    		              styles.textWhite, 
				    		              styles.middleFont]}
				    		>{(this.state.isLoading) ? 'Please wait...' : 'Log in'}</Text>
				    		{(this.state.isLoading) 
				    			? 
				    				<View style={[styles.pullRight,
				    				              styles.center,
				    				              {top:0,bottom:0,right:8}
				    							]}
				    				>
				    					<ActivityIndicator 
				    						animating={this.state.isLoading} 
				    						color={color} 
				    						size="small" 
				    					/>
				    			   </View> 
				    			:
				    				null
		    			   	}
				    	</TouchableOpacity>
				    </View>
				</ScrollView>
				<Modal isOpen={this.state.msgModel} 
				 		style={[styles.center,styles.msgModel]} 
				 		position={"bottom"} onClosed={()=>this.setState({msgModel : false})}
				>
					<View style={[styles.fullWidth,styles.center]}>
						<Text style={[styles.textBlack,styles.mlMd,styles.mrMd]}>{msgData}</Text>
						<TouchableOpacity 
							onPress={()=>this.setState({msgModel : false})} 
							style={[styles.modalSmallButton, styles.btnPrimary, styles.center, {marginTop:5}]}
						>
							<Text style={[styles.btnText,styles.btnTextModal]}> OK </Text>
						</TouchableOpacity>
					</View>
		        </Modal>
			</View>
    );
  }
}