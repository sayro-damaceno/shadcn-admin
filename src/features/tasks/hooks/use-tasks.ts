import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { type Task } from '../data/schema'

// Função para fazer a requisição
async function fetchTasks(): Promise<Task[]> {
  const response = await api.get('/api/tasks')
  return response.data
}

// Hook personalizado usando TanStack Query
export function useTasks() {
  return useQuery({
    queryKey: ['tasks'], // Chave única para o cache
    queryFn: fetchTasks,
    staleTime: 5 * 60 * 1000, // 5 minutos
    refetchOnWindowFocus: true,
  })
}

// Hook para buscar uma task específica
export function useTask(taskId: string) {
  return useQuery({
    queryKey: ['task', taskId],
    queryFn: async () => {
      const response = await api.get(`/api/tasks/${taskId}`)
      return response.data as Task
    },
    enabled: !!taskId, // Só executa se taskId existir
  })
}
