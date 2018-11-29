import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import express from 'express';

import config from './config';

// Routes
import publisherRoutes from './routes/index';
import healthCheck from './routes/healthcheck';

const app = express();

app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json(config.bodyParser));
app.use(compression());
app.use(cors());

publisherRoutes(app);
healthCheck(app);

app.get('/health', (req, res) => {
  res.status(200).json('Hello Health Publisher');
});

app.listen(config.server.port, () => {
  console.log(`Server created successfully at port https://${config.server.host}:${config.server.port}`);
});

export default app;
