export type TodoType = {
    id: number;
    text: string;
};

export type TodosHookReturnType = [
    TodoType[],
    (id: number) => void,
    (text: string) => void
]

export type TodosProps = {
    todos: TodoType[];
    delete: (id: number) => void;
};