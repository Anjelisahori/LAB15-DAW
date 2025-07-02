import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/empleados';

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
