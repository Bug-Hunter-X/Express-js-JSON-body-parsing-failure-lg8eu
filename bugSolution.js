const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.post('/data', (req, res) => {
  console.log(req.body); // req.body is now parsed JSON
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));