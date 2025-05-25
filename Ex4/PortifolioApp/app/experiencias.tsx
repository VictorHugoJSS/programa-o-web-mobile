import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },
});

export default function Experiencias(){
    return(
        <View style={style.fundo}>
            <Text>
                Experiencia Academica:
                    {'\n\n'}Linguagem de programação:
                    {'\n'}Python
                    {`\n`}C/C++
                    {'\n'}Java

                    {'\n\n'}Aprendendo atualmente:
                    {'\n'}Rust
                    {'\n'}Html
                    {'\n'}CSS
                    {'\n'}React
                    {'\n'}React-Native

                    {'\n\n'}Projeto de Extensão:
                    {'\n'}Maratona de Programação
            </Text>
        </View>
    );
}