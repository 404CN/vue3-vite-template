import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const app = ref('Vue 3 + Vite + Pinia + Ts')

  const isDarkTheme = ref(false);

  const setTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
  }

  return { app, isDarkTheme, setTheme }
})