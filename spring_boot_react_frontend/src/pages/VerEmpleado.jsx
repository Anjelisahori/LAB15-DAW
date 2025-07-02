import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerEmpleadoPorId } from '../services/empleadoService';

const VerEmpleado = () => {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        const data = await obtenerEmpleadoPorId(id);
        setEmpleado(data);
      } catch (error) {
        console.error('Error al obtener el empleado:', error);
      }
    };

    fetchEmpleado();
  }, [id]);

  if (!empleado) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Detalles del Empleado</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Empleado: {empleado.nombre} {empleado.apellido}</h5>
          <p className="card-text"><strong>Nombre:</strong> {empleado.nombre}</p>
          <p className="card-text"><strong>Apellido:</strong> {empleado.apellido}</p>
          <p className="card-text"><strong>Email:</strong> {empleado.email}</p>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-secondary" onClick={() => window.history.back()}>Regresar</button>
      </div>
    </div>
  );
};

export default VerEmpleado;
