import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ToDoList from './Components/CreateList/ToDoList';
import FootAvaliator from './Components/CreateList/Avaliator';
import WeatherCheck from './Components/WeatherCheck';

function App() {
  return (
    <div className='AppContainer'>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
        />

      <div className='WeatherContainer'>
        <WeatherCheck />
      </div>
      <div className='ToDoContainer'>
        <ToDoList />
      </div>

      <div className='FootContainer'>
        <FootAvaliator />
      </div>
        </div>
  );
}

export default App;
