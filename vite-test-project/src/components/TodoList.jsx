import { useState } from "react";
import Todo from './Todo';

const initialTodo = {
    id:"",
    name:"",
    description:"",
    isDone:false
}

const TodoList = ({darkMode}) => {
    const [todo,setTodo] = useState(initialTodo);
    const [todoList, setTodoList] = useState([]);
    const [isCreating, setIsCreating] = useState(true);

    const handleTodo = (e) => {
        setTodo({
            ...todo,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        const modifiedTodo = {...todo,id:Date.now()};
        e.preventDefault();

        //Add todo to the list
        setTodoList([...todoList,modifiedTodo]);
        //Clean todo
        setTodo(initialTodo)
    }

    const handleEdit = (e) => {
        e.preventDefault();
    }

    const modifyTodoContent = (id) => {
        setIsCreating(false);

        const modifiedTodoList = todoList.map(todoElement => {
            if(todoElement.id === id)
            {
                const modifiedTodo = {...todo,id:todoElement.id}
                todoElement = modifiedTodo;
            }
            
            return todoElement;
        })

        setTodoList(modifiedTodoList);
        setTodo(initialTodo)
    }

    const modifyTodoState = (id) => {
        const modifiedTodoList = todoList.map(todoElement => {
            if(todoElement.id === id)
                todoElement.isDone = !todoElement.isDone;
            
            return todoElement;
        })

        setTodoList(modifiedTodoList);
    }

    const deleteTodo = (id) => {
        const modifiedTodoList = todoList.filter(todoElement => todoElement.id!=id);
        setTodoList(modifiedTodoList);
    }

    return(
        <div className="page">
            <button onClick={()=>{
                setIsCreating(!isCreating)
                setTodo(initialTodo)
            }}>{isCreating?"Creation Mode":"Editing Mode"}</button>
            <form className="todo-input" onSubmit={(e)=>{
                if(isCreating){
                    handleSubmit(e);
                }
                else{
                    handleEdit(e);
                }
            }}>
                <h2>Create a new todo for the list</h2>
                <input className="todo-input-element" type="text" name="name" value={todo.name} onChange={(e)=>handleTodo(e)}/>
                <input className="todo-input-element" type="text" name="description" value={todo.description} onChange={(e)=>handleTodo(e)}/>
                {
                    isCreating &&
                    <button className="todo-input-button" type="submit">Create Todo</button>
                }
            </form>
            <div className="todo-content-container">
                {
                    todoList.length <= 0 && <p>Please create a new todo</p>
                }
                {
                    todoList.length > 0 && (
                       <ul className="todolist-container">
                         {
                            todoList.map(todoElement => (
                                <Todo key={todoElement.id} 
                                    todo={todoElement} 
                                    modifyTodoState={modifyTodoState} 
                                    deleteTodo={deleteTodo}
                                    modifyTodoContent={modifyTodoContent}
                                    isCreating={isCreating}
                                    darkMode={darkMode}
                                />
                            ))
                         }
                       </ul>
                    )
                }
            </div>
        </div>
    )
}

export default TodoList;