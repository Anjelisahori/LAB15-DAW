import { useState, useContext } from 'react';
import axios from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css';
import { AuthContext } from '../auth/AuthContext'; // Importamos el contexto

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Usamos el contexto para gestionar el login
  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', form);
      // Actualiza el contexto con los datos del usuario
      login({ ...res.data, token: res.data.accessToken });
      localStorage.setItem('token', res.data.accessToken); // Guarda el token
      navigate('/'); // Redirigir a la página principal (Home)
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Credenciales inválidas"); // Mostrar el mensaje de error
    }
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <input 
            type="text" 
            name="usernameOrEmail" 
            placeholder="Usuario o Email" 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Entrar</button>
          {error && <p className="error">{error}</p>}
          <p className="register-link">
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </form>
      </div>
      <div className="image-section">
        <img src="/images/login-image.png" alt="Login illustration" />
      </div>
    </div>
  );
};

export default LoginPage;
