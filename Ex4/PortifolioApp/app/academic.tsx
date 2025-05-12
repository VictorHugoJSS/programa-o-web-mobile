import { Link } from "expo-router";
import { StyleSheet, Text, View, useColorScheme } from "react-native";


const theme = useColorScheme();
const style = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "dark" ? 'black' : 'white',
  },
  colorText:{
    color: theme === "dark" ? 'white' : 'black',
  },
})


export default function Academico(){
    return(
        <View style={style.fundo}>
            <Text style={style.colorText}>lorem ipsum</Text>

            <Link href="/" style={style.colorText}>Voltar</Link>
        </View>
    );
}

