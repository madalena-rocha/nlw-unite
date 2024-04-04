// O Expo entende os arquivos começados com _ como arquivo de configuração das rotas
import "../styles/global.css"

import { Slot } from "expo-router"

export default function Layout() {
  // O Slot repassa toda a estrutura de navegação da aplicação
  return <Slot />
}
