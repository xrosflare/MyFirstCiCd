import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

import { errorTime, successTime } from '../Components/CreateList/ToDoList';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const defaultValidUser = import.meta.env.VITE_USER;
  const defaultPassword = import.meta.env.VITE_PASSWORD;
  const validatedCreatedUser = localStorage.getItem('@app:newUser');
  const isCreatedUser =
    validatedCreatedUser !== null && validatedCreatedUser === email;
  const navigate = useNavigate();

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
   
    if (
      (email === defaultValidUser && senha === defaultPassword) ||
      isCreatedUser
    ) {
      toast.success(`Access granted, Welcome ${email}`, {
        autoClose: successTime,
      });
      localStorage.setItem('@app:user', email);
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
      return;
    }
    else {
      setSenha('');
      setEmail('');
      toast.error('Email or Password invalids!', {
        autoClose: errorTime,
      });
    }
  };
  const handleNewAcc = () => {
    toast.success('We are redirecting you', { autoClose: successTime });
    setTimeout(() => {
      navigate('/newAcc');
    }, 500);
  };

  return (
    <div className="LoginContainer">
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="loginUserContainer">
          <label htmlFor="user">User or Email</label>
          <input
            type="text"
            placeholder="User or Email"
            required
            minLength={3}
            maxLength={30}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="loginPasswordContainer">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            minLength={3}
            maxLength={30}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit" className="loginButton" title="login">
          Entrar
        </button>
      </form>
      <div>
        <button
          className="newAccButton"
          title="New account"
          onClick={handleNewAcc}
        >
          New Acc
        </button>
        <button className="recoverButton" title="Recover account">
          Recover
        </button>
      </div>
    </div>
  );
}
