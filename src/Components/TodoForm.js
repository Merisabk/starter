import React, {useState} from 'react'
import '../App.css';

const TodoForm = () => 

{
    const [description, setDescription] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        alert(`${description}`);
        
    }

    function updateDescription (event) {
        setDescription(event.target.value);

    }
  
    return (
        <>
        <div className="addEditTodo">
            <h3>Add/Edit Todo</h3>
            <form className= "container" onSubmit={handleSubmit}>
                Description: <input type="text" name="todoDescription" className="form-control" placeholder="Todo Description" onChange={updateDescription}></input> <br />
                Created on: 09/12/2019 @ 12:22:23
                <br />
                Completed:
                <br />
                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
        </>

    )
}
export default TodoForm;