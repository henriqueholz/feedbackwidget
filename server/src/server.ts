import express from 'express'

const app = express();

app.post('/feedbacks', (req, res) => {
  console.log(req.body);

  return res.send('hello world');
})

app.listen(3333, () => {
  console.log('HTTP server running!');
})