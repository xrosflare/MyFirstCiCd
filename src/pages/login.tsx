import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { errorTime, successTime } from '../Components/CreateList';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const defaultValidUser = import.meta.env.VITE_USER;
  const defaultPassword = import.meta.env.VITE_PASSWORD;

  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email === defaultValidUser && senha === defaultPassword) {
      localStorage.setItem('@app:user', email);
      toast.success(`Access granted, Welcome ${email}`, {
        autoClose: successTime,
      });

      navigate('/dashboard');
    } else {
      setSenha('');
      setEmail('');
      toast.error('Email or Password invalids!', {
        autoClose: errorTime,
      });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <h2>Página de Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="User or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
