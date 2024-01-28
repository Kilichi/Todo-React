import { useState, useEffect } from 'react';
import TodosHook from '../../hooks/TodosContainer';
import { RenderTodos } from '../RenderTodos';
import { ListAdd } from '@icon-park/react';
import './index.css';

function App() {

  const [todos, deleteTodo, addTodo, toggleTodo] = TodosHook();
  const [text, setText] = useState('')

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && text.length > 0) {
      addTodo (text)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEnter)
  })

  return (
    <>
      <h1>Todo <span>APP</span></h1>
      <div className="todos">
        <header>
          <input type="text" className='tittle' placeholder='Cualquier cosa que tengas que hacer...' onChange={(event: React.ChangeEvent<HTMLInputElement>) =>setText(event.target.value)} />
          <button className='button' onClick={() => addTodo(text)}>
            <ListAdd/>
          </button>
        </header>
        <section>
          <RenderTodos data={todos} handleDelete={(id: number) => deleteTodo(id)} handleTogge={(id:number) => toggleTodo(id)} />
        </section>
      </div>
    </>
  )

}

export default App