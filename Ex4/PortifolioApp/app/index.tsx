import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

const navigation = useRouter();
const theme = useColorScheme();
const style = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "dark" ? 'black' : 'white',
  },
  colorText:{
    color: theme === "dark" ? 'white': 'black',
  },
  ButtonContainer:{
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 5,
    backgroundColor: "#0d8aeb",
    width: 300,
    height: 50,
  },
})

export default function Index() {

  return (
    <View style={style.fundo}>
      <View>
        <Pressable style={style.ButtonContainer} onPress={() => navigation.navigate('/about')}>
          <Text style={style.colorText}>Sobre</Text>
        </Pressable>
      </View>
      <Link href="/academic" style={style.colorText}>Acadêmico</Link>

    </View>
  );
}