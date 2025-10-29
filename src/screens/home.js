import React, { use, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function Home({ navigation }) {
  //Estado para a imagem do biscoito
  const [img, setImg] = useState(require('../assets/biscoitoFechado.png'));
  //Estado para o texto da frase
  const [textoFrase, setTextoFrase] = useState('Abra o biscoito para descobrir a frase!');
  // Array de frases
  let frases = [
    "A sorte sorri para os corajosos.",
    "Grandes jornadas começam com um simples passo.",
    "Hoje é um ótimo dia para começar algo novo.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Acredite no seu potencial e vá além.",
    "Seja o motivo do seu próprio sorriso.",
    "A vida recompensa quem se arrisca com fé.",
    "Boas energias atraem boas oportunidades.",
    "Você é mais forte do que imagina.",
    "Nunca é tarde para recomeçar.",
    "O universo conspira a favor de quem não desiste.",
    "Pense positivo e o bem florescerá.",
    "Cada desafio é uma chance de evoluir.",
    "Quem semeia amor, colhe felicidade.",
    "A mudança começa dentro de você.",
    "Sorte é o encontro entre preparo e oportunidade.",
    "Respire fundo, tudo vai dar certo.",
    "Você está exatamente onde deveria estar.",
    "O impossível é apenas o que ainda não foi tentado.",
    "A vida fica mais leve quando você agradece.",
    "Grandes coisas estão a caminho.",
  ]
  // Função para quebrar o biscoito
  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(`${frases[numeroAleatorio]}`)
    setImg(require('../assets/biscoitoAberto.png'))
  }

  function reiniciarBiscoito() {
     if (textoFrase === 'Abra o biscoito para descobrir a frase!') {
       alert('O biscoito já está fechado!')
       return;
     } else {
       setTextoFrase('Abra o biscoito para descobrir a frase!' )
       setImg(require('../assets/biscoitoFechado.png'))
      }
  }

  return (
    <View style={estilos.container}>
      <Image source={img}  style={estilos.img} />

      <Text style={estilos.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={estilos.botao1} onPress={quebrarBiscoito}>
        <Text style={estilos.btnTexto}>Apertar Botão!</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={estilos.botao2} onPress={reiniciarBiscoito}>
        <Text style={estilos.btnTexto}>Reiniciar</Text>
      </TouchableOpacity>

      {/* Botão para navegar para a tela Sobre */}
      <TouchableOpacity 
        style={[estilos.botao1, { backgroundColor: '#999', marginTop: 15 }]}
        onPress={() => navigation.navigate('Sobre')}
        >
        <Text style={estilos.btnTexto}>Ir para Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[estilos.botao1, { backgroundColor: '#888', marginTop: 15 }]}
        onPress={() => navigation.navigate('Integrantes')}
        >
        <Text style={estilos.btnTexto}>Ir para Integrantes</Text>
      </TouchableOpacity>
    </View>
  )
  // Estilos
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 18,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao1: {
    width: 200,
    height: 45,
    backgroundColor: '#dd7b22',
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao2: {
    width: 200,
    height: 45,
    backgroundColor: '#575757ff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
      
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
})