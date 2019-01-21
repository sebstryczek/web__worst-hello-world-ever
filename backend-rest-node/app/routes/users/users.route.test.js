const chaiHttp = require('chai-http');
const chai = require('chai').use(chaiHttp);
const { request, expect } = chai;

const User = require('./user.model');
const app = require('../../app');

const testUser = {
  email: 'test.user@gmail.com',
  password: 'password123'
};

before(async () => {
  //const result = await request(app).post('/users').send(preSave);
  //expect(result.status).to.equal(200);
  await User.query().insert( testUser );
});

after('droping test db', async () => {
  await User.query().delete();
});

describe('GET /users', () => {
  it('respond with json', async () => {
    const result = await request(app).get('/users')
    expect(result.status).to.equal(200);
  });
});
