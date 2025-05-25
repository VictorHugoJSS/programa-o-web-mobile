import React from "react";
import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {code, ChecarTentativa} from "./game";

export default function Jogo(){
    const [text, onChangeText] = React.useState('Digite a senha');
    const [history, setHistory] = React.useState<{guess:string, certo:number, errado:number}[]>([]);
    const [senha, setSenha] = React.useState(code());
    const [revelar, setRevelar] = React.useState(false);
    const [guess, setGuess] = React.useState('');

    const pass = code();

    const Revelar = () =>{
        Alert.alert('Resposta Correta: ' + pass);
        Alert.alert('Aperte o botão reiniciar para jogar novamente');
    };

    const Tentativa = () =>{
        const {certo, errado} = ChecarTentativa(pass, guess);
        setHistory([{guess, certo, errado}, ...history]);
        setGuess('');
        if (certo === 4){
            Alert.alert('Você Ganhou!');
            setRevelar(true);
        }
    }

    const Reiniciar = () =>{
        setSenha(code());
        setGuess('');
        setHistory([]);
        setRevelar(false);
    }


    return (
        <View>
            <View style={style.container}>
                <Text style={style.titleText}>Jogo da Senha</Text>
            </View>
            <TextInput
                    style={style.inputBox}
                    placeholder={text}
                    keyboardType="numeric"
                    maxLength={6}
                    value={guess}
                    onChangeText={setGuess}
            />

            <TouchableOpacity
                style={style.buttonGuessContainer}
                onPress={Tentativa}
            >
                <Text style={style.textButton}>Enviar Tentativa</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.buttonRevelar}
                onPress={Revelar}
            >
                <Text style={style.textButtonRevelar}>Revelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.ButtonReiniciar}
                onPress={Reiniciar}
            >
                <Text>Reiniciar</Text>
            </TouchableOpacity>

            <Text style={style.titleHistory}>Historico</Text>

            <View style={style.attemptContainer}>
                <FlatList
                    data={history}
                    keyExtractor={(_, idx) => idx.toString()}
                    renderItem={({item, index}) =>(
                        <Text>
                            {history.length - index}: {item.guess} - {item.certo} Números Certos, {item.errado} Números Errados
                        </Text>
                    )}
                    ListEmptyComponent={
                        <Text style={style.textAttemp}>Digite alguma coisa para aparecer aqui</Text>
                    }
                />
            </View>
        </View>
    );    
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:5,
        borderRadius: 5,
        width:250,
        height: 150,
        left:75,
        top: 20,
        backgroundColor:'gray',
    },
    titleText:{
        fontSize: 20,
        fontWeight:400,
    },
    inputBox:{
        height: 40,
        margin: 12,
        borderWidth:1,
        padding: 10,
        top: 40,
    },
    attemptContainer:{
        height:350,
        margin:12,
        borderWidth: 3,
        padding: 10,
        top:100,
    },
    titleHistory:{
        top: 80,
        alignItems:'center',
        justifyContent: 'center',
        left:160,
        fontSize:20,
        fontWeight:600,
    },
    textAttemp:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGuessContainer:{
        top:90,
        left:150,
        width:90,
        height:50,
        backgroundColor: 'gray',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 33.33,
    },
    textButton:{
        left:15,
        fontWeight: 600,
    },
    buttonRevelar:{
        top:39,
        left:20,
        width:90,
        height: 50,
        backgroundColor: 'gray',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 33.33,
    },
    textButtonRevelar:{
        fontWeight: 600,
    },
    ButtonReiniciar:{
        left:280,
        top:-10,
        width:90,
        height:50,
        borderRadius: 33.33,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent: 'center',
    },
});