"use client";

import { useState, useEffect } from "react";

const EntrenamientoForm = () => {
  const [jugadores, setJugadores] = useState([]);
  const [planesEntrenamiento, setPlanesEntrenamiento] = useState([
    "Velocidad y resistencia",
    "Fuerza y potencia",
    "Técnica y precisión",
    "Recuperación activa",
  ]);
  const [selectedJugador, setSelectedJugador] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Velocidad y resistencia");
  const [entrenamiento, setEntrenamiento] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/jugadores/ver") // ruta del backend
      .then((res) => res.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error("Error cargando jugadores:", error));
  }, []);

  const handleCreateTraining = () => {
    if (!selectedJugador) {
      alert("Selecciona un jugador");
      return;
    }

    setEntrenamiento({
      jugador: jugadores.find((j) => j.id === Number(selectedJugador))?.nombre,
      plan: selectedPlan,
      duracion: "60 min",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Crear sesión de entrenamiento
        </h2>

        {/* Selección de jugador */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black">
            Selecciona un jugador
          </label>
          <select
            className="border p-2 w-full rounded-md text-black"
            value={selectedJugador}
            onChange={(e) => setSelectedJugador(e.target.value)}
          >
            <option value="">-- Selecciona --</option>
            {jugadores.map((jugador) => (
              <option key={jugador.id} value={jugador.id}>
                {jugador.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Selección de plan de entrenamiento */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-black">
            Selecciona un plan de entrenamiento
          </label>
          <select
            className="border p-2 w-full rounded-md text-black"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            {planesEntrenamiento.map((plan, index) => (
              <option key={index} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>

        {/* Botón para generar entrenamiento */}
        <button
          onClick={handleCreateTraining}
          className="w-full bg-blue-900 text-white p-3 rounded-md font-bold"
        >
          Crear entrenamiento
        </button>

        {/* Mostrar entrenamiento generado */}
        {entrenamiento && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-bold text-gray-800">
              📋 Entrenamiento generado
            </h3>
            <p className="mt-2">
              <strong>Jugador:</strong> {entrenamiento.jugador}
            </p>
            <p>
              <strong>Plan:</strong> {entrenamiento.plan}
            </p>
            <p>
              <strong>Duración:</strong> {entrenamiento.duracion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntrenamientoForm;
