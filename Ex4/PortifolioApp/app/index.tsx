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

      <Text style={style.colorText}>Menu</Text>
      <View style={{top:20}}>
        <Pressable onPress={() => navigation.navigate("/about")} onPressIn={handlePress} onPressOut={handleRelease}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Sobre</Text>
          </Animated.View>
        </Pressable>
      </View>

      <View style={{top:40}}>
        <Pressable onPress={() => navigation.navigate("/Academic")} onPressIn={handlePress} onPressOut={handleRelease}>
          <Animated.View style={[button.container, {backgroundColor}]}>
            <Text style={button.buttonText}>Academico</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const navigation = useRouter();
const theme = useColorScheme();
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme == "dark" ? 'black':'white',
    },
    colorText:{
      color: theme == "dark" ? 'white':'black',
      fontSize: 20,
    }
});

const button = StyleSheet.create({
  container:{
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 33.33,
    width: 300,
    height: 50,
  },
  buttonText:{
    top:10,
    fontSize: 20,
    right: 10,
    color: 'white'
  },
});