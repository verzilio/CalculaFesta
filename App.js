import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Calcula from './componentes/Calcula';

export default function App() {
	
  const [inputQtd, setInputQtd] = useState(0);
  const [qtd, setQtd] = useState(0);

  function enviaValor(){
    setQtd(inputQtd);
  }
	
  return (
    <View style={styles.container}>
	  <View style={styles.bloco}>
		  <Text style={styles.titulo}>Calculadora Festa</Text>
	  </View>
	  <View style={styles.bloco}>
		  <Text style={styles.label}>Qtd. Convidados</Text>
		  <TextInput 
			  style={styles.input}
			  value={inputQtd}
          	  onChangeText={(value) => setInputQtd(value)}
		  />
		  <TouchableOpacity style={styles.botao} onPress={enviaValor}>
			  <Text style={styles.txtBotao}> Calcular </Text>
		  </TouchableOpacity>
	  </View>
	  <View style={styles.bloco}>
			<Calcula qtd={qtd} />
	  </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bloco:{
	width:'80%',
	marginLeft:'10%',
	marginTop:10
  },
  titulo:{
	fontSize:30,
	marginTop:10
  },
  input:{
	 borderWidth:1,
	 fontSize:20,
	 width:'100%',
	 marginTop:10
  },
  label:{
	 fontSize:20
  },
  botao:{
	 width:'100%',
	 backgroundColor:"#000",
	 alignItems:"center",
	 marginTop:10
  },
  txtBotao:{
	fontSize:20,
	color:"#FFF",
  }
  
  
});