import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import Svg, { G, Rect, Defs } from "react-native-svg";
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {

  function SvgTop() {
    return(
      <Svg xmlns="http://www.w3.org/2000/svg" fill="none" >
      <G filter="url(#a)">
        <Rect
          width={281.906}
          height={264.061}
          x={29.444}
          y={-144}
          fill="#5E5E5E"
          rx={57}
          transform="rotate(32.396 29.444 -144)"
        />
      </G>
      <G filter="url(#b)">
        <Rect
          width={281.906}
          height={264.061}
          x={319.444}
          y={292}
          fill="#5E5E5E"
          rx={57}
          transform="rotate(32.396 319.444 292)"
        />
      </G>
      <Defs></Defs>
    </Svg>
    )
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Notas IDEA</Text>
      <Text>Log In / Ingrese usuario</Text>
      <TextInput
        placeholder="mail@email.com" style={styles.textInput}   
      />
      <TextInput
        placeholder="password" style={styles.textInput}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo : {
    fontSize: 80, color:'#181818', fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20, color:'gray',
  },
  textInput: {
    borderWidth: 1, borderColor: 'gray', padding: 10, paddingStart: 30, width:'80%', height: 50, marginTop: 20, borderRadius: 30, backgroundColor: '#fff',
  }
});
