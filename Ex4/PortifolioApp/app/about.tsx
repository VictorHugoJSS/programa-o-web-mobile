import { useRouter } from "expo-router";
import { Animated, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    testStyle: {
        fontSize: 20,
    }
});

export default function About(){
    return(
        <View style={style.container}>
            <View>
                <Text style={style.testStyle}>
                    O aplicativo foi feito utilizando:{'\n'}
                    React Native + imports:{'\n'}
                        Animated;{'\n'}
                        Pressable;{'\n'}
                        StyleSheet;{'\n'}
                        Text;{'\n'}
                        useColorScheme;{'\n'}
                        View;{'\n'}
                    {'\n'}
                    Expo-Router + imports: {'\n'}
                    useRouter{'\n'}
                </Text>
            </View>
        </View>
    );
}