import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const IntroScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Intro Screen</Text>
            <TouchableOpacity onPress={() => {navigation.replace('Tabs')}}>
                <Text>Temp leave</Text>
            </TouchableOpacity>
        </View>
    )
}

export default IntroScreen;