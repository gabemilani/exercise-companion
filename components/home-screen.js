import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Exercise Companion',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <Text style={styles.itemBigTitle}>Exercise Companion</Text>
              <TouchableOpacity style={styles.item} onPress={() => navigate('Trainings')}>
                <Image
                  style={styles.itemImage}
                  source={{uri: 'https://webgradients.com/public/webgradients_png/069%20Purple%20Division.png'}}
                />
                <Text style={styles.itemTitle}>Treinos</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.item} onPress={() => navigate('Exercises')} >
                <Image
                  style={styles.itemImage}
                  source={{uri: 'https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png'}}
                />
                <Text style={styles.itemTitle}>Exercícios</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} onPress={() => navigate('Map')} >
                <Image
                  style={styles.itemImage}
                  source={{uri: 'https://webgradients.com/public/webgradients_png/084%20Phoenix%20Start.png'}}
                />
                <Text style={styles.itemTitle}>Academias Próximas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} onPress={() => navigate('About')} >
                <Image
                  style={styles.itemImage}
                  source={{uri: 'https://webgradients.com/public/webgradients_png/064%20Red%20Salvation.png'}}
                />
                <Text style={styles.itemTitle}>Sobre</Text>
              </TouchableOpacity>

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
  
    itemTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white'
    },

    itemBigTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },

    itemImage: {
      backgroundColor: '#ccc',
      flex: 1,
      alignItems:'center',
      borderRadius: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }
});