"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Crea la conexión a MongoDB
exports.connectionStrings = {
    mongoDB_main: 'mongodb://localhost/app',
};
// Habilita/deshabilita módulos de la API
exports.modules = {
    turnos: {
        active: true,
        path: './modules/app/routes',
        route: '/modules/app',
        auth: true,
    }
};
//# sourceMappingURL=config.js.map