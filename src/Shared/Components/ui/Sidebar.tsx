import { useState } from "react";
import { ChevronDown, ChevronUp, User, LogOut, LayoutDashboard, Boxes, Settings } from "lucide-react";

export default function Sidebar() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openModules, setOpenModules] = useState(false);

  return (
    <aside className="h-screen w-64 bg-white border-r shadow-sm flex flex-col">
      
      {/* LOGO */}
      <div className="h-20 flex items-center justify-center border-b">
        <h1 className="text-xl font-semibold">Dama Bella</h1>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4">

        {/* Dashboard */}
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </div>

        {/* MÓDULOS PRINCIPALES */}
        <div>
          <button
            onClick={() => setOpenModules(!openModules)}
            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer mt-2"
          >
            <div className="flex items-center space-x-3">
              <Boxes size={20} />
              <span className="font-medium">Módulos</span>
            </div>
            {openModules ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {openModules && (
            <div className="ml-8 mt-1 space-y-1 text-sm text-gray-700">
              <p className="hover:underline cursor-pointer">Inventario</p>
              <p className="hover:underline cursor-pointer">Ventas</p>
              <p className="hover:underline cursor-pointer">Clientes</p>
              <p className="hover:underline cursor-pointer">Pedidos</p>
            </div>
          )}
        </div>

        {/* Configuración */}
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer mt-2">
          <Settings size={20} />
          <span className="font-medium">Configuración</span>
        </div>
      </nav>

      {/* USUARIO (DEBE APARECER SIEMPRE) */}
      <div className="border-t p-4 relative">
        <button
          onClick={() => setOpenUserMenu(!openUserMenu)}
          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <User size={20} />
            <span className="font-medium">Mi Cuenta</span>
          </div>
          {openUserMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* MENÚ DEL USUARIO */}
        {openUserMenu && (
          <div className="absolute bottom-16 left-4 w-52 bg-white border shadow-lg rounded-lg p-2">
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
              <User size={18} />
              <span>Perfil</span>
            </div>

            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
              <LogOut size={18} />
              <span>Cerrar sesión</span>
            </div>
          </div>
        )}
      </div>

    </aside>
  );
}
