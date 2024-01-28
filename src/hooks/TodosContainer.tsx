import { useState } from 'react';
import { TodoType, TodosHookReturnType } from '../types.ts';


const defaultTodos = [
    {id :1, text:'Hacer la cama', done: true},
    {id :2, text:'Sacar el perro', done: false},
    {id :3, text:'Hacer la compra', done: false},
]

const TodosHook: () => TodosHookReturnType = () => {
    const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const addTodo = (text: string) => {
        if (text.length < 1) return;
        const newTodo: TodoType = {
            id: todos.length + 1,
            text: text,
            done: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return [todos, deleteTodo, addTodo, toggleTodo];
};

export default TodosHook;