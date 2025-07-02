import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEmpleadoPorId, actualizarEmpleado } from '../services/empleadoService';

const ActualizarEmpleado = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({ nombre: '', apellido: '', email: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await actualizarEmpleado(id, empleado);  // Enviar la solicitud PUT al backend
      navigate('/empleados');  // Redirigir a la lista de empleados después de actualizar
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
    }
  };

  const handleRegresar = () => {
    navigate('/empleados');  // Regresar a la lista de empleados
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Actualizar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={empleado.nombre}
            onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input
            type="text"
            className="form-control"
            value={empleado.apellido}
            onChange={(e) => setEmpleado({ ...empleado, apellido: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={empleado.email}
            onChange={(e) => setEmpleado({ ...empleado, email: e.target.value })}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Actualizar</button>
          <button type="button" className="btn btn-secondary" onClick={handleRegresar}>Regresar</button>
        </div>
      </form>
    </div>
  );
};

export default ActualizarEmpleado;
