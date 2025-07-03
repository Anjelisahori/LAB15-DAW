import axios from 'axios';

// Usamos una variable de entorno para apuntar correctamente al backend
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1/empleados`;

export const obtenerEmpleados = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const obtenerEmpleadoPorId = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const guardarEmpleado = async (empleado) => {
  const response = await axios.post(API_URL, empleado);
  return response.data;
};

export const actualizarEmpleado = async (id, empleado) => {
  const response = await axios.put(`${API_URL}/${id}`, empleado);
  return response.data;
};

export const eliminarEmpleado = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
