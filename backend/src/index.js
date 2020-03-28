/* Instancia o pacote Express (usado para as rotas) */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/** Permissão da origem de acesso */
app.use(cors());

/** Content Type da aplicação */
app.use(express.json());
app.use(routes);

app.listen(3333);