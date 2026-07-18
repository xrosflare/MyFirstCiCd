import { useState } from "react"




export default function ToDoList (){
 const [item, setItem] = useState<string>('')
 const [updateItem, setUpdateItem] = useState<string>('')
  const [list, setList]= useState<string[]>([])
  const [doneList, setDoneList]= useState<string[]>([])
  const [open,setOpen]= useState(false)

let TaskList = [{
  id:1,
  task:'example',
  done:false
}]

function CreateTask (id:number, task:string,done:boolean){
TaskList.push({id:id,task:task, done:false})
}

function DeleteTask(id:number){
return TaskList.filter(tasks=> tasks.id !== id)

}

function EditTask(id:number, NewTask:string,status:boolean){
  const RemoveTask =  TaskList.filter(tasks => tasks.id !== id)
  const newTask = {id:id, task:NewTask,done:status}
  RemoveTask.push(newTask)
  setOpen(false)
  return TaskList = RemoveTask
}




  function addItemToList(newItemList:string){
    setList([...list,newItemList])
}
function deleteItemFromList(itemToDelete:string, indexToDelete:number){
const updatedList = list.filter((itemToDelete)=> itemToDelete != list[indexToDelete])
setList(updatedList)
setDoneList([...doneList,itemToDelete])
}

function updateTask(itemToUpdate:string, indexItem:number){
  const updatedTask = list.filter((itemToUpdate)=> itemToUpdate != list[indexItem])
  setList([...updatedTask, itemToUpdate])
}

return<>
 <input
        placeholder='Activitie'
        onChange={(e)=>setItem(e.target.value) }></input>
      <button onClick={()=>addItemToList(item)}>ADD</button>
      <div>This is your to-do list: {list.map((item, index)=>{
          return <li key={index}>{item}
          <button onClick={()=>deleteItemFromList(item,index)}>DONE</button>
          <button onClick={()=>updateTask(item,index)}>EDIT</button>
          <button onClick={()=>setOpen(true)}>EDIT</button>
          {!open && (
            <>
            <input placeholder="Type the new task" onChange={(e)=>setUpdateItem(e.target.value)}></input>
            <button onClick={()=>EditTask(index, updateItem,false)}>SAVE</button>
            </>
          )
          }
          </li>

        })}</div>
        
        <div>Here is your done list:
          {doneList.map((item,index)=>{
            return <li key={index} >{item}</li>
          })}
        </div>
        </>

}

//next step will be to create a modal to edit the tasks when clicking edit 