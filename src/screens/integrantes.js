import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Integrantes({navigation}) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Integrantes do App</Text>
            <Text style={estilos.texto}>
                Site desenvolvido a partir dos conhecimento de HTML, CSS, JavaScript e React Native pelos seguintes integrantes:
            </Text>
                <Image source={require('../assets/luis.jpg')} />
            <Text style={estilos.texto}>
                - Integrante 1: Luis Gustavo Lima (Desenvolvedor)
            </Text>
        
            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => navigation.goBack()} >
                <Text style={estilos.btnTexto}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  botao: {
    backgroundColor: '#dd7b22',
    padding: 10,
    borderRadius: 10
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
