export interface Persona {
    nombre:string;
    apellidos:string;
    pais:string;
    ciudad:string;
    genero:string;

}

export const ListaClientes:Array<Persona>=
    [
    {
        nombre:"Diego",
        apellidos:"Olivera",
        pais:"Chile",
        ciudad:"Villa Alemana",
        genero:"masculino",
    },

    {
        nombre:"Josefa",
        apellidos:"Martinez",
        pais:"Chile",
        ciudad:"PeñaBlanca",
        genero:"femenino",
    },

    {
        nombre:"Elizabeth",
        apellidos:"Orellana",
        pais:"Chile",
        ciudad:"Quilpué",
        genero:"femenino",
    },

    {
        nombre:"Cristobal",
        apellidos:"Soto",
        pais:"Chile",
        ciudad:"Villa Alemana",
        genero:"masculino",
    },
];


