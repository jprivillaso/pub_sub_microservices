export default function (app) {
  app.get('/health', (req, res) => {
    res.status(200).json('Hello Health Publisher');
  });
}
