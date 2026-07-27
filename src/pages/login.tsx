import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const defaultUser = import.meta.env.VITE_USER
  const defaultPassword = import.meta.env.VITE_PASSWORD

  const navigate = useNavigate();

  const handleLogin = (e:any) => {
    e.preventDefault();
    if (email === defaultUser && senha === defaultPassword) {    
              alert(`Access granted, Welcome ${email}`);
  
      navigate('/dashboard');      
    } else {
      alert("Email or Password invalids!");
      setSenha('')
      setEmail('')
    }
  };

  return (
    <div style={{ padding: '20px' }}>
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