import React, {useContext} from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from '@react-navigation/native';
import ProfileScreen from "../screens/ProfileScreen";
import ShareScreen from "../screens/ShareScreen";
import AnswerHome from "../screens/AnswerHome";


const Stack = createStackNavigator();

const ProfileStack = () => {
  const { colors } = useTheme();
  return(
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTintColor: colors.tertiary,
            headerTransparent: true,
            title: '',
            headerLeftContainerStyle: {
                paddingLeft: 20,
            },
        }}
    >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
    </Stack.Navigator>
  );
};

const ShareStack = () => {
    const { colors } = useTheme();
    return(
      <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: 'transparent',
              },
              headerTintColor: colors.tertiary,
              headerTransparent: true,
              title: '',
              headerLeftContainerStyle: {
                  paddingLeft: 20,
              },
          }}
      >
          <Stack.Screen name="ShareScreen" component={ShareScreen}/>
      </Stack.Navigator>
    );
};

const AnswerStack = () => {
    const { colors } = useTheme();
    return(
      <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: 'transparent',
              },
              headerTintColor: colors.tertiary,
              headerTransparent: true,
              title: '',
              headerLeftContainerStyle: {
                  paddingLeft: 20,
              },
          }}
      >
          <Stack.Screen name="AnswerHome" component={AnswerHome}/>
      </Stack.Navigator>
    );
  };

export {
    ProfileStack,
    ShareStack,
    AnswerStack
};