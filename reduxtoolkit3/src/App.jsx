import { useSelector,useDispatch } from "react-redux";
import { addTask,deleteTask,completeTask,reopenTask,editdataSave } from "./todoSlice.jsx";
import { useState } from "react";
import "./assets/style.css"


const App=()=>{
  const [txtval,setTxtval]=useState("");
  const[btnWork,setBtnWork]=useState("")
  const[editId,setEditId]=useState("")
  const myTask=useSelector((state)=>state.todo.task)
  const dispatch=useDispatch();
  console.log(myTask);

  const addData=()=>{
    dispatch(addTask({"id":Date.now(),"work":txtval,"status":true}))
  }

  const taskDelete=(id)=>{
    dispatch(deleteTask({id:id}))
  }
  const taskComplete=(id)=>{
    dispatch(completeTask({id:id}))
  }
  const taskReopen=(id)=>{
    dispatch(reopenTask({id:id}))
  }

  const editTask=(id,work)=>{
    setEditId(id);
    setTxtval(work);
    setBtnWork(false)

  }
  const editDataSave=()=>{
    setBtnWork(true)
    dispatch(editdataSave({id:editId,work:txtval}))
  }

  let i=0;
  const ans=myTask.map((key)=>{
    i++;
    return(
      <>
      <tr align="center">
      <td>{i}</td>
      <td>{key.status? key.work:<span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>}</td>
      <td><button onClick={()=>{taskDelete(key.id)}}>Delete</button></td>
      <td><button onClick={()=>{taskComplete(key.id)}}>Complete</button></td>
      <td><button onClick={()=>{taskReopen(key.id)}}>Reopen</button></td>
      <td><button onClick={()=>{editTask(key.id,key.work)}}>Edit</button></td>
      </tr>
      </>
    )
  })
  return(
    <>
   <center>
   <h1 style={{fontStyle:"bold",fontSize:"30px",color:"skyblue"}}>To Do List</h1>
   Enter any Task : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
   {btnWork ? <button onClick={addData}>Add Task</button> : <button onClick={editDataSave}>Edit Save</button>}

    <br/><br/>
   <hr/>
   <table width="500" bgcolor="pink" border="1" align="center">
   <tr bgcolor="skyblue">
   <th>sr No</th>
   <th colspan="5">Your Task</th>
   
   </tr>
   {ans}
   </table>
   </center>
    </>
  )
}
export default App;