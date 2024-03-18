import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient () {
    return (
        <TouchableOpacity style={styles.button}>
                <LinearGradient
            // Button Linear Gradient
            colors={['#fe2020', '#fe8484', '#fe2020']}
            style={styles.button}   
            >   
            <Text style={styles.text}>Sign in</Text>
            </LinearGradient>
        </TouchableOpacity>
    );  
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 

    },
    text: {
        fontSize: 14, color:'#fff', 
    },
    button: {
        width:'80%', height:70,   padding:10,     alignItems:'center',margin: 10,
        justifyContent: 'center', borderRadius:30,
        marginBottom:10,
    },  
});