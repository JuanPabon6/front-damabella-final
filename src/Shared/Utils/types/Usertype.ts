type Roles = "Administrador" | "Empleado" | "Cliente";
export type Estatus = "Activo" | "Inactivo";

export interface User {
    Id : number;
    Nombre : string;
    Tip_Doc : string;
    Documento : number;
    Celular : number;
    Direccion : string;
    Correo : string;
    Contraseña: string;
    Rol : Roles;
    Estado : Estatus;
    FechaCreacion : string;
}
