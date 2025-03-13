"use client";

export default function TablaSesion() {
  const datos = {
    Lunes: { objetivo: "Descanso", fecha: "01/04/2024", posicion: "N/A", duracion: "0 min" },
    Martes: { objetivo: "Entrenamiento táctico", fecha: "02/04/2024", posicion: "Defensas", duracion: "90 min" },
    Miércoles: {
      objetivo: "Mejorar la velocidad",
      fecha: "03/04/2024",
      posicion: "Delanteros",
      duracion: "65 min",
    },
    Jueves: { objetivo: "Mejorar resistencia", fecha: "04/04/2024", posicion: "Mediocampistas", duracion: "70 min" },
    Viernes: { objetivo: "Descanso", fecha: "05/04/2024", posicion: "N/A", duracion: "0 min" },
  };

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-xl font-semibold text-black mb-4">&lt; Posición / Delanteros &gt;</h2>
      <div className="bg-gray-300 p-6 rounded-3xl w-full max-w-6xl flex justify-between items-start">
        {dias.map((dia) => (
          <div
            key={dia}
            className="relative flex flex-col items-center w-1/5 p-4 h-96 bg-gray-400 cursor-pointer rounded-[42px] transition-all m-6"
          >
            <div className="absolute text-center top-0 left-0 right-0 p-2 rounded-t-[42px] bg-gray-200">
              <span className="text-black font-semibold">{dia}</span>
            </div>
            <div className="mt-16 text-sm text-black text-left w-full px-4">
              <p className="block mb-2">
                <span className="font-bold">Objetivo:</span> {datos[dia].objetivo}
              </p>
              <p className="block mb-2">
                <span className="font-bold">Fecha:</span> {datos[dia].fecha}
              </p>
              <p className="block mb-2">
                <span className="font-bold">Posición:</span> {datos[dia].posicion}
              </p>
              <p className="block mb-2">
                <span className="font-bold">Duración:</span> {datos[dia].duracion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
