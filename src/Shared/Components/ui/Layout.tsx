import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm h-20 flex items-center px-6">
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-3">
        <div className="bg-pink-200 size-12 rounded-lg flex items-center justify-center">
          {/* Aquí iría el logo si tienes imagen */}
          <span className="font-bold text-lg text-pink-700">D</span>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-gray-700 text-sm font-medium">Nombre admin</span>
          <span className="text-gray-400 text-xs">Administrador</span>
        </div>
      </div>

      {/* CENTER: BUSCADOR */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[45%]">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-gray-100 py-2 pl-10 pr-3 rounded-xl text-sm outline-none"
          />
          <Search className="absolute left-3 top-2.5 size-4 text-gray-500" />
        </div>
      </div>

      {/* RIGHT: NOTIFICACIONES - PERFIL */}
      <div className="flex items-center gap-6">
        {/* Notificaciones */}
        <div className="relative cursor-pointer">
          <Bell className="size-6 text-gray-700" />

          {/* Punto rojo notificaciones */}
          <span className="absolute -top-1 -right-1 size-3 bg-red-500 rounded-full"></span>
        </div>

        {/* Avatar */}
        <div className="size-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}
