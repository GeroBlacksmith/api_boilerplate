import * as mongoose from 'mongoose';

let personaSchema = new mongoose.Schema({
  nombre:  String,
  apellido: String,
  edad:   String  
});

let persona = mongoose.model('persona', personaSchema, 'persona');

export = persona;