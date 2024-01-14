import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = (props) => {

    const {id, name, description, isDone} = props.todo;
    const {modifyTodoState, deleteTodo, modifyTodoContent, isCreating, darkMode} = props;

    return(
        <li className={`todo ${darkMode?"todo-dark":"todo-light"}`}>
            <p>id: {id}</p>
            <div className="todo-top-container">
                <p>{name}</p>
                <div className="interaction-bar">
                    <button className={isDone?"is-done":"is-not-done"} onClick={()=>modifyTodoState(id)}></button>
                    <button className={`delete ${darkMode?"icon-dark":"icon-light"}`} onClick={()=>deleteTodo(id)}><MdDelete /></button>
                    {
                        !isCreating &&
                        <button className={`edit ${darkMode?"icon-dark":"icon-light"}`} onClick={()=>modifyTodoContent(id)}><FaEdit /></button>
                    }
                </div>
            </div>
            <div className="todo-bottom-container">
                <p>{description}</p>
            </div>
        </li>
    )
}

export default Todo;