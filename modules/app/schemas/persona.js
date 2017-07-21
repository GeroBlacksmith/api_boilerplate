"use strict";
var mongoose = require("mongoose");
var personaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: String
});
var persona = mongoose.model('persona', personaSchema, 'persona');
module.exports = persona;
//# sourceMappingURL=persona.js.map