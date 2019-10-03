import React, { Component } from 'react';

import { View, Image, Text, StyleSheet  } from 'react-native';

export class ExerciseScreen extends Component {    

    static navigationOptions = {
        title: 'Exercício'
    };

    render() {
        const { navigation } = this.props;
        const exerciseJson = navigation.getParam('exercise', '');
        const exercise = JSON.parse(exerciseJson);

        return (
            <View style={styles.container}>
                <View style={styles.exerciseContainer}>
                    <View style={styles.exerciseDetails}>
                        <Text style={styles.exerciseName}>
                            { exercise.nome}
                        </Text>

                        <ExerciseDetail name={'Dificuldade'} value={exercise.dificuldade} />
                        <ExerciseDetail name={'Músculos'} value={exercise.musculos.join(' - ')} />
                        <ExerciseDetail name={'Observações'} value={exercise.observacoes} />
                    </View>
                    <Image style={styles.exerciseDemo} source={exercise.demo} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {        
      flex: 1,
      backgroundColor: '#333',
      padding: 15
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
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    exerciseDemo: {
        paddingTop: 20,
        flex: 3
    }
});

export class ExerciseDetail extends Component {
    render() {
        return (
            <View style={stylesDetails.container}>
                <Text style={stylesDetails.name}>
                    { this.props.name }:
                </Text>
                <Text style={stylesDetails.value}>
                    { this.props.value }                
                </Text>
            </View>
        );
    }
}

const stylesDetails = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: 'row'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333'   
    },
    value: {
        marginLeft: 5,
        fontSize: 15,
        color: '#333'
    }
});