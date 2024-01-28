import { TodoType } from "../types";
import { Delete } from '@icon-park/react';

export const RenderTodos = ({ data, handleDelete, handleTogge}: { data: TodoType[]; handleDelete: any, handleTogge: any}) => {
  if (data.length === 0) return (
    <div className="todos_container">
      <h3 className="no_todos">No hay tareas</h3>
    </div>
  )
  return (
      <div className="todos_container">
        {data.map((_todos: TodoType) => (
          <div className={`todo_item todo_${_todos.id}`} key={_todos.id}>
            <header>{_todos.text}</header>
            <div className="actions">
              <input type="checkbox" className={"todo_item_check"} checked={_todos.done} onChange={() => handleTogge(_todos.id)}></input>
              <button className={"todo_item_delete"} onClick={() => {
                handleDelete(_todos.id)
              }}><Delete/></button>
            </div>
          </div>
        ))}
    </div>
    )
  }
