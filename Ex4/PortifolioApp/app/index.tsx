import { useRouter } from "expo-router";
import { Animated, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Index() {

  const backgroundColorRef = new Animated.Value(0);

  const handlePress = () => {
    Animated.timing(backgroundColorRef,{
      toValue: 1,
      duration: 60,
      useNativeDriver: true
    }).start();
  };

  const handleRelease = () => {
    Animated.timing(backgroundColorRef, {
      toValue:0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  };

  const backgroundColor = backgroundColorRef.interpolate({
    inputRange: [0,1],
    outputRange: ["#0d8aeb", "#042d46"],
  });

  return (
    <View style={style.container}>

      <Text style={[style.colorText, {top:-40}, {fontSize: 40}, {justifyContent:'center'}, {alignItems:'center'}]}>Menu</Text>
      <View style={{top:20}}>
        <Pressable onPress={() => navigation.navigate("/about")} onPressIn={handlePress} onPressOut={handleRelease}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Sobre</Text>
          </Animated.View>
        </Pressable>
      </View>

      <View style={{top:40}}>
        <Pressable onPress={() => navigation.navigate("/experiencias")} onPressIn={handlePress} onPressOut={handleRelease}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Experiencias Academica</Text>
          </Animated.View>
        </Pressable>
      </View>

      <View style={{top:60}}>
        <Pressable onPressIn={handlePress} onPressOut={handleRelease} onPress={() => navigation.navigate("/projetos")}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Projetos</Text>
          </Animated.View>
        </Pressable>
      </View>

      <View style={{top:80}}>
        <Pressable onPressIn={handlePress} onPressOut={handleRelease} onPress={() => navigation.navigate("/Jogo")}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Jogo</Text>
          </Animated.View>
        </Pressable>
      </View>
      
      <View style={{top:100}}>
        <Pressable onPressIn={handlePress} onPressOut={handleRelease} onPress={() => navigation.navigate("/experienciaProfissional")}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Experiencia Profissional</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const navigation = useRouter();
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    colorText:{
      fontSize: 20,
    }
});

const button = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33.33,
    width: 300,
    height: 50,
  },
  buttonText:{
    fontSize: 20,
    color: 'white'
  },
});