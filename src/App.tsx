import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ToDoList from './Components/CreateList';
import FootAvaliator from './Components/CreateList/Avaliator';
import WeatherCheck from './Components/WeatherCheck';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />

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
