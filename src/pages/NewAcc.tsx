import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewAcc.css';

import { errorTime, successTime } from '../Components/CreateList/ToDoList';

export function NewAccount() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigate = useNavigate();

  const handleCreateUser = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) {
      toast.error('This field cannot be empty', { autoClose: errorTime });
      return;
    }
    const letterCheck = /[a-zA-Z]/.test(newEmail);
    if (letterCheck == false) {
      toast.error(`Only letters in username are allowed`, {
        autoClose: errorTime,
      });
      return;
    }
    if (
      newEmail == import.meta.env.VITE_USER ||
      newEmail == localStorage.getItem('@app:newUser')
    ) {
      toast.error('Username or email is already in use', {
        autoClose: errorTime,
      });

      return;
    }
    if (passwordCheck(repeatPassword) == false) {
      return;
    } else {
      toast.success(`User ${newEmail} has been created!`, {
        autoClose: successTime,
      });
      localStorage.setItem('@app:newUser', newEmail);
      setNewEmail('');
      setNewPassword('');
      setTimeout(() => {
        navigate('/');
      }, 700);
    }
  };

  const clearFields = () => {
    setNewEmail('');
    setNewPassword('');
    setRepeatPassword('');
    return;
  };
  const passwordCheck = (password: string) => {
    if (password !== newPassword) {
      toast.error('The passwords does not matches', { autoClose: errorTime });
      setNewEmail('');
      setNewPassword('');
      setRepeatPassword('');
      return false;
    } else {
      return true;
    }
  };
  const handleBack = () => {
    toast.success('See you soon!', {
      autoClose: successTime,
    });
    setTimeout(() => {
      navigate('/');
    }, 800);
  };

  return (
    <div className="NewAccContainer">
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <h2>New Account</h2>
      <form onSubmit={handleCreateUser}>
        <div className="NewAccInputDiv">
          <label htmlFor="user">Username or Email</label>
          <input
            id="user"
            type="text"
            required
            minLength={3}
            maxLength={30}
            placeholder="User or Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <div className="NewAccInputDiv">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Sua senha"
            minLength={5}
            maxLength={30}
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="NewAccInputDiv">
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            id="repeatPassword"
            type="password"
            placeholder="Repeat your password"
            minLength={5}
            maxLength={30}
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="createButton" title="Create">
          Create
        </button>
      </form>
      <div>
        <button
          className="clearButton"
          title="Clear Fields"
          onClick={clearFields}
        >
          Clear
        </button>
        <button className="backButton" title="Login Page" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}
