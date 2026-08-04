import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';
type TaskType = {
  id: string;
  task: string;
  done: boolean;
};
export const successTime: number = import.meta.env.VITE_SUCCESS_TOAST_TIME;
export const errorTime: number = import.meta.env.VITE_ERROR_TOAST_TIME;

export default function ToDoList() {
  const [item, setItem] = useState<string>('');
  const [editedItem, setEditedItem] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [doneList, setDoneList] = useState<TaskType[]>([]);
  const [user, setUser] = useState<string>('');
  const [idInEdition, setIdInEdition] = useState<string>('');
  const navigate = useNavigate();

  function CountId() {
    const newId = uuidv4();
    return newId;
  }

  function createTask(id: string, task: string, done: boolean) {
    if (task === '' || task == ' ') {
      toast.error('Activitie cannot be empty', { autoClose: errorTime });
      return;
    }
    setTaskList([...taskList, { id: id, task: task, done: done }]);
    setItem('');
  }

  function doneTask(id: string, task: string, done: boolean) {
    const tasksUpdated = taskList.filter((task) => task.id != id);
    setTaskList([...tasksUpdated]);
    setDoneList([...doneList, { id: id, task: task, done: done }]);
  }

  function detectEditionTask(id: string) {
    setIdInEdition(id);
  }

  useEffect(() => {
    const loggedUser = localStorage.getItem('@app:user');
    if (!loggedUser) {
      toast.error('User expired or not found, please login again', {
        autoClose: errorTime,
      });
      navigate('/');
    } else {
      setUser(loggedUser);
    }
  }, [navigate, taskList]);

  const handleLogout = () => {
    localStorage.removeItem('@app:user');
    toast.success('See you soon!', {
      autoClose: successTime,
    });
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  function editTask(id: string, task: string, status: boolean) {
    setTaskList((taskListPrevious) =>
      taskListPrevious.map((item) => {
        if (item.id == id) {
          return { ...item, task: task };
        }
        return item;
      }),
    );
    setEditedItem('');
    setIdInEdition('');
  }

  return (
    <div className="ToDoListContainer">
      <div className="createActivitieContainer">
        <span>Bellow will be your to-do list</span>
        <label htmlFor="Activitie">Activitie</label>
        <input
          id="Activitie"
          type="text"
          placeholder="Activitie"
          value={item}
          minLength={2}
          required
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button onClick={() => createTask(CountId(), item, false)}>ADD</button>
      </div>
      <div className="ToDoListMapContainer">
        This is your to-do list:
        {taskList.map((item, index) => {
          return (
            <li key={item.id}>
              {item.task}
              <button
                onClick={() => detectEditionTask(item.id)}
                className="editButton"
              >
                EDIT
              </button>
              {/* <button onClick={() => setOpen(true)} className='editButton'>EDIT</button> */}
              <button
                onClick={() => doneTask(item.id, item.task, item.done)}
                className="doneButton"
              >
                DONE
              </button>
              {idInEdition == item.id && (
                <>
                <label htmlFor="EditTaskInput">Edit your task</label>
                  <input
                  id='EditTaskInput'
                    placeholder="Type the new task"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                  ></input>
                  <button
                    onClick={() => editTask(item.id, editedItem, false)}
                    className="saveButton"
                  >
                    SAVE
                  </button>
                </>
              )}
            </li>
          );
        })}
      </div>

      <div className="DoneListMapContainer">
        Here is what you done:
        <s>
          {doneList.map((item, id) => {
            return <li key={id}>{item.task}</li>;
          })}
        </s>
      </div>

      <button onClick={handleLogout} className="logoutButton">
        logout
      </button>
    </div>
  );
}
