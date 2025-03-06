// import Image from 'next/image';

// export default function TrainingSession() {
//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center bg-white p-6">
//       {/* Sección del logo y el título */}
//       <div className="flex items-center mb-6 w-full">
//         {/* Logo en la parte izquierda */}
//         <Image src="/Fast_largo.png" alt="Fast Training" width={180} height={100} />
//         {/* Título centrado */}
//         <h2 className="text-2xl font-bold text-center flex-1">Sesión de Entrenamiento - Lunes</h2>
//       </div>

//       {/* Tabla principal de actividades */}
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-azul-principal">
//             <th className="border border-gray-300 p-2 text-white">Fase</th>
//             <th className="border border-gray-300 p-2 text-white">Descripción de Actividad</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300 p-2 font-semibold">Inicial</td>
//             <td className="border border-gray-300 p-2">Calentamiento: Juego predeportivo, donde se dividen dos equipos.</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2 font-semibold">Central</td>
//             <td className="border border-gray-300 p-2">
//               <ul className="list-disc ml-4">
//                 <li>Jumping jacks</li>
//                 <li>Escaladoras</li>
//                 <li>Sentadilla con saltos</li>
//                 <li>Core (siting twists)</li>
//                 <li>Flexión de brazo y aplauso</li>
//                 <li>Burpees</li>
//                 <li>Elevación de piernas sobre cono</li>
//               </ul>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2 font-semibold">Final</td>
//             <td className="border border-gray-300 p-2">
//               <ul className="list-disc ml-4">
//                 <li>Posición supino (boca arriba)</li>
//                 <li>Posición sentado</li>
//                 <li>Presión en la espalda (8”)</li>
//                 <li>Posición fetal (8”)</li>
//               </ul>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       {/* Tabla de datos adicionales */}

//       <table className="w-full border-collapse border border-gray-300 mt-2">
//         <thead>
//           <tr className="bg-azul-principal">
//             <th className="border border-gray-300 p-2 text-white">Parámetro</th>
//             <th className="border border-gray-300 p-2 text-white">Valor</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300 p-2">Intensidad del Trabajo (%)</td>
//             <td className="border border-gray-300 p-2">60%</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">Serie</td>
//             <td className="border border-gray-300 p-2">4</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">Repeticiones</td>
//             <td className="border border-gray-300 p-2">12</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">Tiempo</td>
//             <td className="border border-gray-300 p-2">15’</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">Tiempo-Recuperacion</td>
//             <td className="border border-gray-300 p-2">5’</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">Tiempo-Total</td>
//             <td className="border border-gray-300 p-2">20’</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";

export default function TrainingSession() {
  const [activities, setActivities] = useState([
    {
      fase: "Inicial",
      descripcion:
        "Calentamiento: Juego predeportivo, donde se dividen dos equipos.",
    },
    {
      fase: "Central",
      descripcion:
        "Jumping jacks, Escaladoras, Sentadilla con saltos, Core (siting twists), Flexión de brazo y aplauso, Burpees, Elevación de piernas sobre cono.",
    },
    {
      fase: "Final",
      descripcion:
        "Posición supino (boca arriba), Posición sentado, Presión en la espalda (8”), Posición fetal (8”).",
    },
  ]);

  const handleEdit = (index) => {
    const newDesc = prompt(
      "Editar descripción:",
      activities[index].descripcion
    );
    if (newDesc !== null) {
      const updatedActivities = [...activities];
      updatedActivities[index].descripcion = newDesc;
      setActivities(updatedActivities);
    }
  };

  const handleDelete = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center  bg-white  ">
      {/* Sección del logo y el título */}
      <div className="flex items-center mb-6 w-full  h-1/6">
        <Image
          src="/Fast_largo.png"
          alt="Fast Training"
          width={180}
          height={100}
        />
        <h2 className="text-2xl font-bold text-center flex-1">
          Sesión de Entrenamiento - Lunes
        </h2>
      </div>

      {/* Tabla principal de actividades */}
      <div className="w-full h-5/6 items-center">
        <table className="w-full border-collapse border border-gray-300 h-1/2">
          <thead>
            <tr className="bg-azul-principal">
              <th className="border border-gray-300 p-2 text-white">Fase</th>
              <th className="border border-gray-300 p-2 text-white">
                Descripción de Actividad
              </th>
              <th className="border border-gray-300 p-2 text-white">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((actividad, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 font-semibold">
                  {actividad.fase}
                </td>
                <td className="border border-gray-300 p-2">
                  {actividad.descripcion}
                </td>
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabla de datos adicionales */}
        <table className="w-full border-collapse border border-gray-300 mt-2 h-1/2">
          <thead>
            <tr className="bg-azul-principal">
              <th className="border border-gray-300 p-2 text-white">
                Parámetro
              </th>
              <th className="border border-gray-300 p-2 text-white">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Intensidad del Trabajo (%)
              </td>
              <td className="border border-gray-300 p-2">60%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Serie</td>
              <td className="border border-gray-300 p-2">4</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Repeticiones</td>
              <td className="border border-gray-300 p-2">12</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Tiempo</td>
              <td className="border border-gray-300 p-2">15’</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Tiempo-Recuperacion
              </td>
              <td className="border border-gray-300 p-2">5’</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Tiempo-Total</td>
              <td className="border border-gray-300 p-2">20’</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
