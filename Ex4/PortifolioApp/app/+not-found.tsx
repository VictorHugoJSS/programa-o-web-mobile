import {View, StyleSheet, useColorScheme} from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFoundScreen(){
    return (
        <>
            <Stack.Screen options={{title: 'Pagina Não Encontrada'}}/>
            <View>
                <Link href="/">
                    Volte para o menu Principal!
                </Link>
            </View>
        </>
    );
}