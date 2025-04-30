const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b should be numbers.' });
  }
  const sum = a + b;
  res.json({ sum });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

//to test
//curl.exe -X POST http://localhost:3000/sum -H "Content-Type: application/json" -d '{\"a\":5,\"b\":3}'

