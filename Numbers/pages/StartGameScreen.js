import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../constants/Color";



const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style = {styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Choose a Number</Text>
                <Input style={styles.TextInput}
                    blurOnSubmit
                    autoCapitalization='none'
                    autoCorrect={false}
                    keyboardType='numeric'
                    maxLength={2}
                />
                <View style={styles.buttonContainer}>
                    <Card style={styles.button}>
                        <Button title="Limpiar" onPress={() => {}} color={Color.accent}/>
                    </Card>
                    <Card style={styles.button}>
                        <Button title="Confirmar" onPress={()=> {}} color={Color.primary}/>
                    </Card>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        flex:1,
        padding: 10,
        alignItems: 'center',
    },
    button: {
        width:100,
    },
    title :{
        fontSize: 20,
        marginVertical : 10,
        color: Color.accent,
    },
    TextInput: {
        fontSize: 30,
        paddingVertical: 20,
    },


    inputContainer : {
        width : 300,
        maxWidth : '100%',
        alignItems: 'center',
        paddingHorizontal : 20,
        paddingVertical : 30 ,

    },
    buttonContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-around',
        paddingHorizontal : 15
    }

})

export default StartGameScreen