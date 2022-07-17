import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import {ProfileStack, AnswerStack, ShareStack} from '../navigation/StackNavigator.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();


const Tabs = ({navigation}) => {
    const {colors} = useTheme();
    const insets = useSafeAreaInsets();
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 55 + insets.bottom,
                    backgroundColor: colors.darkerPrimary,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen name="Share" component={ShareStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{...styles.iconView, marginTop: 1}}>
                        <Ionicons name={focused ? 'share' : 'share-outline'} size={35} color={colors.brand} />
                        <Text style={{color: colors.tertiary, textAlign: 'center'}}>Share</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Answers" component={AnswerStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconView}>
                        <Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} size={35} color={colors.brand}/>
                        <Text style={{color: colors.tertiary, textAlign: 'center'}}>Answer</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.iconView}>
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={35} color={colors.brand}/>
                        <Text style={{color: colors.tertiary, textAlign: 'center'}}>Profile</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconView: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});

export default Tabs;