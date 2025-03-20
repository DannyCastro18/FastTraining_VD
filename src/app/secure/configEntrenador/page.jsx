"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-[100%] pl-[95px]">
      {/* Encabezado */}
      <header className="w-[100%] bg-white  py-4 px-6 flex items-center justify-between">
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
        </div>
        

        {/* Contenido principal */}
        <main className="w-[600px] p-6">
          <div className="bg-white p-6 rounded-lg">
            <div className="space-y-4 ">
              <div>
                <label className="block text-azul-principal text-2xl font-medium mb-4">Nombre</label>
                <input
                  type="text"
                  value="Juan Pérez"
                  className="w-full h-[50px] bg-gray-300 text-gray-600 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div>
                <label className="block text-azul-principal font-medium text-2xl mb-4">Correo Electrónico</label>
                <input
                  type="email"
                  value="juan.perez@example.com"
                  className="w-full h-[50px] bg-gray-300 text-gray-600  border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div>
                <label className="block text-azul-principal font-medium text-2xl mb-4">Rol</label>
                <input
                  type="text"
                  value="Administrador"
                  className="w-full h-[50px] bg-gray-300 text-gray-600  border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
            </div>
          </div>
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