import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListarEmpleados from './pages/ListarEmpleados';
import CrearEmpleado from './pages/CrearEmpleado';
import ActualizarEmpleado from './pages/ActualizarEmpleado';
import VerEmpleado from './pages/VerEmpleado';
import InfoEmpleados from './pages/InfoEmpleados'; // Página informativa

function App() {
  return (
    <Router>
      <div className="container-fluid">
        {/* Navbar de Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Gestión de Empleados</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/empleados">Lista de Empleados</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/empleados/crear">Agregar Nuevo Empleado</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Definir las rutas de los componentes */}
        <Routes>
          <Route path="/" element={<InfoEmpleados />} />  {/* Ruta para la página informativa */}
          <Route path="/empleados" element={<ListarEmpleados />} />
          <Route path="/empleados/crear" element={<CrearEmpleado />} />
          <Route path="/empleados/actualizar/:id" element={<ActualizarEmpleado />} />
          <Route path="/empleados/ver/:id" element={<VerEmpleado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
