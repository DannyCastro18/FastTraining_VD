"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    email: "",
    position: "",
    age: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch all players
  const fetchPlayers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/jugadores/ver");
      if (!response.ok) {
        throw new Error("Error fetching players");
      }
      const data = await response.json();
      setPlayers(data);
      setMessage("Jugadores cargados correctamente");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al cargar jugadores: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a specific player
  const fetchPlayerById = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/jugadores/${id}`);
      if (!response.ok) {
        throw new Error("Error fetching player");
      }
      const data = await response.json();
      setSelectedPlayer(data);
      setMessage("Jugador cargado correctamente");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al cargar jugador: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new player
  const createPlayer = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/jugadores/crear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });
      if (!response.ok) {
        throw new Error("Error creating player");
      }
      const data = await response.json();
      setMessage("Jugador creado correctamente");
      // Reset form and refresh player list
      setNewPlayer({ name: "", email: "", position: "", age: "" });
      fetchPlayers();
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al crear jugador: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Update player info
  const updatePlayerInfo = async (id, updatedData) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/jugadores-info/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Error updating player");
      }
      const data = await response.json();
      setMessage("Información del jugador actualizada correctamente");
      fetchPlayerById(id); // Refresh player data
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al actualizar jugador: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete a player
  const deletePlayer = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/jugadores/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error deleting player");
      }
      setMessage("Jugador eliminado correctamente");
      setSelectedPlayer(null);
      fetchPlayers(); // Refresh player list
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al eliminar jugador: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Load players on component mount
  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-[100%] pl-[95px]">
      {/* Encabezado */}
      <header className="w-[100%] bg-white py-4 px-6 flex items-center justify-between">
        <Image src="/Fast_largo.png" alt="Logo" width={150} height={120} />
        <input
          type="text"
          placeholder="Buscar..."
          className="border border-gray-300 bg-blue-100 mr-10 px-2 py-2 rounded-lg w-[800px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <div className="flex p-6">
        {/* Menú lateral */}
        <div className="w-[50%] flex flex-col items-center pt-14 ">
          <h2 className="text-2xl font-semibold mb-4 text-azul-principal">Mi Cuenta</h2>
          <div className="w-52 h-52 flex justify-center items-center">
            <Image
              src="/usuario.png"
              alt="Perfil"
              width={300}
              height={300}
              className="rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
          
          {/* API Testing Controls */}
          <div className="mt-8 w-full">
            <h3 className="text-xl font-medium text-azul-principal mb-4">Gestión de Jugadores</h3>
            <div className="space-y-4">
              <button 
                onClick={fetchPlayers}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Ver Todos los Jugadores
              </button>
              
              <div>
                <input
                  type="text"
                  placeholder="ID del Jugador"
                  className="w-full px-4 py-2 border rounded-lg mb-2"
                  onChange={(e) => setSelectedPlayer({...selectedPlayer, id: e.target.value})}
                />
                <button 
                  onClick={() => selectedPlayer?.id && fetchPlayerById(selectedPlayer.id)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Buscar Jugador por ID
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <main className="w-[600px] p-6">
          {/* Mensajes de estado */}
          {message && (
            <div className={`p-4 mb-4 rounded-lg ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
              {message}
            </div>
          )}
          
          {loading && <p className="text-center text-gray-500">Cargando...</p>}
          
          {/* Formulario para crear jugador */}
          <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200">
            <h3 className="text-xl font-medium text-azul-principal mb-4">Crear Nuevo Jugador</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  value={newPlayer.name}
                  onChange={(e) => setNewPlayer({...newPlayer, name: e.target.value})}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={newPlayer.email}
                  onChange={(e) => setNewPlayer({...newPlayer, email: e.target.value})}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Posición</label>
                <input
                  type="text"
                  value={newPlayer.position}
                  onChange={(e) => setNewPlayer({...newPlayer, position: e.target.value})}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Edad</label>
                <input
                  type="number"
                  value={newPlayer.age}
                  onChange={(e) => setNewPlayer({...newPlayer, age: e.target.value})}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                onClick={createPlayer}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
              >
                Crear Jugador
              </button>
            </div>
          </div>
          
          {/* Mostrar jugador seleccionado */}
          {selectedPlayer && (
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-azul-principal mb-4">Detalles del Jugador</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">ID</label>
                  <input
                    type="text"
                    value={selectedPlayer.id}
                    className="w-full bg-gray-100 border px-4 py-2 rounded-lg"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    value={selectedPlayer.name || ""}
                    onChange={(e) => setSelectedPlayer({...selectedPlayer, name: e.target.value})}
                    className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={selectedPlayer.email || ""}
                    onChange={(e) => setSelectedPlayer({...selectedPlayer, email: e.target.value})}
                    className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => updatePlayerInfo(selectedPlayer.id, selectedPlayer)}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Actualizar
                  </button>
                  
                  <button
                    onClick={() => deletePlayer(selectedPlayer.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Lista de jugadores */}
          {players.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-medium text-azul-principal mb-4">Lista de Jugadores</h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {players.map((player) => (
                    <li 
                      key={player.id} 
                      className="py-3 px-2 hover:bg-blue-50 cursor-pointer"
                      onClick={() => fetchPlayerById(player.id)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{player.name}</span>
                        <span className="text-sm text-gray-500">{player.position}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Línea separadora */}
      <hr className="border-t-2 border-gray-300 my-6" />
      
      {/* Sección adicional */}
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-azul-principal">Seguridad</h2>
        <p className="text-gray-700 mt-2">Al cambiar tu contraseña, se cerrara sesion en todos los dispositivos </p>
        <button className="mt-4 px-6 py-2 bg-azul-principal text-white rounded-lg hover:bg-blue-700 transition">Cambiar Contraseña</button>
      </div>

      {/* Línea separadora */}
      <hr className="border-t-2 border-gray-300 my-6" />
      
      {/* Sección adicional */}
      <div className="text-center p-6">
        <p className="text-gray-700 mt-2">Si eliminas tu cuenta no podras tener acceso a ningun tipo de informacion que proporcione tu entrenador en Fast Training</p>
        <button className="mt-4 px-6 py-2 bg-azul-principal text-white rounded-lg hover:bg-blue-700 transition">Eliminar Cuenta</button>
      </div>
    </div>
  );
}