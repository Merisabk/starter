import React from 'react'
import '../App.css';
import TodoForm from './TodoForm';
import { Link } from 'react-router-dom';

const AllToDos = () => 
{
    return (
        <>
        <h2>Todos List</h2>
        <button><Link to="/form">Add</Link></button>
        <table className="todo-table container-fluid">
            <tr>
                <th>Description</th>
                <th>Date created</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Visit Nepal</td>
                <td>09/06/2022</td>
                <td>book tickets</td>
            </tr>
        </table>
        </>
    )
}
export default AllToDos;