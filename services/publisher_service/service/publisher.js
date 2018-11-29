import amqp from 'amqplib/callback_api';

export default class Subscriber {
  send(message) {
    amqp.connect('amqp://rabbitmq', (err, conn) => {
      if (err) {
        console.error(err);
        return;
      }

      conn.createChannel((channelErr, ch) => {
        const channel = 'my_channel';

        ch.assertQueue(channel, { durable: false });
        ch.sendToQueue(channel, Buffer.from(message));

        console.log('[x] Sent message: %s', message);
      });
    });
  }
}
