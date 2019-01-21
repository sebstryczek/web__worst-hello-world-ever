const chai = require('chai');
const { expect } = chai;
const authController = require('./auth.controller');

describe('Auth Controller', () => {
  it('should have signUp function', () => {
    expect(authController.signUp).to.be.a('function');
  });
  
  it('should have signIn function', () => {
    expect(authController.signIn).to.be.a('function');
  });
});
