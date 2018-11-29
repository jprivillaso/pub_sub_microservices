import Publisher from '../service/publisher';

export default function (app) {
  const publisher = new Publisher();

  app.get('/sendMessage', (req, res) => {
    publisher.send(req.query.message);
    res.status(200).json({ message: 'Message sent successfully' });
  });
}
