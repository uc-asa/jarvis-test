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
    TouchableOpacity
} from 'react-native';
import styles from '../css/style'
import {
    Actions 
} from 'react-native-router-flux';
export default class Items extends Component {
	constructor () {
		super();
    }
    componentWillMount() {
        this.imageList = [
            { src:require('./Assets/imgmenu1.png'), name: 'Cafe 5H by The kitchen', addr: 'Lowence road', rating: '3.9'},
            { src:require('./Assets/imgmenu2.png'), name: '2nd item name', addr: '2nd item addr', rating: '3.4'},
            { src:require('./Assets/imgmenu3.png'), name: '3rd item name', addr: '3rd item addr', rating: '3.6'},
            { src:require('./Assets/imgmenu4.png'), name: '4th item name', addr: '4th item addr', rating: '3.9'},
            { src:require('./Assets/imgmenu5.png'), name: '5th item name', addr: '5th item addr', rating: '3.8'},
            { src:require('./Assets/imgmenu6.png'), name: '6th item name', addr: '6th item addr', rating: '3.9'},
            { src:require('./Assets/imgmenu7.png'), name: '7th item name', addr: '7th item addr', rating: '3.7'},
            { src:require('./Assets/imgmenu8.png'), name: '8th item name', addr: '8th item addr', rating: '3.9'},
            { src:require('./Assets/imgmenu9.png'), name: '9th item name', addr: '9th item addr', rating: '4.5'},
            { src:require('./Assets/imgmenu10.png'), name: '10th item name', addr: '10th item addr', rating: '4.4'},
            { src:require('./Assets/imgmenu11.png'), name: '11th item name', addr: '11th item addr', rating: '4.4'},
            { src:require('./Assets/imgmenu12.png'), name: '12lve item name', addr: '12lve item addr', rating: '4.3'}
        ]
    }
    open(item) {
        Actions.itemDetails({ data : item });
    }
    renderItem() {
        let imgArr = [];
        let row = [];
        for ( let i in this.imageList ) {
            let item = this.imageList[i];
            row.push(
                <TouchableOpacity 
                    style = {[styles.card_shadow, styles.pbSm]}
                    onPress = { () => this.open(item)}
                    key = { i }
                >
                    <Image 
                        source = { this.imageList[i].src } 
                        style = {[styles.imgItem]}
                    />
                    <Text 
                        numberOfLines = { 1 } 
                        style = {[styles.itemWidth, styles.smallFont2, styles.plSm]}
                    >
                        {this.imageList[i].name}
                    </Text>
                    <Text 
                        numberOfLines = { 1 } 
                        style = {[styles.itemWidth, styles.smallFont, styles.plSm]}
                    >
                        {this.imageList[i].addr}
                    </Text>
                    <View 
                        style = {[
                            styles.itemWidth, 
                            styles.rowStyle, 
                            styles.plSm
                        ]}
                    >
                        <Text 
                            numberOfLines = { 1 } 
                            style = {[
                                styles.xsmallFont, 
                                styles.link
                            ]}
                        >
                            Open Now
                        </Text>  
                        <View 
                            style = {[
                                styles.pullRight, 
                                styles.rowStyle, 
                                styles.center
                            ]}
                        >
                            <Text
                                style = {[
                                    styles.xsmallFont, 
                                    styles.link
                                ]}
                            >
                                {this.imageList[i].rating}
                            </Text>
                            <Image 
                                source = { require('./Assets/bookmark.png') } 
                                style = {{ height: 15, width: 15}}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            )
            if ((i+1)%3 == 0) {
                imgArr.push(
                    <View 
                        style = {[
                            styles.rowStyle, 
                            styles.styleFlex, 
                            styles.bodyWidth
                        ]}
                        key = { i + 'row' }
                    >
                        { row }
                    </View>
                )
                row = [];
            }
        }
        return (
            <View 
                style = { styles.mSm }
            >
                { imgArr }
            </View>
        );
    }
	render () {
		return (
            <View>
                <View style={[styles.center, {height: 70}]}>
                    <Text>{this.props.title}</Text>
                </View>
                <ScrollView>
                    {this.renderItem()}
                </ScrollView>
            </View>
		);
	}
}
