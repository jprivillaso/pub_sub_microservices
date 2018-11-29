import express from 'express';
import consign from 'consign';

import SubscriberService from './service/subscriber';
import config from './config';

const app = express();

consign(config.consign)
  .include('routes')
  .into(app);

app.listen(config.server.port, () => {
  console.log(`Server created successfully at port https://${config.server.host}:${config.server.port}`);

  const subscriber = new SubscriberService();
  subscriber.subscribe();
});

export default app;
