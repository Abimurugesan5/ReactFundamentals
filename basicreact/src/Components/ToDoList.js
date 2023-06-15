import React,{useState} from 'react';
import '../Styles/ToDoList.css'
function ToDoList() {
    const[input,setInput] = useState('');
    const[item, setItem] = useState([]);
    return(
    <div>
        <input type='text' placeholder='Add to Your List' onChange={(e)=>{setInput (e.target.value)}}></input>
      <button onClick={() => {setItem([...item,input])}}>
        Add List
      </button>
      <button onClick={()=>{setItem([])}}>Reset</button>
      <ul>
        {item.map((i)=>{
            return <li>{i}</li>
        })}
      </ul>
    </div>
  );
}

export default ToDoList;