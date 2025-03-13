"use client";

export default function TablaSesion() {
  const datos = {
    Miércoles: {
      objetivo: "Mejorar la velocidad",
      fecha: "03/04/2024",
      posicion: "Delanteros",
      duracion: "65 min",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pl-24">
      {/* Ajuste importante: `pl-24` para dejar espacio al sidebar */}

      {/* Título */}
      <h2 className="text-xl font-semibold text-black mb-6 text-center">
        &lt; Posición / Delanteros &gt;
      </h2>

      {/* Contenedor principal centrado */}
      <div className="flex justify-center items-center w-full">
        {/* Tarjeta centrada */}
        <div className="relative flex flex-col items-center w-72 p-6 h-96 bg-gray-400 cursor-pointer rounded-[42px] transition-all shadow-lg">
          {/* Encabezado de la tarjeta */}
          <div className="absolute text-center top-0 left-0 right-0 p-3 rounded-t-[42px] bg-gray-200">
            <span className="text-black font-semibold text-lg">Miércoles</span>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="mt-16 text-sm text-black text-left w-full px-6">
            <p className="block mb-2">
              <span className="font-bold">Objetivo:</span> {datos["Miércoles"].objetivo}
            </p>
            <p className="block mb-2">
              <span className="font-bold">Fecha:</span> {datos["Miércoles"].fecha}
            </p>
            <p className="block mb-2">
              <span className="font-bold">Posición:</span> {datos["Miércoles"].posicion}
            </p>
            <p className="block mb-2">
              <span className="font-bold">Duración:</span> {datos["Miércoles"].duracion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
