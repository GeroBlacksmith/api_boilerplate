import * as express from 'express';
import * as persona from '../schemas/persona';

var router = express.Router();

router.get('/persona', function (req, res, next) {

  let query = persona.find({});

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
  let per = new persona({
    nombre: req.body.nombre,
    apellido: req.body.apellido
  })

  per.save(function (err) {
    if (err) throw err;

    console.log('Persona Guardada!');
  });
})


export = router;
