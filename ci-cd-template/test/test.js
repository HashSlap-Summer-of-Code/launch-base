const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message');
  });

  it('should return 404 for non-existent routes', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.status).to.equal(404);
  });
});
