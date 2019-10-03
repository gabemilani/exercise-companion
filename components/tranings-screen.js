import React, { Component } from 'react';

import { View, ScrollView, Button, Text, StyleSheet, TouchableOpacity,Image  } from 'react-native';

export class TrainingsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;

        return {
            title: 'Treinos',
            headerRight: (
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={() => params.createTraining && params.createTraining()}>
                </TouchableOpacity>
            ) 
        }
    };

    createTraining = () => {
        alert('Save Details');
    }
      
    componentDidMount () {
        this.props.navigation.setParams({createTraining: () => this.createTraining()});
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.itemBigTitle}>Treinos</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <TouchableOpacity onPress={() => navigate('Training')}>
                            <View  style={styles.exerciseContainer}>
                                <Image style={styles.exerciseImage} source={{uri:'https://firebasestorage.googleapis.com/v0/b/exercisecompanion-disp-moveis.appspot.com/o/imagens%2Ftreino_arnold.jpg?alt=media&token=c7832c43-fc25-48fe-a97a-4642b32576cb'}} />
                            </View>
                        </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {        
      flex: 1,
      backgroundColor: '#333',
      padding: 20,
    },

    trainingContainer: {
        height: 150,    
        backgroundColor: '#FFF',
        marginVertical: 10,
        borderRadius: 5
    },

    headerButton: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },

    itemBigTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
    },

    scrollContainer: {   
        paddingVertical: 5
    },

    exerciseContainer: {
        backgroundColor: '#fff',
        height: 100,
        marginVertical: 10,
        borderRadius: 10
    },
    exerciseImage: {
        height: 100,
        borderRadius: 10
    },

});