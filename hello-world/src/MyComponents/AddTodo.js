import React, { useState } from "react"

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title){
            alert("Please write a task to add!");
        }
        else{
        props.addTodo(title);
        setTitle("");
        }
    }
    return (
        <div className="container my-3">
            <h2 className="text-center">Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="title" />
                </div>
              
                <button type="submit" className="btn btn-success">Add Task</button>
            </form>
        </div>
    )
}