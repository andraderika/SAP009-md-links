const mdLinks = require('./index.js');

mdLinks('arquivo/text.md')
  .then(links => console.log(links))
  .catch(err => console.error(err));
