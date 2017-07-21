//Crea la conexión a MongoDB
export const connectionStrings = {
    mongoDB_main: 'mongodb://localhost/app',
};

// Habilita/deshabilita módulos de la API
export const modules = {
    turnos: {
        active: true,
        path: './modules/app/routes',
        route: '/modules/app',
        auth: true,
    }
};
