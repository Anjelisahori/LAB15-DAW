import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Importa Link
import { obtenerEmpleados } from '../services/empleadoService';
import EliminarEmpleado from './EliminarEmpleado';

const ListarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
      const data = await obtenerEmpleados();
      setEmpleados(data);
    };

    fetchEmpleados();
  }, []);

  const handleDelete = (id) => {
    setEmpleados(empleados.filter(empleado => empleado.id !== id));  // Elimina el empleado de la lista
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Lista de Empleados</h2>
      <div className="card shadow-sm p-3 mb-4 bg-body rounded">
        {empleados.length === 0 ? (
          <p className="text-center">No hay empleados disponibles</p>
        ) : (
          empleados.map(empleado => (
            <div key={empleado.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
              <div className="mb-2 mb-md-0">
                <Link to={`/empleados/ver/${empleado.id}`} className="fw-bold text-decoration-none text-primary">
                  {empleado.nombre} {empleado.apellido}
                </Link> 
                <span className="text-muted"> - {empleado.email}</span>
              </div>
              <div className="d-flex flex-column flex-md-row mt-2 mt-md-0">
                <Link to={`/empleados/actualizar/${empleado.id}`} className="btn btn-warning btn-sm me-2">Actualizar</Link>
                <EliminarEmpleado id={empleado.id} onDelete={handleDelete} />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center">
        <Link to="/empleados/crear" className="btn btn-success btn-lg">Agregar Nuevo Empleado</Link>
      </div>
    </div>
  );
};

export default ListarEmpleados;
