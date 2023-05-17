import React from "react";
import { View , StyleSheet } from "react-native";

const Card = props => (
    <View style={{ ...styles.inputCard, ...props.style}}>
        {props.children}    
        
    </View>
)


const styles = StyleSheet.create({
    inputCard:{
        shadowColor: 'black',
        shadowOffset: {width: 0 , height:2},
        shadowRadius:6 ,
        shadowOpacity:0.26,
        elevation: 5 ,
        borderRadius: 10,
        backgroundColor:'white'
    },
})

export default Card