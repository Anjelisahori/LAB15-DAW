// 4. ProgresoPage.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axios';

const ProgresoPage = () => {
  const [progresos, setProgresos] = useState([]);

  useEffect(() => {
    axios.get('/progresos/mis-progresos')
      .then(res => setProgresos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Mi Progreso</h2>
      <ul>
        {progresos.map(p => (
          <li key={p.id}>
            <p><strong>{p.fecha}:</strong> {p.descripcion} ({p.avancePorcentaje}%)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgresoPage;
