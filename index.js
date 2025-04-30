const express = require('express');
const app = express();

app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a + b });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;

//to test
//curl.exe -X POST http://localhost:3000/sum -H "Content-Type: application/json" -d '{\"a\":5,\"b\":3}'

