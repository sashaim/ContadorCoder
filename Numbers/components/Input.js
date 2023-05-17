import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => (
    <TextInput style={{...styles.Input, ...props.style}}/>

)

const styles = StyleSheet.create({
    Input : {
        height : 100,
        borderBottomColor : 'black',
        borderBottomWidth: 1,
        marginVertical:20,
    
    }

})

export default Input