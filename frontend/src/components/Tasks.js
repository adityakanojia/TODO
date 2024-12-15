import React from 'react';
import { Link } from 'react-router-dom';


const Tasks = (props) => {
    return (
        <div>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.description}</h6>
                <p className="card-text">{props.todo}</p>
                <Link to={`/tasks/delete/${props.id}`}className="card-link">done</Link>
                <Link to={`/tasks/edit/${props.id}`} className="card-link">edit</Link>
            </div>
            </div>   
        </div>
    );
};




export default Tasks;
