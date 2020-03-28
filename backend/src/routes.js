const express = require('express');
const OngCtl = require('./controller/OngCtl');
const IncidentCtl = require('./controller/IncidentCtl');
const ProfileCtl = require('./controller/ProfileCtl');
const SessionCtl = require('./controller/SessionCtl');


const routes = express.Router();

routes.post('/session', SessionCtl.create);


routes.get('/ongs', OngCtl.index);
routes.post('/ongs', OngCtl.create);

routes.get('/incidents', IncidentCtl.index);
routes.post('/incidents', IncidentCtl.create);
routes.delete('/incidents/:id', IncidentCtl.delete);

routes.get('/profile', ProfileCtl.index);

module.exports = routes;



/**
 * Rota / Recurso
 */

 /**
  * HTTP Methods
  * GET: Consultar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos.
   * Request Body: Corpo da requisição, utilizado para criar/alterar recursos.
   */