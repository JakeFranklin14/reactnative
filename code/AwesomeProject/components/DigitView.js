import React from 'react';
import {View, Text} from 'react-native';

const DigitView = ({num,color}) => {
    return (
      <View style={{flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color}} >
            <Text style = {{fontSize: 40,}}>
                {num}
            </Text>
      </View>
    )
  }

const greeting = () => {console.log("Hello World!")}


export default DigitView;
