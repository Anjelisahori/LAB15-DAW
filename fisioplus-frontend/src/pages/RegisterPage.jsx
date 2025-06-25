import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';
import '../css/RegisterPage.css';

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    nombres: '',
    apellidos: '',
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
      await axios.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      setError('Error al registrarse. Verifica los datos.');
    }
  };

  return (
    <div className="register-container">
      <div className="form-section">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Registrarse</h2>
          <input type="text" name="username" placeholder="Usuario" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
          <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} required />
          <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />

          <button type="submit">Registrar</button>

          {error && <p className="error">{error}</p>}

          <p className="login-link">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
      <div className="image-section">
        <img src="/images/register.png" alt="Registro" />
      </div>
    </div>
  );
};

export default RegisterPage;
