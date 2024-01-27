import { useState } from 'react';
import { TodoType, TodosHookReturnType } from '../types.ts';


const defaultTodos = [
    {id :1, text:'Hacer la cama'},
    {id :2, text:'Sacar el perro'},
    {id :3, text:'Hacer la compra'},
]

const TodosHook: () => TodosHookReturnType = () => {
    const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const addTodo = (text: string) => {
        if (text.length < 1) return;
        const newTodo = {
            id: todos.length + 1,
            text: text
        };
        setTodos([...todos, newTodo]);
    };

    return [todos, deleteTodo, addTodo];
};

export default TodosHook;