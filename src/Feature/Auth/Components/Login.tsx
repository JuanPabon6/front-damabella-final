import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: (email: string, password: string) => boolean;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      navigate("/dashboard"); // redirige al panel
    }
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
            <p className="text-gray-500 text-sm">Panel Administrativo</p>
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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-gray-800 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="text-right text-sm">
              <Link to="/recover" className="text-gray-600 hover:text-gray-900">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Iniciar Sesión
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              ¿No tienes cuenta?{" "}
              <Link to="/register" className="text-black font-medium hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
