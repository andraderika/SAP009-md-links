const mdLinks = require('./index.js');

mdLinks('arquivo/txt.md')
  .then(links => console.log(links))
  .catch(err => console.error(err));
