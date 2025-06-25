import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

const HomePage = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="home-container">
      {/* Left section with welcome message and links */}
      <div className="home-left">
        <h1>Bienvenido, {auth?.user?.firstName}</h1>
        <nav>
          <Link to="/perfil">Perfil</Link>
          <Link to="/citas">Citas</Link>
          <Link to="/ejercicios">Ejercicios</Link>
          <Link to="/progreso">Progreso</Link>
        </nav>
        <button onClick={logout}>Cerrar sesión</button>
      </div>

      {/* Right section with an image */}
      <div className="home-right">
        <img src="/images/your-image.png" alt="Health" />
      </div>
    </div>
  );
};

export default HomePage;
