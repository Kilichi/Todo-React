import { TodoType } from "../types";

export const RenderTodos = ({ data, handleDelete}: { data: TodoType[]; handleDelete: any}) => {
    return (
      <div className="todos_container">
        {data.map((_todos: TodoType) => (
          <div className={`todo_item todo_${_todos.id}`} key={_todos.id}>
            <input type="checkbox"></input>
            <header>{_todos.text}</header>
            <button onClick={() => {
              handleDelete(_todos.id)
            }}>Eliminar</button>
          </div>
        ))}
    </div>
    )
  }