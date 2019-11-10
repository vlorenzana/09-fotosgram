export interface Usuario {
    avatar: string;
    _id: string;
    nombre: string;
    email: string;
}

export interface Post {
    imgs?: any[];
    _id?: string;
    mensaje?: string;
    usuario?: Usuario;
    created?: Date;
    cords?: string;
}

export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    post: Post[];
}