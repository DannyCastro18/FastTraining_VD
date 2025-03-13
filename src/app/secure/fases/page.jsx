"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function TrainingSession() {
  const [data, setData] = useState({
    inicial: "CALENTAMIENTO: JUEGO PRE DEPORTIVO, DONDE SE DIVIDEN DOS EQUIPOS...",
    central: "Jumping jacks\nEscaladoras\nSentadilla con saltos\nCore (siting twists)\nFlexión de brazo y aplauso\nBurpees\nElevación de piernas sobre cono",
    final: "ESTIRAMIENTOS:\nPOSICION SUPINO (BOCA ARRIBA)\nPOSICION SENTADO\nPRESION EN LA ESPALDA 8”\nPOSICION FETAL 8”",
  });

  const handleChange = (phase, value) => {
    setData((prev) => ({ ...prev, [phase]: value }));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-12">
      {/* Logo y barra de búsqueda */}
      <div className="flex items-center gap-10 w-full max-w-screen-2xl mb-6">
        <Image src="/Fast_largo.png" alt="Fast Training" width={150} height={80} />
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-black" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-10 pr-4 py-2 placeholder:text-black border rounded-lg text-black focus:outline-none bg-blue-100"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="w-full max-w-screen-2xl bg-white p-20 rounded-3xl shadow-2xl border border-gray-300">
        <h2 className="text-6xl font-bold text-center mb-16 text-black">Sesión de Entrenamiento - Lunes</h2>
        <table className="w-full border-collapse border border-gray-400 text-black text-3xl">
          <thead>
            <tr className="bg-azul-principal text-white text-4xl">
              <th className="p-10 border border-gray-400">Fase</th>
              <th className="p-10 border border-gray-400">Inicial</th>
              <th className="p-10 border border-gray-400">Central</th>
              <th className="p-10 border border-gray-400">Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-10 font-semibold border border-gray-400 bg-blue-200 text-3xl">Descripción de Actividad</td>
              {Object.keys(data).map((phase) => (
                <td key={phase} className="p-10 border border-gray-400">
                  <textarea
                    className="w-full h-80 p-8 bg-gray-50 border border-gray-400 rounded-lg focus:ring focus:ring-blue-400 text-black resize-none shadow-xl text-3xl"
                    value={data[phase]}
                    onChange={(e) => handleChange(phase, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}