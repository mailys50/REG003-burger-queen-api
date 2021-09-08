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
    //  no tiene pagina anterior y si tiene pagina siguient
    hasPrevPage: false,
    hasNextPage: true,
  };
  const url = 'localhost/';
  const page = 5;
  const limit = 10;
  const total = 100;
  const result = {
    first: 'localhost/?limit=10&page=1',
    prev: 'localhost/?limit=10&page=5',
    next: 'localhost/?limit=10&page=6',
    last: 'localhost/?limit=10&page=100',
  };
  it('should be return link', () => {
    expect(pagination(resp, url, page, limit, total)).toEqual(result);
  });
});
describe('enlace de paginacion', () => {
  const resp = {
    //   tiene pagina anterior y no tiene pagina siguient
    hasPrevPage: true,
    hasNextPage: false,
  };
  const url = 'localhost/';
  const page = 0;
  const limit = 10;
  const total = 100;
  const result = {
    first: 'localhost/?limit=10&page=1',
    prev: 'localhost/?limit=10&page=-1',
    next: 'localhost/?limit=10&page=0',
    last: 'localhost/?limit=10&page=100',
  };

  it('should be return link', () => {
    expect(pagination(resp, url, page, limit, total)).toEqual(result);
    // eslint-disable-next-line no-console
    console.log(`pase${result}`);
  });
});
