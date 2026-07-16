import { useState } from "react"




export default function ToDoList (){
 const [item, setItem] = useState<string>('')
  const [list, setList]= useState<string[]>([])

  function addItemToList(newItemList:string){
    setList([...list,newItemList])


}
function deleteItemFromList(itemToDelete:string, indexToDelete:number){
const updatedList = list.filter((itemToDelete)=> itemToDelete != list[indexToDelete])
setList(updatedList)

}
return<>
 <input
        placeholder='Activitie'
        onChange={(e)=>setItem(e.target.value) }></input>
      <button onClick={()=>addItemToList(item)}>ADD</button>
      <div>This is your to-do list: {list.map((item, index)=>{
          return <li key={index}>{item}
          <button onClick={()=>deleteItemFromList(item,index)}>DONE</button>
          </li>
        })}</div>
        </>

}