const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  if (err) {
    console.error(err);
    return;
  }

  conn.createChannel((channelErr, ch) => {
    const channelName = 'hello';
    const message = 'Hello World!';

    ch.assertQueue(channelName, { durable: false });
    ch.sendToQueue(channelName, Buffer.from(message));
    console.log(' [x] Sent %s', message);
  });

  setTimeout(() => { conn.close(); process.exit(0); }, 500);
});