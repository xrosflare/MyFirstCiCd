import './App.css';
import ToDoList from './Components/CreateList';
import FootAvaliator from './Components/CreateList/Avaliator';
import WeatherCheck from './Components/WeatherCheck';

function App() {
  return (
    <>
      <div>Bellow will be your to-do list</div>
      <div>
        <ToDoList />
      </div>
      <div>
        <FootAvaliator />
      </div>
      <div>
        <WeatherCheck />
      </div>
    </>
  );
}

export default App;
