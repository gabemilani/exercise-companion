import React, { Component } from 'react';

import { View, ScrollView, Button, Text, StyleSheet, TouchableOpacity  } from 'react-native';

export class TrainingScreen extends Component {

    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'Treino'
    };

    componentDidMount () {
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <View style={styles.exerciseContainer}>
                        <View style={styles.exerciseDetails}>
                            <Text style={styles.exerciseName}>
                                Treino Peito Arnold
                            </Text>
                            <Text style={styles.exerciseDescription}>
                                • Supino reto 4×15-10-8-6 Descanso: 60 seg{"\n"}{"\n"}
                                • Supino inclinado 2×8-6 Descanso: 60 seg{"\n"}{"\n"}
                                • Crucifixo inclinado 2×10-8 Descanso: 60 seg{"\n"}{"\n"}
                                • Barra paralela 2×8 até falhar Descanso: 60 seg{"\n"}{"\n"}
                                • Pull-over 2×15 até falhar Descanso: 60 seg
                            </Text>

                            <Text style={styles.exerciseDescription}>
                                Observações:{"\n"}
                                 A velocidade de execução deve variar de 2 a 5 segundos por repetição. No primeiro exercício a série de 15 repetições deve ser leve pois tem caráter de aquecimento.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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

     exerciseContainer: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 10,
        padding: 20
    },

    exerciseDetails: {
        flex: 1
    },

    exerciseName: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    exerciseDescription: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30
    },

    exerciseDemo: {
        paddingTop: 20,
        flex: 3
    }

});