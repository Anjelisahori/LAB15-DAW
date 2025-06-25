// 2. CitasPage.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axios';

const CitasPage = () => {
  const [citas, setCitas] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({ motivo: '', fechaHora: '' });

  const fetchCitas = () => {
    axios.get('/citas/mis-citas')
      .then(res => setCitas(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCitas();
  }, []);

  const crearCita = (e) => {
    e.preventDefault();
    axios.post('/citas', nuevaCita)
      .then(() => {
        setNuevaCita({ motivo: '', fechaHora: '' });
        fetchCitas();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Mis Citas</h2>
      <form onSubmit={crearCita}>
        <input name="motivo" value={nuevaCita.motivo} onChange={e => setNuevaCita({ ...nuevaCita, motivo: e.target.value })} placeholder="Motivo" />
        <input name="fechaHora" type="datetime-local" value={nuevaCita.fechaHora} onChange={e => setNuevaCita({ ...nuevaCita, fechaHora: e.target.value })} />
        <button type="submit">Agendar</button>
      </form>

      <ul>
        {citas.map(cita => (
          <li key={cita.id}>{cita.fechaHora} - {cita.motivo} ({cita.estado})</li>
        ))}
      </ul>
    </div>
  );
};

export default CitasPage;
