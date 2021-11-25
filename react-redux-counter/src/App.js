
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {addTask} from './Redux/Actions/Action'
import{useState} from 'react'
import List from './component/List';

function App() {
  
  const dispatch = useDispatch()

  const [newText, setNewText] = useState('')
  const [lists, setLISTS] = useState(true)
 
  
  const todos = useSelector(state => state.todos)
  return (
    <div className="todolist">
    <div className="heading">
        <h1 className="title"> todolist</h1>
    </div>
        <input
            type="text"
            onChange={(e)=> setNewText(e.target.value)}
            value={newText}
            />
 
        <button onClick={()=>{if(newText!=''){dispatch(addTask({id:Math.random(),isDOne:false,text:newText}));setNewText('')}else{alert('text required')}}}>Add</button>
       <button onClick={()=>setLISTS(!lists)}>{lists?'LISTS':'DONE'}</button>
    <div className="list">
      <ul>
          
        {lists?todos.map(el=><List list={el}/>):todos.filter(el=>el.isDone==true).map(el=><List list={el}/>)}
         
      </ul>
    </div>
</div>
    
  );
}

export default App;