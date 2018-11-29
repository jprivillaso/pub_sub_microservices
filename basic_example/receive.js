const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((channelErr, channel) => {
    const channelName = 'hello';

    channel.assertQueue(channelName, { durable: false });
    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', channelName);
    channel.consume(channelName, (msg) => {
      console.log(' [x] Received %s', msg.content.toString());
    }, { noAck: true });
  });
});
