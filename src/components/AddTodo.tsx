import { useRef } from "react";
import './AddTodo.css'

type AddTodoProps = {
    onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = props => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const addTodoText = inputRef.current!.value;
        props.onAddTodo(addTodoText)
    };

    return (
        <form onSubmit={handleSubmit} className="form-control">
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={inputRef} />
            </div>
            <button type="submit">ADD</button>
        </form>
    );
};
 
export default AddTodo;
