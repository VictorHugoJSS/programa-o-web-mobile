import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Home"}}/>
      <Stack.Screen name="about" options={{title: "Sobre"}}/>
      <Stack.Screen name="experiencias" options={{title: "Experiencia Academica"}}/>
      <Stack.Screen name="experienciaProfissional" options={{title:"Experiencia Profissional"}}/>
      <Stack.Screen name="projetos" options={{title:"Projetos"}}/>
      <Stack.Screen name="Jogo" options={{title:"Jogo"}}/>
    </Stack>
  );
}
