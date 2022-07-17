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
                    height: 60 + insets.bottom,
                }
            }}
        >
            <Tab.Screen name="Answers" component={AnswerStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <MaterialCommunityIcons name={focused ? 'message-plus' : 'message-plus-outline'} size={35} color={colors.brand}/>
                        <Text style={{color: colors.tertiary}}>Answer</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Share" component={ShareStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Ionicons name={focused ? 'cloud-upload' : 'cloud-upload-outline'} size={35} color={colors.brand} />
                        <Text style={{color: colors.tertiary}}>Share</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={35} color={colors.brand}/>
                        <Text style={{color: colors.tertiary}}>Profile</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
};

export default Tabs;