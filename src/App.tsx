import { useState} from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState<string>('')
  const [list, setList]= useState<string[]>([])

  function addItemToList(newItemList:string){
    setList([...item, newItemList])
    setItem('')

  }

  return (
    <>
    <div>
      here will be my to-do list
        <input
        placeholder='Activitie'
        onChange={(e)=>setItem(e.target.value) }></input>
      <button onClick={()=>addItemToList(item)}>ADD</button>
      <div>This is the last item {item}</div>
      <div>This is your to-do list: {list.map((item, index)=>{
        return <li key={index}>{item}</li>
      })}</div>
      <div>length {list.length}</div>
    </div>
    </>
  )
}

export default App
