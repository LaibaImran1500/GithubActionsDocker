const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b should be numbers.' });
  }
  const sum = a + b;
  res.json({ sum });
});

describe('POST /sum', () => {
  it('should return the sum of two numbers', async () => {
    const response = await request(app)
      .post('/sum')
      .send({ a: 5, b: 3 });
    expect(response.statusCode).toBe(200);
    expect(response.body.sum).toBe(8);
  });

  it('should return 400 if inputs are not numbers', async () => {
    const response = await request(app)
      .post('/sum')
      .send({ a: '5', b: 3 });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Both a and b should be numbers.');
  });
});
