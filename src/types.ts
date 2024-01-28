export type TodoType = {
    id: number;
    text: string;
    done: boolean;
};

export type TodosHookReturnType = [
    TodoType[],
    (id: number) => void,
    (text: string) => void,
    (id: number) => void
]

export type TodosProps = {
    todos: TodoType[];
    delete: (id: number) => void;
};