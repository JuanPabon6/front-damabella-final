import  Header from "./Header";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen w-full flex bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-60 bg-white shadow-md">
        {/* contenido del sidebar */}
      </aside>

      {/* CONTENEDOR DERECHO */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

    </div>
  );
}
