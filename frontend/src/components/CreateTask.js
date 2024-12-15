import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateTask = () => {
    const [title,SetTitle] = useState("");
    const [description,SetDescription] = useState("");
    const [todo,SetTodo] = useState("");
    const navigate = useNavigate();
    const handlesavetask = ()=>{
        const data = {
            title:title,
            description:description,
            todo:todo
        };
       return axios.post("http://localhost:5555/tasks",data).then(()=>{
            navigate("/home")
        }).catch((err)=>{console.log(err)})
    }
    return (
        <div>
            <Navbar/>           
            <input className="form-control form-control-lg" value={title} onChange={(e)=>{SetTitle(e.target.value)}} type="text" placeholder="title" aria-label=".form-control-lg example"/>
            <input className="form-control" type="text" value={description} onChange={(e)=>{SetDescription(e.target.value)}} placeholder="descritpion" aria-label="default input example"/>
            <input className="form-control form-control-sm" value={todo} onChange={(e)=>{SetTodo(e.target.value)}}type="text" placeholder="task" aria-label=".form-control-sm example"/>
            <button className="btn-primary" onClick={handlesavetask}>create</button>
            
        </div>
    );
}

export default CreateTask;
