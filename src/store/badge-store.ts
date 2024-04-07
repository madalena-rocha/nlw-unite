// AsyncStorage para persistir os dados no dispositivo do usuário
// Zustand para ter um estado global compartilhado com toda a aplicação, para saber se o usuário já tem uma credencial ou não 
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type BadgeStore = {
  id: string
  name: string
  email: string
  eventTitle: string
  checkInURL: string
  image?: string
}

type StateProps = {
  data: BadgeStore | null
  save: (data: BadgeStore) => void
}

export const useBadgeStore = create(
  persist<StateProps>(
    (set) => ({
      data: null,

      save: (data: BadgeStore) => set(() => ({ data })),
    }),
    {
      name: "nlw-unite:badge",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
