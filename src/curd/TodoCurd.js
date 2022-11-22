import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import TodoItem from '../page/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, clearList } from '../curd/todosslice'
import { editTodo, removeTodo } from '../curd/todosslice';
import { Button } from 'bootstrap';
import '../Registration.css';
function Todocurd() {
    const [input, setInput] = useState({
        text: ""
    });
    const [toggleButton, setToggleButton] = useState(false)

    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();


    const handleAddTodoCurd = (e) => {
        e.preventDefault()
        if (input.id) {
            dispatch(editTodo(input))
            setInput({ text: "", id: "" })
              
        } else {
            dispatch(addTodos(input.text))
            setInput({ text: "" })
            setToggleButton(false)
        }
        

    }


    const handleChange = (e) => {
        if (e.target.name === "text") {

            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleTodoDone = (id) => {
        dispatch(removeTodo(id))
    }


    return (
        <div>
       
            <form className='Form' onSubmit={handleAddTodoCurd}>
            <h1 className='Registration_design'>Todo app curd operation</h1>
                <input  className='input_curd'
                    type="text"
                    name="text"
                    onChange={handleChange}
                    value={input?.text || ''}
                />


                {
                    toggleButton ? <Fab color="secondary" aria-label="add" className="icon" type="submit" >
                        <EditIcon /></Fab> : <Fab  color="secondary" aria-label="add" className="icon" type="submit" >
                        <AddIcon />   </Fab>
                }


            </form>
            <div className='todo'>

                {count > 0 && todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        onCheck={handleTodoDone}
                        setInput={setInput}
                       setToggleButton={setToggleButton}
                    />

                ))}
                {count === 0 && <p></p>}
            </div>
        
        </div>
    )
}
export default Todocurd;