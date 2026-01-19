// Exemplo de como usar nos formulários/diálogos
import {
  useCreateTask,
  useUpdateTask,
  useDeleteTask,
} from '../hooks/use-tasks-mutations'
import { useUsers } from './users-provider'

// Se você quiser usar o pattern similar

function AddTaskDialog() {
  const { mutate: createTask, isPending: isCreating } = useCreateTask()
  const { setOpen } = useUsers() // ou useTasks se você criar um TasksProvider similar

  const handleSubmit = (formData: TaskFormData) => {
    createTask(formData, {
      onSuccess: () => {
        setOpen(null) // Fecha o modal
        // Form será resetado automaticamente pelo React Hook Form
      },
    })
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <Button type='submit' disabled={isCreating}>
          {isCreating ? 'Creating...' : 'Create Task'}
        </Button>
      </form>
    </Dialog>
  )
}

function TaskActions({ task }: { task: Task }) {
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask()

  const handleDelete = () => {
    if (confirm('Are you sure?')) {
      deleteTask(task.id)
    }
  }

  return (
    <Button variant='destructive' onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete'}
    </Button>
  )
}
