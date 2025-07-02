import React, { useState } from 'react';
import { guardarEmpleado } from '../services/empleadoService';
import { useNavigate } from 'react-router-dom';

const CrearEmpleado = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoEmpleado = { nombre, apellido, email };

    try {
      await guardarEmpleado(nuevoEmpleado);
      navigate('/empleados');
    } catch (error) {
      console.error('Error al guardar el empleado:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Agregar Nuevo Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Guardar</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/empleados')}>Regresar</button>
        </div>
      </form>
    </div>
  );
};

export default CrearEmpleado;
