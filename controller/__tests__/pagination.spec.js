const { isAuthEmail, pagination } = require('../pagination');

describe('email es valido', () => {
  it('should be true', () => {
    expect(isAuthEmail('nan@gmail.com')).toBeTruthy();
  });
  it('should be false', () => {
    expect(isAuthEmail('test')).toBeFalsy();
  });
});
describe('crear un enlace de paginacion', () => {
  const resp = {
    hasPrevPage: false,
    hasNextPage: true,
  };
  const url = 'localhost/';
  const page = 8;
  const limit = 20;
  const total = 80;
  const result = {
    first: 'localhost/?limit=20&page=1',
    prev: 'localhost/?limit=20&page=8',
    next: 'localhost/?limit=20&page=6',
    last: 'localhost/?limit=20&page=80',
  };
  it('should be return link', () => {
    expect(pagination(resp, url, page, limit, total)).toEqual(result);
  });
});
describe('crear un enlace de paginacion', () => {
  const resp = {
    hasPrevPage: true,
    hasNextPage: false,
  };
  const url = 'localhost/';
  const page = 8;
  const limit = 20;
  const total = 80;
  const result = {
    first: 'localhost/?limit=20&page=1',
    prev: 'localhost/?limit=20&page=-1',
    next: 'localhost/?limit=20&page=1',
    last: 'localhost/?limit=20&page=80',
  };
  it('should be return link', () => {
    expect(pagination(resp, url, page, limit, total)).toEqual(result);
  });
});
