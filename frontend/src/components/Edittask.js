import React from 'react';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar';
const Edittask = () => {
    const [title,SetTitle] = useState("");
    const [description,SetDescription] = useState("");
    const [todo,SetTodo] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5555/${id}`).then((response)=>{
            SetTitle(response.data.title);
            SetDescription(response.data.description);
            SetTodo(response.data.todo);
        })
    },[])
    const handleedittask = ()=>{
        const data = {
            title:title,
            description:description,
            todo:todo
        };
       return axios.put(`http://localhost:5555/${id}`,data).then(()=>{
            navigate("/home")
        }).catch((err)=>{console.log(err)})
    }
    return (
        <div>
            <Navbar/>           
            <input className="form-control form-control-lg" value={title} onChange={(e)=>{SetTitle(e.target.value)}} type="text" placeholder="title" aria-label=".form-control-lg example"/>
            <input className="form-control" type="text" value={description} onChange={(e)=>{SetDescription(e.target.value)}} placeholder="descritpion" aria-label="default input example"/>
            <input className="form-control form-control-sm" value={todo} onChange={(e)=>{SetTodo(e.target.value)}}type="text" placeholder="task" aria-label=".form-control-sm example"/>
            <button className="btn-primary" onClick={handleedittask}>edit</button>
            
        </div>
    );
}

export default Edittask;
