import { useState } from 'react';
import TodosHook from '../../hooks/TodosContainer';
import { RenderTodos } from '../RenderTodos';
import './index.css';

function App() {

  const [todos, deleteTodo, addTodo] = TodosHook();
  const [text, setText] = useState('')

  return (
    <>
      <h1>Todo APP</h1>
      <div className="todos">
        <header>
          <input type="text" className='tittle' placeholder='Cualquier cosa que tengas que hacer...' onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setText(event.target.value)} />
          <button className='button' onClick={() => addTodo(text)}>Añadir</button>
        </header>
        <section>
          <RenderTodos data={todos} handleDelete={(id: number) => deleteTodo(id)} />
        </section>
      </div>
    </>
  )

}

export default App