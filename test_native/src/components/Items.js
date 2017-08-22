/**
 * File Name       : Items.js
 * Author          : Asheesh Sahu
 * Description     : Render Items list
 * Version         : 1.0
 * Last Updated    : Aug 10  2017 
 * Last Updated By : Asheesh Sahu
 **/
import React, {Component} from 'react';
import {
	View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import styles from '../css/style'
import {
    getPlanetList
} from '../Reducers/AppAction';
export default class Items extends Component {
	constructor () {
		super();
        this.state = {
            text: '',
            isLoading: false,
        }
    }
    componentWillMount() {
        let _this = this;
        this.setState({ isLoading : true });
        getPlanetList(function(res){
            _this.planets = res;
            _this.setState({ isLoading : false });
        })
    }
    renderContent() {
        if (!this.state.isLoading && this.planets) {
            let s = [];
            for (let i in this.planets) {
                let item = this.planets[i];
                let val = isNaN(item.diameter) ? 60000 : +(item.diameter);
                let fs = 0.0016326530612244899*val;
                if (this.state.text == '' || ((item.name).toLowerCase()).indexOf((this.state.text).toLowerCase()) > -1 ) {
                    s.push(
                        <View key={i} style={[styles.bg12, styles.fullWidth, styles.center]}>
                            <Text numberOfLines={1} style={[{fontSize: fs}, styles.textWhite]}>{item.name}</Text>
                        </View>
                    )
                }
            }
            return <View style={[styles.fullWidth]}>{s}</View>;
        }
    }
	render () {
		return (
            <View>
                <View style={[styles.center, {height: 70}]}>
                    <View 
                        style={[ 
                            styles.searchContainer, 
                        ]}
                    >
                        <TextInput 
                            onChangeText         = { (text) => this.setState({ text }) } 
                            value                = { this.state.text } 
                            placeholder          = { 'Search planets' }
                            underlineColorAndroid= { '#1fadad' }
                            placeholderTextColor = { "#5a6d7d" }
                            autoFocus            = { true }
                            autoCapitalize       = { "none" } 
                        />
                    </View>
                </View>
                <ScrollView>
                    {this.renderContent()}
                </ScrollView>
                {this.state.isLoading ?
                    <View 
                        style={[
                            styles.fullHeight,
                            styles.fullWidth,
                            {position: 'absolute',},
                            styles.center
                        ]}
                    >
                        <ActivityIndicator
                            animating = { this.state.isLoading }
                            color = { '#999999' } 
                            size = { 'large'}
                        />
                    </View> : null
                }
            </View>
		);
	}
}
