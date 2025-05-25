import { useColorScheme, StyleSheet, Text, View } from "react-native";

export default function Projetos(){
    
    return (
        <View style={style.fundo}>
            <Text>
                Projetos feito na universidade:
                {'\n'}Flavourit
                {'\n'}Labirinto POO
                {'\n'}Portal de Extensão da Unicap
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
 fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },

});