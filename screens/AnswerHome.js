import React from "react";
import {View, Text} from "react-native";
import { useTheme } from "@react-navigation/native";

const AnswerHome = () => {
    const {colors} = useTheme()
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: colors.tertiary, fontWeight: 'bold', fontSize: 20}}>Answer Home</Text>
        </View>
    )
}

export default AnswerHome;