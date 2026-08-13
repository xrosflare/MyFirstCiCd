import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login.tsx';
import { NewAccount } from './pages/NewAcc.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newAcc" element={<NewAccount />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
