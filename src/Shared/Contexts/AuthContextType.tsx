import type React from "react";
import type { User } from "../Utils/types/Usertype";
import { useEffect, useState } from "react";
import  AuthContext  from "./AuthContexts";

const UsuarioPrueba: User ={
    Id : 1,
    Nombre : "Juan Jose",
    Tip_Doc : "Cedula",
    Documento : 1033259234,
    Celular : 3147854500,
    Direccion : "cra88A#18c26",
    Correo : "pabonjuanjose6@gmail.com",
    Contraseña : "12345678",
    Rol : "Administrador",
    Estado : "Activo",
    FechaCreacion : new Date().toISOString()
}

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
  const savedUser  =localStorage.getItem("damabella_user");
  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);

const login = async (email: string, password: string): Promise<boolean> => {
    // Simulación de login
    // En producción, esto haría una llamada a la API
    if (email === 'admin@damabella.com' && password === 'admin123') {
      setUser(UsuarioPrueba);
      localStorage.setItem('damabella_user', JSON.stringify(UsuarioPrueba));
      return true;
    }
    
    // Login de empleado
    if (email === 'empleado@damabella.com' && password === 'empleado123') {
      const empleado: User = {
        Id: 2,
        Nombre: 'Laura Martínez',
        Correo: 'empleado@damabella.com',
        Contraseña : "12345678",
        Tip_Doc : "cedula",
        Celular: 573012345678,
        Direccion : "fffvd#fmmkemmf",
        Documento: 9876543210,
        Rol: 'Empleado',
        Estado: 'Activo',
        FechaCreacion: '2024-02-20',
      };
      setUser(empleado);
      localStorage.setItem('damabella_user', JSON.stringify(empleado));
      return true;
    }

    // Login de cliente
    if (email === 'cliente@damabella.com' && password === 'cliente123') {
      const cliente: User = {
        Id: 3,
        Nombre: 'Laura Martínez',
        Correo: 'empleado@damabella.com',
        Contraseña : "12345678",
        Tip_Doc : "cedula",
        Celular: 573012345678,
        Direccion : "fffvd#fmmkemmf",
        Documento: 9876543210,
        Rol: 'Empleado',
        Estado: 'Activo',
        FechaCreacion: '2024-02-20',
      };
      setUser(cliente);
      localStorage.setItem('damabella_user', JSON.stringify(cliente));
      return true;
    }

    return false;
  };

  const logout = () =>{
    setUser(null);
    localStorage.removeItem("damabella_user");
  }

  const UpdateProfile = (data: Partial<User>) => {
    if (user) {
        const UpdateUser = {...user, ...data}
        setUser(UpdateUser)
        localStorage.setItem("damabella_user", JSON.stringify(UpdateUser))
    }
  }

  return(
    <AuthContext.Provider
    value={{
      user,
      login,
      logout,
      updateProfile : UpdateProfile,
      IsAuthenticated : !!user
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

