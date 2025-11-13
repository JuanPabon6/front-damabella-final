import type { Estatus } from "./Usertype";

export interface Proveedor {
    Id : number;
    Nit : number;
    Nombre_proveedor : string;
    Persona_contacto : string;
    Telefono : string;
    Correo_proveedor : string;
    CategoriaId : string;
    Estado : Estatus;
    Direccion : string;
}