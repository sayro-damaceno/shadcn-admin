import axios from 'axios'
import { useAuthStore } from '@/stores/auth-store'

// Configuração base do axios
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
})

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().auth.accessToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para tratar respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido - redirect para login
      useAuthStore.getState().auth.reset()
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  }
)

export default api
