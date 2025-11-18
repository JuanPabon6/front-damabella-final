import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserCog,
  UsersRound,
  Truck,
  FolderTree,
  Package,
  Ruler,
  Palette,
  ShoppingCart,
  DollarSign,
  ShoppingBag,
  RotateCcw,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import UseAuth  from '../../Hooks/UseAuth';
import logoImage from 'figma:asset/f9980eafb084086314287418c2277481f2448928.png';

interface NavItem {
  name: string;
  path?: string;
  icon: React.ComponentType<{ className?: string }>;
  roles?: string[];
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  {
    name: 'Gestión de Usuarios',
    icon: Users,
    roles: ['Administrador'],
    children: [
      { name: 'Usuarios', path: '/usuarios', icon: Users, roles: ['Administrador'] },
      { name: 'Roles', path: '/roles', icon: UserCog, roles: ['Administrador'] },
    ],
  },
  {
    name: 'Gestión de Clientes',
    icon: UsersRound,
    children: [
      { name: 'Clientes', path: '/clientes', icon: UsersRound },
      { name: 'Proveedores', path: '/proveedores', icon: Truck },
    ],
  },
  {
    name: 'Catálogo',
    icon: Package,
    children: [
      { name: 'Categorías', path: '/categorias', icon: FolderTree },
      { name: 'Productos', path: '/productos', icon: Package },
      { name: 'Tallas', path: '/tallas', icon: Ruler },
      { name: 'Colores', path: '/colores', icon: Palette },
    ],
  },
  {
    name: 'Transacciones',
    icon: ShoppingCart,
    children: [
      { name: 'Pedidos', path: '/pedidos', icon: ShoppingCart },
      { name: 'Ventas', path: '/ventas', icon: DollarSign },
      { name: 'Compras', path: '/compras', icon: ShoppingBag },
      { name: 'Devoluciones', path: '/devoluciones', icon: RotateCcw },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const { user } = UseAuth();
  const [openMenus, setOpenMenus] = useState<string[]>(['Dashboard']);

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((name) => name !== menuName)
        : [...prev, menuName]
    );
  };

  const hasAccess = (item: NavItem) => {
    if (!item.roles) return true;
    return user && item.roles.includes(user.Rol);
  };

  const filteredNavItems = navItems.filter(hasAccess);

  const renderNavItem = (item: NavItem, depth = 0) => {
    const Icon = item.icon;
    const isOpen = openMenus.includes(item.name);
    const isActive = item.path === location.pathname;

    if (item.children) {
      const visibleChildren = item.children.filter(hasAccess);
      if (visibleChildren.length === 0) return null;

      return (
        <div key={item.name}>
          <button
            onClick={() => toggleMenu(item.name)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900`}
            style={{ paddingLeft: `${12 + depth * 16}px` }}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {isOpen && (
            <div className="mt-1 space-y-1">
              {visibleChildren.map((child) => renderNavItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.path!}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-gray-700 text-white'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
        style={{ paddingLeft: `${12 + depth * 16}px` }}
      >
        <Icon className="h-5 w-5" />
        <span className="text-sm font-medium">{item.name}</span>
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white p-4 space-y-4 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-2">
        <img src={logoImage} alt="DAMABELLA" className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h1 className="font-bold tracking-tight">DAMABELLA</h1>
          <p className="text-xs text-gray-600">Panel Administrativo</p>
        </div>
      </div>

      {/* Navegación */}
      <nav className="space-y-1">
        {filteredNavItems.map((item) => renderNavItem(item))}
      </nav>
    </aside>
  );
}