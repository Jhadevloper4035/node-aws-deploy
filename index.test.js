const request = require('supertest');
const app = require('./index');

describe('Route Testing', () => {
  test('GET / should return Home Page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });

  test('GET /about should return About Us', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('About Us Page');
  });

  test('GET /contact should return Contact Us', async () => {
    const res = await request(app).get('/contact');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Contact Us Here');
  });
});
