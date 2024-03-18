import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import Svg, { G, Rect, Defs } from "react-native-svg"
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonGradient from './ButtonGradient';

export default function App() {

  function SvgTop() {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
    <G filter="url(#a)">
      <Rect
        width={281.906}
        height={264.061}
        x={29.444}
        y={-144}
        fill="#E55A47"
        rx={57}
        transform="rotate(32.396 29.444 -144)"
      />
    </G>
    <G filter="url(#b)">
      <Rect
        width={281.906}
        height={264.061}
        x={292}
        y={319.444}
        fill="#E55A47"
        rx={58}
        transform="rotate(32.396 319.444 292)"
      />
    </G>
    <Defs></Defs>
  </Svg>
    )
  }
  return (
    <View style={styles.mainContainer}>

      <View style={styles.container}>
      <View style={styles.containerSVG}>
          <SvgTop/>

        <Text style={styles.titulo}>Notas IDEA</Text>
          <Text>Log In / Ingrese usuario</Text>
          <TextInput
            placeholder="mail@email.com" style={styles.textInput}
          />

          <TextInput
            placeholder="password" style={styles.textInput}
          />
          <Text style={styles.forgotPassword}>Forgot your password</Text>
          <StatusBar style="auto" />
          <ButtonGradient/>
          <Text style={styles.forgotPassword}>Don't have an account?</Text>
          <View style={styles.containerSVG}>
            <SvgTop/>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    width: 440,
    height: 220,
    flex:1,
  },
  forgotPassword: {
    margin:10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: 450,
    height: 220,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo : {
    fontSize: 80, color:'#181818', fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20, color:'gray', marginTop:20,
  },
  textInput: {
    borderWidth: 1, borderColor: 'gray', padding: 10, paddingStart: 30, width:'80%', height: 40, marginTop: 20, borderRadius: 30, backgroundColor: '#fff',
  }
});
