import { create } from "zustand"
import { persist } from "zustand/middleware"

interface StoreState {
  boards: {
    id: string
    boardName: string
    description: string
    columns:
      | {
          name: string
          tasks: {
            id: string
            name: string
            description: string
            subtasks: {
              task: string
              completed: boolean
            }[]
          }[]
        }[]
      | []
  }[]
  createNewBoard: (data: {
    id: string
    boardName: string
    description: string
    columns: never[]
  }) => void

  addColumnToBoard: (data: {
    id: string
    newColumn: {
      name: string
      tasks: []
    }
    columns: []
  }) => void

  addTaskToColumn: (data: {
    id: string
    boardId: string
    columnInfo: {
      name: string
      index: number
    }
    description: string
    title: string
    subtasks:
      | {
          completed: boolean
          task: string
        }[]
      | undefined
  }) => void
}

export const useBoardStore = create<StoreState>()(
  persist(
    (set) => ({
      boards: [],

      //   creates a new board
      createNewBoard: (data) =>
        set((state) => ({
          boards: [...state.boards, data],
        })),

      // adds a column to the board
      addColumnToBoard: (data) =>
        set((state) => ({
          boards: state.boards.map((board) =>
            board.id === data.id
              ? { ...board, columns: [...board.columns, data.newColumn] }
              : board
          ),
        })),

      // add tasks to the column in the board
      addTaskToColumn: (data) =>
        set((state) => {
          const updatedBoards = state.boards.map((board) => {
            if (board.id === data.boardId) {
              const updatedColumns = [...board.columns]

              const col = updatedColumns.find(
                (column) => column.name === data.columnInfo.name
              )

              col?.tasks.push({
                id: data.id,
                description: data.description,
                name: data.title,
                subtasks: data.subtasks ? data.subtasks : [],
              })
              return { ...board, columns: updatedColumns }
            }
            return board
          })

          return { boards: updatedBoards }
        }),
    }),
    {
      name: "my_sync_board",
    }
  )
)