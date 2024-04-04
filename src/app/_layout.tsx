// O Expo entende os arquivos começados com _ como arquivo de configuração das rotas
import "@/styles/global.css"

import { Slot } from "expo-router"

import { Loading } from "@/components/loading"

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto"

export default function Layout() {
  // As fontes são carregadas de forma assíncrona, sendo necessário garantir que as fontes sejam carregadas no dispositivo antes do app abrir
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return <Loading />
  }
  
  {/* O Slot repassa toda a estrutura de navegação da aplicação */}
  return <Slot />
}
