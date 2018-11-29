export default {
  server: {
    host: process.env.SUBSCRIBER_SERVER_HOST || 'localhost',
    port: process.env.SUBSCRIBER_SERVER_PORT || '3000'
  },
  bodyParser: {
    extended: true,
    limit: '50mb'
  }
};
