import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface RecoverProps {
  onRecover: (email: string) => void;
}

export default function RecoverPassword({ onRecover }: RecoverProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRecover(email);
    setMessage(`Se ha enviado un email a ${email}`);
    setTimeout(() => {
      navigate("/login"); // Redirige al login después de 2 segundos
    }, 2000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/logo-damabella.jpeg')` }}
      ></div>

      <div className="flex w-full md:w-1/2 h-full items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
              DAMABELLA
            </h1>
            <p className="text-gray-500 text-sm">Recuperar contraseña</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-gray-800 bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Enviar enlace
            </button>

            {message && (
              <div className="text-center text-sm text-green-600 mt-2">
                {message}
              </div>
            )}

            <p className="text-center text-sm text-gray-600 mt-4">
              <Link to="/login" className="text-black font-medium hover:underline">
                Volver a iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
