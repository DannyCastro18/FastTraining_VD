import React from 'react'
import Image  from 'next/image'


export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Sección de imagen */}
      <div className="w-[50%] bg-white flex items-center justify-center">
  <img
    src="/pantalla_login.png"  
    alt="Login"
    className="object-cover h-full w-full"
  />
</div>
      
      {/* Sección de inicio de sesión */}
      <div className="w-2/3 bg-white flex items-center justify-center p-8">
        <div className="w-full">
          <h2 className="text-[50px] font-bold text-center mb-[70px] text-azul-principal">Iniciar Sesión</h2>
          
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg
                text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="usuario@correo.com"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="********"
              />
              <h2 className=' text-blue-800 flex justify-end mt-2 cursor-pointer'>¿Olvidaste tu contraseña?</h2>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-5"
            >
              Iniciar Sesión
            </button>
            <div className="mt-3 flex justify-between items-center">
  <p className="text-gray-800">¿Todavía no tienes cuenta?</p>
  <h2 className="text-blue-800 cursor-pointer">Regístrate</h2>
</div>


          </form>
          <div className="max-w-lg mx-auto mt-6 text-center">
            
            <button
  className="w-full  text-gray-800 border rounded-lg py-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 gap-2 transition mt-9"
>
<img src="/search.png" alt="Icono" className="w-6 h-6 mr-4" />
  Iniciar sesión con Google
</button>
          </div>
        </div>
      </div>
    </div>
  );
}
