"use strict";
var express = require("express");
var persona = require("../schemas/persona");
var router = express.Router();
router.get('/persona', function (req, res, next) {
    var query = persona.find({});
    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }
        console.log(res.json(data));
    });
});
router.put('/persona/:id', function (req, res, next) {
    persona.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.post('/persona', function (req, res, next) {
    var per = new persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });
    per.save(function (err) {
        if (err)
            throw err;
        console.log('Persona Guardada!');
    });
});
module.exports = router;
//# sourceMappingURL=persona.js.map