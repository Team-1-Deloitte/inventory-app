const { Item } = require('../models');
const server = require('../server');
const request = require('supertest');

describe('GET /item', () => {
  it('should return a 200 OK response when the request is valid and the user is authenticated', async () => {
    const response = await request(server)
      .get('/item')
      .set('Authorization', 'Bearer your_token_here');

    expect(response.status).toBe(200);
    expect(response.body).to.be.an('array');
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((item) => {
      expect(item).to.have.property('id');
      expect(item).to.have.property('name');
      expect(item).to.have.property('description');
      expect(item).to.have.property('price');
      expect(item).to.have.property('image');
    });
  });

  it('should return a 401 Unauthorized response when the user is not authenticated', async () => {
    const response = await request(server)
      .get('/item');

    expect(response.status).toBe(401);
    expect(response.body).to.have.property('error', 'Unauthorized');
  });
});