import React from "react-native";
import {
  Platform,
  Dimensions,
} from 'react-native';

var { height, width }   = Dimensions.get('window');

// Calculating ratio from iPhone breakpoints
const ratioX = Platform.OS === 'ios' ? ( width < 550 ? ( width < 430 ? ( width < 375 ? (width < 320 ? 0.75 : 0.875) : 1 ) : 1.125 ) : 1.25 ) : 1;
const ratioY = Platform.OS === 'ios' ? ( height < 800 ? ( height < 640 ? ( height < 568 ? (height < 480 ? 0.75 : 0.875) : 1 ) : 1.125 ) : 1.25 ) : 1;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
  return unit * value;
}
export default Style = {
  em 					: em
};

