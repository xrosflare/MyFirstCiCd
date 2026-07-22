import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

type TaskType = {
id:string,
task:string,
done:boolean
}
// let TaskList: TaskType[]=[]


export default function ToDoList (){
 const [item, setItem] = useState<string>('')
 const [editedItem, setEditedItem] = useState<string>('')
  const [open,setOpen]= useState(false)
  const [taskList,setTaskList]= useState<TaskType[]>([])
  const [doneList,setDoneList]= useState<TaskType[]>([])


function CountId(){
 const newId = uuidv4()
  return newId
}

function createTask (id:string, task:string,done:boolean){
  // TaskList.push({id:id,task:task, done:done})
  setTaskList([...taskList, {id:id,task:task, done:done} ])
}

function doneTask(id:string){
 const removedTask= taskList.filter(task=> task.id != id)
 setTaskList([...removedTask])
 setDoneList([...removedTask])
}

function editTask(id:string, task:string, status:boolean){

setTaskList(taskListPrevious => taskListPrevious.map(item=> {
  if(item.id == id){
    return {...item, task:task }
  }
  return item
}))
}


return<>
 <input
        placeholder='Activitie'
        onChange={(e)=>setItem(e.target.value) }></input>
      <button onClick={()=>createTask(CountId(),item,false)}>ADD</button>
      <div>This is your to-do list: 
        {taskList.map((item, index)=>{
          return <li key={item.id}>{item.task}
          <button onClick={()=>setOpen(true)}>EDIT</button>
          <button onClick={()=>setOpen(true)}>DONE</button>
          {open && (
            <>
            <input placeholder="Type the new task" onChange={(e)=>setEditedItem(e.target.value)}></input>
            <button onClick={()=>editTask(item.id, editedItem,false)}>SAVE</button>
            </>
          )
          }
          </li>

        })}</div>
        
        <div>Here is your done list:
          {taskList.map((item,id)=>{
            return <li key={id} >{item.task}</li>
          })}
        </div>
        </>

}

//next step will be to create a modal to edit the tasks when clicking edit 