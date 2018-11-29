import amqp from 'amqplib/callback_api';

export default class Subscriber {
  subscribe() {
    amqp.connect('amqp://rabbitmq', (err, conn) => {
      if (err) {
        console.error(err);
        throw new Error(err);
      }

      conn.createChannel((channelErr, channel) => {
        const channelName = 'my_channel';

        channel.assertQueue(channelName, { durable: false });
        console.log(' [...] Waiting for messages in channel %s.', channelName);

        channel.consume(channelName, (msg) => {
          console.log(' [x] Received message: %s', msg.content.toString());
        }, { noAck: true });
      });
    });
  }
}
