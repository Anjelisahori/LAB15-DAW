// 3. EjerciciosPage.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axios';

const EjerciciosPage = () => {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    axios.get('/ejercicios')
      .then(res => setEjercicios(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Ejercicios Recomendados</h2>
      <ul>
        {ejercicios.map(ej => (
          <li key={ej.id}>
            <h4>{ej.nombre}</h4>
            <p>{ej.descripcion}</p>
            <p>Repeticiones: {ej.repeticiones}</p>
            {ej.videoUrl && <a href={ej.videoUrl} target="_blank" rel="noreferrer">Ver Video</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EjerciciosPage;
