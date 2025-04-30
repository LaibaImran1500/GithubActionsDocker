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

module.exports = app;

// Only run server if this file is run directly
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
