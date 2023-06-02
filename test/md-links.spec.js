const mdLinks = require('../index.js');
const fs = require('fs');
const path = require('path');

jest.mock('fs');

describe('mdLinks', () => {
  test('should reject with an error if file does not exist', () => {
    fs.existsSync.mockReturnValue(false);
    const pathFile = 'arquivo-vazio.md';
    return expect(mdLinks(pathFile)).rejects.toThrowError();
  });
  test('should reject with an error if file is empty', () => {
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({ size: 0 });
    const pathFile = 'arquivo-vazio.md';
    return expect(mdLinks(pathFile)).rejects.toThrowError();
  });
  test('should resolve with an array of links if file exists and is not empty', () => {
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({ size: 100 });
    fs.readFile.mockImplementation((path, encoding, callback) => {
      const fileContents = '[Google](http://google.com/)';
      callback(null, fileContents);
    });
    const pathFile = 'texto.md';
    const expectedLinks = [
      {
        href: 'http://google.com/',
        text: 'Google',
        file: path.resolve('texto.md'),
      },
    ];
    return expect(mdLinks(pathFile)).resolves.toEqual(expectedLinks);
  });
  test('should resolve with stats object if options.validate is true', () => {
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({ size: 100 });
    fs.readFile.mockImplementation((path, encoding, callback) => {
      const fileContents = '[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)';
      callback(null, fileContents);
    });
    const pathFile = 'texto.md';
    const options = { validate: true, stats: true };
    const expectedStats = {
      total: 1,
      unique: 1,
      broken: 0,
    };
    return expect(mdLinks(pathFile, options)).resolves.toEqual(expectedStats);
  });
  test('should resolve with stats object if options.validateAndStats is true', () => {
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({ size: 100 });
    fs.readFile.mockImplementation((path, encoding, callback) => {
      const fileContents = '[Node-js](https://nodejs.reativa.dev/0046-node-module-fs/index)';
      callback(null, fileContents);
    });
    const pathFile = 'notes.md';
    const options = { validateAndStats: true };
    const expectedStats = {
      total: 1,
      unique: 1,
    };
    return expect(mdLinks(pathFile, options)).resolves.toEqual(expectedStats);
  });
});
