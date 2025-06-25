// 1. PerfilPage.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axios';

const PerfilPage = () => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    axios.get('/auth/perfil')
      .then(res => setPerfil(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!perfil) return <p>Cargando perfil...</p>;

  return (
    <div>
      <h2>Mi Perfil</h2>
      <p><strong>Usuario:</strong> {perfil.username}</p>
      <p><strong>Nombre:</strong> {perfil.firstName} {perfil.lastName}</p>
      <p><strong>Email:</strong> {perfil.email}</p>
      <p><strong>Fecha de registro:</strong> {new Date(perfil.dateJoined).toLocaleDateString()}</p>
    </div>
  );
};

export default PerfilPage;