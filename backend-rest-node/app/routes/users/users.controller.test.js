const chai = require('chai');
const { expect } = chai;
const usersController = require('./users.controller');

describe('Users Controller', () => {
  it('should have index function', () => {
    expect(usersController.index).to.be.a('function');
  });
  
  it('should have create function', () => {
    expect(usersController.create).to.be.a('function');
  });
  
  it('should have show function', () => {
    expect(usersController.show).to.be.a('function');
  });
  
  it('should have update function', () => {
    expect(usersController.update).to.be.a('function');
  });
  
  it('should have destroy function', () => {
    expect(usersController.destroy).to.be.a('function');
  });
});
