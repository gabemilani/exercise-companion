import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export class MapScreen extends Component {

    static navigationOptions = {
        title: 'Exercise Partner',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <Text style={styles.itemBigTitle}>Academias Próximas</Text>
            <Image style={{flex: 1, alignItems:'center',justifyContent:'center'}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/exercisecompanion-disp-moveis.appspot.com/o/imagens%2FCaptura%20de%20Tela%202018-07-11%20a%CC%80s%2023.37.12.png?alt=media&token=be844fa4-760c-44f2-8925-93abca0c0aaa'}} />

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