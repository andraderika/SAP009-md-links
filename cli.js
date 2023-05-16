const mdLinks = require('./index.js');

mdLinks('arquivo/texto.md')
  .then(links => console.log(links))
  .catch(err => console.error(err));
