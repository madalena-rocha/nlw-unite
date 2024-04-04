import { View, Text } from "react-native"

export default function Home() {
  return (
    // No React Native, o flexbox já é ativo por padrão
    <View className="flex-1 bg-green-500 items-center justify-center">
      <Text className="text-white text-2xl">Hello React Native!</Text>
    </View>
  )
}
