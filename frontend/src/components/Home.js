import React from 'react';
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Tasks from './Tasks';


const Home = () => {
    const [tasks,settasks] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5555/").then(
            (response)=>{
                settasks(response.data.data)
            }
        ).catch((err)=>{console.log(err)})
    },[])
    return (
        <div>
            <Navbar/>
            <div className="text-center my-15">
                {tasks.map((task)=>{
                    return(
                        <Tasks key={task._id} id = {task._id} title={`${task.title}`} description={`${task.description}`} todo={`${task.todo}`}/>
                    )
                })}
            </div>            
        </div>
    );
}

export default Home;
