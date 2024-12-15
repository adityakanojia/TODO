import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
const DeleteTask = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    const handledeletebutton=()=>{
        axios.delete(`http://localhost:5555/${id}`).then(()=>{
            navigate("/home")
        }).catch((err)=>{console.log(err)})
    }
    return (
        <div className='justify-content-center'>
            <button className='btn btn-primary justify-content-center' onClick={handledeletebutton}>are you sure?</button>
        </div>
    );
}

export default DeleteTask;
