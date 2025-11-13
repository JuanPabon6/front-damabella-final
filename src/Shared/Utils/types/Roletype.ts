export interface Roles {
    Id : number;
    NombreRol : string;
    Descripcion? : string | null;
    Permisos : string[]
}