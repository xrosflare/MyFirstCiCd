import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // 1. Inicialize o hook useNavigate
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@email.com" && senha === "123456") {      
      navigate('/dashboard');      
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Página de Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input 
            type="email" 
            placeholder="Seu e-mail" 
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