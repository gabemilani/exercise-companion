import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export class AboutScreen extends Component {

    static navigationOptions = {
        title: 'Sobre',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <Text style={styles.itemBigTitle}>Sobre</Text>
            <Text style={styles.itemDescription}>Exercise Companion como o próprio nome já diz, é um aplicativo que tem como ideia principal ser seu parceiro de treino! Muitas pessoas praticam atividades físicas com uma execução incorreta, o aplicativo surgiu inicialmente para auxiliar as pessoas nisso, quantas vezes você leu o nome de um exercício e se perguntou "Que exercício é esse?" ou quando você o está fazendo e se pergunta "Será que estou fazendo certo?" muitas vezes os Coachs da academia estão ocupados e você acaba fazendo errado, não tirando assim máximo proveito do exercício ou em alguns casos causando sérias lesões, com esse aplicativo você saberá fazer os exercicios de forma correta !</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {        
      flex: 1,
      backgroundColor: 'black',
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  
    item: {
      borderRadius: 10,
      backgroundColor: '#fff',
      flex: 1,
      marginVertical: 20,
      alignItems:'center',
      justifyContent: 'center',
      height: 150
    },
  
    itemDescription: {
      fontSize: 20,
      fontWeight: 'normal',
      textAlign: 'center',
      color: 'white'
    },

    itemBigTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
    },

});