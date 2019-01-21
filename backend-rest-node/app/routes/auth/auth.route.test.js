const chaiHttp = require('chai-http');
const chai = require('chai').use(chaiHttp);
const { request, expect } = chai;

const User = require('../users/user.model');
const app = require('../../app');

const existingUser = {
  email: 'existing.user@gmail.com',
  password: 'password123'
};

const newUser = {
  email: 'new.user@gmail.com',
  password: 'password123'
};

before(async () => {
  await User.query().insert( existingUser );
});

after('droping test db', async () => {
  await User.query().delete();
});

describe('POST /auth/signUp', () => {
  //it('respond with json', async () => {
  //  const result = await request(app).post('/auth/signUp');
  //  expect(result.status).to.equal(200);
  //});

  it('should crete new user if email not found', async () => {
    const result = await request(app).post('/auth/signUp').send(newUser);
    expect(result.status).to.equal(200);
    expect(result.body).not.to.be.empty;
    expect(result.body).to.have.property('token');
  });


  it('should return 403 if email was found', async () => {
    const result = await request(app).post('/auth/signUp').send(existingUser);
    expect(result.status).to.equal(403);
    expect(result.text).to.equal('{"error":"Email is already in use"}');
  });
});

describe('POST /auth/signIn', () => {
  it('respond with json', async () => {
    const result = await request(app).post('/auth/signIn').send(existingUser);
    expect(result.status).to.equal(200);
  });
});
