// import React, { useState } from 'react';
// import { Sidebar } from '../../../Shared/Components/ui/Sidebar';
// import { Header } from '../../../Shared/Components/ui/Header';
// import Dashboard from './Dashboard.Index';
// import Users from '../../Users/Users.Index';
// import Roles from '../../Roles/Roles.Index';
// import Clients from '../../Clients/Clients.Index';
// import Providers from '../../Providers/Providers.Index';
// import Categories from '../../Categories/Categories.Index';
// import Products from '../../Products/Products.Index';
// import Colors from '../../Colors/Colors.Index';
// import Orders from '../../Orders/Orders.Index';
// import Sales from '../../Sales/Sales.Index';
// import Shoppings from '../../Shoppings/Shoppings.Index';
// import Returns from '../../Returns/Returns.Index';
// import Profile from '../../Auth/Components/Profile.Index';

// export type Module =
//   | 'dashboard'
//   | 'usuarios'
//   | 'roles'
//   | 'clientes'
//   | 'proveedores'
//   | 'categorias'
//   | 'productos'
//   | 'tallas-colores'
//   | 'pedidos'
//   | 'ventas'
//   | 'compras'
//   | 'devoluciones'
//   | 'perfil';

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   role?: string;
// }

// interface DashboardLayoutProps {
//   user: User;
//   onLogout: () => void;
//   onUpdateUser: (user: User) => void;
// }

// export function DashboardLayout({ user, onLogout, onUpdateUser }: DashboardLayoutProps) {
//   const [currentModule, setCurrentModule] = useState<Module>('dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const renderModule = () => {
//     switch (currentModule) {
//       case 'dashboard': return <Dashboard user={user} />;
//       case 'usuarios': return <Users user={user} />;
//       case 'roles': return <Roles user={user} />;
//       case 'clientes': return <Clients user={user} />;
//       case 'proveedores': return <Providers user={user} />;
//       case 'categorias': return <Categories user={user} />;
//       case 'productos': return <Products user={user} />;
//       case 'tallas-colores': return <Colors user={user} />;
//       case 'pedidos': return <Orders user={user} />;
//       case 'ventas': return <Sales user={user} />;
//       case 'compras': return <Shoppings user={user} />;
//       case 'devoluciones': return <Returns user={user} />;
//       case 'perfil': return <Profile user={user} onUpdateUser={onUpdateUser} />;
//       default: return <Dashboard user={user} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar
//         user={user}
//         currentModule={currentModule}
//         onModuleChange={setCurrentModule}
//         isOpen={sidebarOpen}
//         onToggle={() => setSidebarOpen(!sidebarOpen)}
//       />
//       <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
//         <Header
//           user={user}
//           onLogout={onLogout}
//           onProfileClick={() => setCurrentModule('perfil')}
//         />
//         <main className="flex-1 p-4 md:p-6 lg:p-8">
//           {renderModule()}
//         </main>
//       </div>
//     </div>
//   );
// }
