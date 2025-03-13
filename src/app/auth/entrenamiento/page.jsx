

"use client";

import { useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const posiciones = [
  { id: 1, nombre: "Arqueros", seleccionado: false },
  { id: 2, nombre: "Defensas", seleccionado: false },
  { id: 3, nombre: "Mediocampistas", seleccionado: false },
  { id: 4, nombre: "Delanteros", seleccionado: false },
];

const EntrenamientoForm = () => {
  const [selectedPositions, setSelectedPositions] = useState(posiciones);
  const [selectedDate, setSelectedDate] = useState("2024-04-03");
  const [selectedObjective, setSelectedObjective] = useState("Mejorar velocidad");
  const [entrenamiento, setEntrenamiento] = useState(null);

  // Alternar selección de posiciones
  const togglePosition = (id) => {
    setSelectedPositions((prev) =>
      prev.map((pos) =>
        pos.id === id ? { ...pos, seleccionado: !pos.seleccionado } : pos
      )
    );
  };

  // Función para manejar la creación del entrenamiento
  const handleCreateTraining = () => {
    const selectedPos = selectedPositions.find((pos) => pos.seleccionado);
    if (!selectedPos) {
      alert("Selecciona al menos una posición.");
      return;
    }

    setEntrenamiento({
      objetivo: selectedObjective,
      fecha: selectedDate,
      posicion: selectedPos.nombre,
      duracion: "65 min",
    });
  };

  return (
    <div className="bg-white p-2 rounded-md w-300 ml-20 transition-all">
      {/* Título */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Llena la información para crear sesiones de entrenamiento
      </h2>

      {/* Campo de fecha */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Elige la fecha
        </label>
        <div className="relative">
          <input
            type="date"
            className="border p-2 w-full rounded-md pr-10 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            📅
          </span>
        </div>
      </div>

      {/* Posiciones y Objetivos alineados horizontalmente */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Posición
          </span>
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Objetivos
          </span>
        </div>
        {selectedPositions.map((pos) => (
          <div key={pos.id} className="grid grid-cols-2 items-center gap-4 py-2">
            {/* Checkbox y Nombre de la posición */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => togglePosition(pos.id)}
            >
              {pos.seleccionado ? (
                <FaCheckSquare className="text-blue-600 text-lg" />
              ) : (
                <FaRegSquare className="text-gray-400 text-lg" />
              )}
              <span
                className={`text-sm font-semibold ${
                  pos.seleccionado
                    ? "text-black dark:text-white"
                    : "text-gray-400"
                }`}
              >
                {pos.nombre}
              </span>
            </div>

            {/* Objetivo */}
            <select
              className={`border p-2 w-full rounded-md text-sm ${
                pos.seleccionado
                  ? "dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!pos.seleccionado}
              value={selectedObjective}
              onChange={(e) => setSelectedObjective(e.target.value)}
            >
              <option>Mejorar velocidad</option>
              <option>Resistencia física</option>
              <option>Precisión en tiros</option>
              <option>Trabajo en equipo</option>
            </select>
          </div>
        ))}
      </div>

      {/* Botón de Crear */}
      <button
        onClick={handleCreateTraining}
        className="w-full bg-blue-800 text-white p-3 rounded-md font-bold text-lg hover:bg-blue-900 transition-all"
      >
        Crear
      </button>

     {/* Tarjeta de entrenamiento (solo se muestra si se ha creado un entrenamiento) */}
{entrenamiento && (
  <div className="mt-8 bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg w-[800px] border border-gray-300">
    {/* Título */}
    <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">
      📌 Posición / <span className="text-blue-600">{entrenamiento.posicion}</span>
    </h3>

    {/* Contenedor de los días de entrenamiento */}
    <div className="grid grid-cols-5 gap-4">
      {/* Días de la semana */}
      {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((dia, index) => (
        <div
          key={dia}
          className={`rounded-lg text-center py-8 font-semibold text-white shadow-md
            ${index === 2 ? "bg-blue-700" : "bg-gray-600"}`
          }
        >
          {/* Día de la semana */}
          {dia}

          {/* Si es miércoles, mostrar la información */}
          {index === 2 && (
            <div className="mt-4 text-sm text-white text-left px-4">
              <p className="font-bold">🎯 Objetivo:</p>
              <p className="text-gray-200">{entrenamiento.objetivo}</p>
              <p className="font-bold mt-2">📅 Fecha:</p>
              <p className="text-gray-200">{entrenamiento.fecha}</p>
              <p className="font-bold mt-2">🏃‍♂️ Posición:</p>
              <p className="text-gray-200">{entrenamiento.posicion}</p>
              <p className="font-bold mt-2">⏳ Duración:</p>
              <p className="text-gray-200">{entrenamiento.duracion}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default EntrenamientoForm;
