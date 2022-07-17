import React, {useEffect, useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

import { CredentialsContext } from "../components/CredentialsContext.js";
import Tabs from "./tabs.js";

import AsyncStorage from "@react-native-async-storage/async-storage";

import IntroScreen from "../screens/IntroScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import Signup from "../screens/Signup.js";

const Stack = createStackNavigator();


const Start_Stack = () => {
    const {colors} = useTheme();
    const [HasOpened, setHasOpened] = useState();
    async function GetHasOpenedSocialSquareKey() {
        var HasOpened = await AsyncStorage.getItem('HasOpenedSocialSquare');
        setHasOpened(HasOpened);
    }
    GetHasOpenedSocialSquareKey();
    console.log("HasOpened variable is " + HasOpened);
  return(
      <CredentialsContext.Consumer>
          {({storedCredentials}) => (
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerShown: false,
                        headerTintColor: colors.tertiary,
                        headerTransparent: true,
                        title: '',
                        headerLeftContainerStyle: {
                            paddingLeft: 20,
                        },
                    }}
                >
                    {HasOpened == 'true' ?
                    storedCredentials ? (
                        <>
                            <Stack.Screen 
                                name="Tabs" 
                                component={Tabs}
                                options={{
                                    animationEnabled: false,
                                }}
                            />
                        </>
                    ) : ( 
                        <>
                            <Stack.Screen 
                                name="LoginScreen" 
                                component={LoginScreen}
                                options={{
                                    animationEnabled: false,
                                }}
                            />
                            <Stack.Screen 
                                name="Signup" 
                                component={Signup}
                                options={{
                                    animationEnabled: false,
                                }}
                            />
                            <Stack.Screen name="Tabs" component={Tabs}/>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="IntroScreen" component={IntroScreen}/>
                            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                            <Stack.Screen name="Signup" component={Signup}/>
                            <Stack.Screen name="Tabs" component={Tabs}/>
                        </>
                    )}
                </Stack.Navigator>
          )}
      </CredentialsContext.Consumer>
  )
}




export { Start_Stack };