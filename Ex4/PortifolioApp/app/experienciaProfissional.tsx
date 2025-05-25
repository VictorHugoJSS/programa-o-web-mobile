import { View, Text, StyleSheet} from "react-native";

const style = StyleSheet.create({
    fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },
});
export default function experienciaProfissional(){
    return (
        <View style={style.fundo}>
            <Text>Não Possuo Experiencia Profissional</Text>
        </View>
    );
}