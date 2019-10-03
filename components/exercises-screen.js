import React, { Component } from 'react';

import firebase from 'react-native-firebase';

import { 
    View, 
    ScrollView, 
    Image, 
    Modal, 
    Button, 
    Text, 
    StyleSheet,
    Picker, 
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Switch
} from 'react-native';

export class ExercisesScreen extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('exercicios');
        this.state = {
            loading: true,
            modalVisible: false,
            exercises: [],
            filterNome: '',
            filterMusculos: [],
            filterDificuldade: ''
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Exercícios',
            headerRight: (
                <Button
                style={{marginRight: 10}}
                    onPress={navigation.getParam('openModal')}
                    title="Filtrar"
                />
            )
        }   
    };

    componentDidMount() {
        this.props.navigation.setParams({ openModal: this._openModal });
        this.unsubscribe = this.ref.onSnapshot(snapshot => this.refreshCollection());
    }

    refreshCollection() {
        var query = this.ref;        

        if (this.state.filterDificuldade) {
            query = query.where(
                'dificuldade', 
                '==', 
                this.state.filterDificuldade);
        }

        query
            .get()
            .then(snapshot => {
                const exercises = [];

                snapshot.forEach((doc) => {
                    const { nome, dificuldade, musculos, imagem, demo, observacoes } = doc.data();

                    if ((!this.state.filterNome || nome.toLowerCase().contains(this.state.filterNome.toLowerCase())) && 
                        (this.state.filterMusculos.length == 0 || this.state.filterMusculos.some(m => musculos.includes(m)))) {
                        exercises.push({
                            id: doc.id,            
                            demo: demo,
                            nome: nome,
                            dificuldade: dificuldade,
                            observacoes: observacoes,
                            imagem: imagem,
                            musculos: musculos            
                        });
                    }
                });

                this.setState({ 
                    exercises,
                    loading: false,
                    modalVisible: false
                });
            });
    }

    applyFilters() {
        this.setState({ loading: true });
        this.refreshCollection();
    }

    clearFilters() {
        this.setState({ loading: true });
        this.ref.get().then(snapshot => {
            const exercises = [];

                snapshot.forEach((doc) => {
                    const { nome, dificuldade, musculos, imagem, demo } = doc.data();
                    exercises.push({
                        id: doc.id,            
                        demo: demo,
                        nome: nome,
                        dificuldade: dificuldade,
                        imagem: imagem,
                        musculos: musculos            
                    });
                });

            this.setState({ 
                modalVisible: false, 
                filterDificuldade: '',
                filterNome: '',
                filterMusculos: [],
                exercises,
                loading: false
            });
        });
    }

    applyMuscleFilter(muscle, value) {
        const filterMusculos = this.state.filterMusculos;

        if (value) {
            if (!filterMusculos.includes(muscle)) {
                filterMusculos.push(muscle);
            }
        } else {
            const indexOf = filterMusculos.indexOf(muscle);
            if (indexOf != -1) {
                filterMusculos.splice(indexOf, 1);
            }
        }

        this.setState({ filterMusculos });
    }

    _openModal = () => {
        this.setState({ modalVisible: true });
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            );
        }

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.itemBigTitle}>Exercícios</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    { this.state.exercises.map(
                        e => 
                        <TouchableOpacity key={e.id} onPress={() => navigate('Exercise', { exercise: JSON.stringify(e) })}>
                            <View  style={styles.exerciseContainer}>
                                <Image style={styles.exerciseImage} source={e.imagem} />
                            </View>
                        </TouchableOpacity>
                        ) 
                    }
                </ScrollView>

                <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
                    <ScrollView contentContainerStyle={styles.modalContainer}>
                    
                        <Text style={{ color: '#000', textAlign: 'center', marginTop:30,marginBottom:30, fontSize:20 }}>Filtros</Text>


          {/*              <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                            <Text>
                                Nome
                            </Text>
                            <TextInput
                                onChangeText={(text) => this.setState({ filterNome: text })}
                                value={this.state.filterNome}
                            >
                            </TextInput>
                        </View>*/}


{/*                        <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{ height: 50, flex: 1, fontSize: 16, fontWeight: 'bold', color: '#000' }} >
                                Dificuldade
                            </Text>
                            <Picker
                            selectedValue={this.state.filterDificuldade}
                            style={{ height: 50, flex: 3 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ filterDificuldade: itemValue })}
                            >
                            <Picker.Item label="Selecione" value="" key="0" />
                            <Picker.Item label="Fácil" value="Fácil" key="1" />
                            <Picker.Item label="Médio" value="Médio" key="2" />
                            <Picker.Item label="Difícil" value="Difícil" key="3" />
                        </Picker>
                        </View>*/}
                        

                        <View style={{flex:1, alignItems:'center',justifyContent:'center',flexDirection: 'row',flexWrap:'wrap', }}>
                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Peito</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Peitoral')}
                                    onValueChange={(value) => this.applyMuscleFilter('Peitoral', value) }
                                >
                                </Switch>
                            </View>
                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Dorsal</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Dorsal')}
                                    onValueChange={(value) => this.applyMuscleFilter('Dorsal', value) }
                                >
                                </Switch>
                            </View>
                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Deltóides</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Deltóides')}
                                    onValueChange={(value) => this.applyMuscleFilter('Deltóides', value) }
                                >
                                </Switch>
                            </View>

                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Bíceps</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Bíceps')}
                                    onValueChange={(value) => this.applyMuscleFilter('Bíceps', value) }
                                >
                                </Switch>
                            </View>

                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Tríceps</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Tríceps')}
                                    onValueChange={(value) => this.applyMuscleFilter('Tríceps', value) }
                                >
                                </Switch>
                            </View>
                            
                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Trapézio</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Trapézio')}
                                    onValueChange={(value) => this.applyMuscleFilter('Trapézio', value) }
                                >
                                </Switch>
                            </View>
                            
                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Quadríceps</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Quadríceps')}
                                    onValueChange={(value) => this.applyMuscleFilter('Quadríceps', value) }
                                >
                                </Switch>
                            </View>


                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Glúteos</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Glúteos')}
                                    onValueChange={(value) => this.applyMuscleFilter('Glúteos', value) }
                                >
                                </Switch>
                            </View>

                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Posteriores</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Posteriores')}
                                    onValueChange={(value) => this.applyMuscleFilter('Posteriores', value) }
                                >
                                </Switch>
                            </View>

                            <View style={styles.marginFilters}>
                                <Text style={styles.textSwitch}>Panturrilha</Text>
                                <Switch style={styles.sizeSwitch}
                                    value={this.state.filterMusculos.includes('Panturrilha')}
                                    onValueChange={(value) => this.applyMuscleFilter('Panturrilha', value) }
                                >
                                </Switch>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={{position:'absolute',bottom:0, left:130}}>
                            <Button
                                title="Filtrar"
                                onPress={() => this.applyFilters()}>
                            </Button>
                            <Button 
                                onPress={() => this.clearFilters()} 
                                title="Limpar filtros">
                            </Button>
                        </View>
                </Modal>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {        
        flex: 1,
        padding: 30,
        backgroundColor: '#333'
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

    itemBigTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
    },

    modalContainer: {
        //flex: 1,        
    },
    marginFilters: {
        marginTop: 20,
        width: 150,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },
    sizeSwitch:{
        marginTop: 15,
        transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }]
    },
    textSwitch:{
        fontSize:20
    }
});