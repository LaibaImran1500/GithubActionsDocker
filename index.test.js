const request = require('supertest');
const app = require('./index');
let server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    console.log('Test server running on port 4000');
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('POST /sum', () => {
  it('should return the sum of two numbers', async () => {
    const res = await request(server).post('/sum').send({ a: 3, b: 7 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(10);
  });

  it('should return 400 if inputs are invalid', async () => {
    const res = await request(server).post('/sum').send({ a: 'x', b: 2 });
    expect(res.statusCode).toBe(400);
  });
});
