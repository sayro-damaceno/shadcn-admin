import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { api } from '@/lib/api'
import { type Task } from '../data/schema'

// Hook para criar nova task
export function useCreateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newTask: Omit<Task, 'id'>) => {
      const response = await api.post('/api/tasks', newTask)
      return response.data
    },
    onSuccess: () => {
      // Invalida e refetch a lista de tasks
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success('Task created successfully!')
    },
    onError: () => {
      toast.error('Failed to create task')
    },
  })
}

// Hook para atualizar task
export function useUpdateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Task> & { id: string }) => {
      const response = await api.patch(`/api/tasks/${id}`, updates)
      return response.data
    },
    onSuccess: (_, { id }) => {
      // Invalida queries relacionadas
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['task', id] })
      toast.success('Task updated successfully!')
    },
    onError: () => {
      toast.error('Failed to update task')
    },
  })
}

// Hook para deletar task
export function useDeleteTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (taskId: string) => {
      await api.delete(`/api/tasks/${taskId}`)
      return taskId
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success('Task deleted successfully!')
    },
    onError: () => {
      toast.error('Failed to delete task')
    },
  })
}
