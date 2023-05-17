import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Color from "../constants/Color";

const Header = props => {
    const { title } = props 

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    header: {
        width: '100%',
        height: 150,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle : {
        color : '#dbe4ee',
        fontSize: 30,
    }
})

export default Header