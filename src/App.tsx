import './App.css'
import ToDoList from './Components/CreateList'
import FootAvaliator from './Components/CreateList/Avaliator'

function App() {
 
  return (
    <>
    <div>
      Bellow will be your to-do list
    </div>
    <div>
       <ToDoList/>

    </div>
<div>
  <FootAvaliator/>
</div>
    </>
  )
}

export default App
