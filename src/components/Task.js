import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <h3>{task.text} <DeleteForeverIcon onClick={onDelete} />
            </h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
