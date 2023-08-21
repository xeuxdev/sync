"use client"

import React, { useState } from "react"
import { useWindowSize } from "@/hooks/useWindowSize"
import { AddColumn } from "./add-new-column"
import TaskInfo, { TaskProps } from "../tasks/task-info"
import { useBoardContext } from "@/context/board-context"
import ColumnHeader from "./column-header"
import { MoreVertical } from "lucide-react"
import EditTaskInfo from "../tasks/edit-task-info"

function BoardColumn() {
  const { width } = useWindowSize()
  const { currentBoard } = useBoardContext()

  return (
    <>
      <div
        style={{
          minWidth: `${width}px`,
        }}
        className="relative flex h-full gap-10 px-40 overflow-scroll pt-14"
      >
        <section key={currentBoard?.boardName} className="flex gap-10">
          {/* columns */}

          {currentBoard?.columns?.map((column, index) => (
            <section
              className="flex flex-col min-w-[17.8125rem] gap-10 "
              key={column.name}
            >
              <ColumnHeader
                info={{
                  columnName: column.name,
                  columnIndex: index,
                  boardId: currentBoard.id,
                }}
              />

              {column.tasks?.map((task) => (
                <React.Fragment key={task.id}>
                  <div className="w-[17.8125rem] rounded-lg p-5 bg-muted-foreground cursor-pointer flex items-center justify-between">
                    <TaskInfo task={{ ...task, column: column.name }} />
                  </div>
                </React.Fragment>
              ))}
            </section>
          ))}

          <AddColumn />
        </section>
      </div>
    </>
  )
}

export default BoardColumn
