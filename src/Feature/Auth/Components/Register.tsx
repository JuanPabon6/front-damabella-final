import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Phone, FileText, MapPin, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface RegisterProps {
  onRegister: (
    name: string,
    email: string,
    password: string,
    phone: string,
    documentType: string,
    documentNumber: string,
    address: string
  ) => boolean;
}

export default function Register({ onRegister }: RegisterProps) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [documentType, setDocumentType] = useState("CC");
  const [documentNumber, setDocumentNumber] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (pwd: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !documentNumber || !address || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    const success = onRegister(name, email, password, phone, documentType, documentNumber, address);
    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Imagen izquierda */}
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/logo-damabella.jpeg')` }}
      ></div>

      {/* Formulario derecha */}
      <div className="flex w-full md:w-1/2 h-full bg-gradient-to-br from-gray-50 to-white">
        <div className="flex-1 flex flex-col overflow-y-auto px-8 py-6">
          
          {/* Volver */}
          <div className="mb-4">
            <Link
              to="/login"
              className="flex items-center text-gray-800 hover:underline text-sm font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al login
            </Link>
          </div>

          {/* Título */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">DAMABELLA</h1>
            <p className="text-gray-500 text-sm">Crea tu cuenta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 flex-1">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Juan Pérez"
                className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
                />
              </div>
            </div>

            {/* Celular */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="3001234567"
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
                />
              </div>
            </div>

            {/* Documento */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de documento</label>
                <select
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 outline-none text-black bg-white"
                  required
                >
                  <option value="CC">C.C.</option>
                  <option value="TI">T.I.</option>
                  <option value="CE">C.E.</option>
                  <option value="NIT">NIT</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    required
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    placeholder="1234567890"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle 123 #45-67"
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
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

            {/* Confirmar contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none text-black bg-white"
                />
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600 mt-1">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors mt-4"
            >
              Registrarse
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="text-black font-medium hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
