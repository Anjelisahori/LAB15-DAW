import React from 'react';
import { eliminarEmpleado } from '../services/empleadoService';

const EliminarEmpleado = ({ id, onDelete }) => {
  const handleDelete = async () => {
    // Mostrar confirmación antes de eliminar
    const isConfirmed = window.confirm("¿Estás seguro de eliminar este empleado?");
    if (isConfirmed) {
      try {
        await eliminarEmpleado(id);  // Llama al servicio para eliminar el empleado
        onDelete(id);  // Actualiza la lista después de eliminar
      } catch (error) {
        console.error('Error al eliminar el empleado:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger btn-sm">
      Eliminar
    </button>
  );
};

export default EliminarEmpleado;
