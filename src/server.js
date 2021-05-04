const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./common/swagger');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

// Swagger URL
app.use(
    '/api/v0/explore',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs)
 );

module.exports = app;