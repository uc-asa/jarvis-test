/**
 * File Name       : ItemDetails.js
 * Author          : Asheesh Sahu
 * Description     : Item details
 * Version         : 1.0
 * Last Updated    : Aug 10  2017 
 * Last Updated By : Asheesh Sahu
 **/
import React, {Component} from 'react';
import styles from '../css/style'
import {
	View,
    Text,
    Image,
    ScrollView
} from 'react-native';
export default class ItemDetails extends Component {
	constructor () {
		super();
    }
    renderItem() {
        let props = this.props.data;
        return(
            <View 
                style = {[styles.center]}
            >
                <Image 
                    source = { props.src } 
                    style = {[styles.fullImage]}
                />
                <View>
                    <Text 
                        style = {[styles.itemWidth, styles.normalFont, styles.plSm]}
                    >
                        {props.name}
                    </Text>
                    <Text 
                        style = {[styles.normalFont, styles.plSm]}
                    >
                        {props.addr}
                    </Text>
                    <Text 
                        style = {[styles.normalFont, styles.plSm]}
                    >
                        Rating: {props.rating}
                    </Text>
                </View>
            </View>
        )
    }
	render () {
		return (
            <View>
                {this.renderItem()}
            </View>
		);
	}
}
