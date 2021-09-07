const {
  isAuthEmail,
} = require('../pagination');

const email = 'example@gmail.com';
// const { getUsers, getUserId, postUsers, deleteUser, putUser } = require('../users');

describe('isAuthEmail', () => {
  it('should return true if is a valid email ', () => {
    expect(isAuthEmail(email)).toBe(true);
  });

  it('should return false if is an invalid email', () => {
    expect(isAuthEmail('')).toBe(false);
  });
});

describe('getUsers', () => {
  it('should get all users', (done) => {
    done();
  });
});// describe('getUsers', () => {
//   it('should get users collection', (done) => {
//     done();
//   });
// });
// describe('getUsers', () => {
//   it('should get users collection', (done) => {
//     done();
//   });
// });

// describe('getUsers', () => {
//   it('should get users collection', (done) => {
//     done();
//   });
// });

// describe('getUser', () => {
//   it('should get users collection', (done) => {
//     done();
//   });
// });

// describe('deleteUsers', () => {
//   it('should delete user collection', (done) => {
//     done();
//   });
// });

// describe('postUsers', () => {
//   it('should get users collection', (done) => {
//     done();
//   });
// });

// describe('putUsers', () => {
//   it('should get users collection', (done) => {
//     done();
//   });
// });
// // npx jest -t getUsers
// const mongoose = require('mongoose');
// const User = require('../../models/user.model');
