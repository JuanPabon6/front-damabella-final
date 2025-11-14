// src/data/mockData.ts
export interface Notification {
  id: number;
  title: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
  read: boolean;
  createdAt: Date;
}

export const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "Nuevo pedido",
    message: "Tienes un nuevo pedido pendiente",
    type: "success",
    read: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Usuario registrado",
    message: "Se ha registrado un nuevo usuario",
    type: "info",
    read: true,
    createdAt: new Date(),
  },
];
