import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask,doneTask} from '../Redux/Actions/Action'
import Edit from './Edit'

function List({list}) {
    const dispatch = useDispatch()
    return (
        <div className='list'>
            <li className={list.isDone?'done':null}>{list.text}</li>
            <button onClick={()=> dispatch(deleteTask(list.id))}>Delete</button>
            <Edit list={list}/>
            <button className={list.isDone?'ydone':'xdone'} onClick={()=>dispatch(doneTask(list.id))}>{list.isDone?'done':'notdone'}</button>
        </div>
    )
}

export default List