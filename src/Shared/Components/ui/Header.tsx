// src/Shared/Components/ui/Header.tsx
import { useState, useEffect, useRef } from "react";
import { Bell, LogOut, User as UserIcon, ChevronDown } from "lucide-react";
import { Badge } from "./Badge";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { mockNotifications, type Notification } from "../../Utils/notifications/mockData";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [notifications] = useState<Notification[]>(mockNotifications || []);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef<HTMLDivElement | null>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getInitials = (name?: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // CERRAR MENÚ AL HACER CLICK AFUERA
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target as Node) &&
        userRef.current &&
        !userRef.current.contains(e.target as Node)
      ) {
        setShowNotifications(false);
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    if (confirm("¿Estás segura de que deseas cerrar sesión?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <header
      className="
        h-20 
        bg-white 
        border-b 
        border-gray-200 
        flex 
        items-center 
        justify-between 
        px-8 
        sticky 
        top-0 
        z-[60]
      "
    >
      {/* IZQUIERDA — TITULO Figma */}
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
            Bienvenida,{" "}
            <span className="text-black">{user?.name ?? "Usuario"}</span>
          </h1>
          <p className="text-sm text-gray-600">{user?.role ?? "Rol"}</p>
        </div>
      </div>

      {/* DERECHA — NOTIFS + USER */}
      <div className="flex items-center gap-6">

        {/* 🔔 NOTIFICATIONS */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="relative p-2 rounded-md hover:bg-gray-100"
          >
            <Bell className="h-6 w-6 text-gray-800" />
            {unreadCount > 0 && (
              <Badge
                variant="danger"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
              >
                {unreadCount}
              </Badge>
            )}
          </button>

          {showNotifications && (
            <div
              className="
                absolute 
                top-full 
                right-0 
                mt-2 
                w-80 
                bg-white 
                border 
                border-gray-200 
                rounded-lg 
                shadow-xl 
                z-[200]
              "
            >
              <div className="p-4 space-y-3">
                <h4 className="text-sm font-semibold">Notificaciones</h4>

                <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
                  {notifications.length === 0 && (
                    <p className="text-sm text-gray-500">No hay notificaciones</p>
                  )}

                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 rounded-md border ${
                        !n.read ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 h-2 w-2 rounded-full ${
                            n.type === "success"
                              ? "bg-green-500"
                              : n.type === "warning"
                              ? "bg-yellow-500"
                              : n.type === "error"
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {n.title}
                          </p>
                          <p className="text-xs text-gray-600">{n.message}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(n.createdAt).toLocaleDateString("es-ES", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>

        {/* 👤 USER MENU */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg"
          >
            <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
              {getInitials(user?.name)}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">
                {user?.name ?? "Usuario"}
              </p>
              <p className="text-xs text-gray-600">{user?.email ?? ""}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </button>

          {/* DROPDOWN — SIEMPRE SE VE, NUNCA SE PIERDE */}
          {showUserMenu && (
            <div
              className="
                absolute 
                top-full 
                right-0 
                mt-2 
                w-56 
                bg-white 
                border 
                border-gray-200 
                rounded-lg 
                shadow-xl 
                z-[200]
              "
            >
              <div className="p-2">
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium">Mi Cuenta</p>
                </div>

                <button
                  onClick={() => {
                    navigate("/perfil");
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 rounded-md"
                >
                  <UserIcon className="h-4 w-4 text-gray-600" />
                  Perfil
                </button>

                <div className="border-t border-gray-100 my-2" />

                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                >
                  <LogOut className="h-4 w-4" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
