# Markdown Links


<div align="center">

  <br>
  <br>
  <img align="center" alt="Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <br>
</div>



## Índice

* [1. Prefácio](#1-prefacio) 📃
* [3. Instalação](#3-Instalação) 🔽
* [4. Terminal e seus comandos](#4-Terminal-e-seus-comandos)💻



## Prefácio

Quarto projeto desenvolvido para o bootcamp da [@Laboratória](https://www.laboratoria.la/br). O projeto Markdown Links tem como foco o desenvolvimento da ferramenta de linha de comando (CLI) e sua biblioteca, onde é possível identificar links em arquivos markdown e seus respectivos status https.

Desse modo, foi criada uma ferramenta usando o Node.js que lê e analisa arquivos no formato Markdown, para verificar os arquivos que contém links e mostrar algumas estatísticas. Neste projeto, foi criado uma ferramenta de linha de comando (CLI) assim como a sua própria biblioteca (library) em Javascript usando o Node.js.

## Instalação

*  `npm install md-links-erikaoliveira`


## Terminal e seus comandos
O usuário que utilizar a ferramenta desenvolvida, poderá localizar os links em um arquivo de interesse com o comando abaixo:
* `md-links caminho-do-arquivo` </br>
  </br><img alt=""/><br>


A segunda possibilidade de uso é inserir o comando --validate após o caminho do arquivo, para que assim a ferramenta informe os links que estão com erros.
* `md-links caminho-do-arquivo --validate` </br>

  </br><img alt="Exemplo da funcionalidade --validate" width="850" src="" /><br>

A terceira funcionalidade, é verificar informações resumidas sobre os links, acrescentando o comando --stats:
* `md-links caminho-do-arquivo --stats` </br>
  </br><img alt="Exemplo da funcionalidade --stats" width="850" src="" /><br>

Também é possível utilizar as duas opções acima, juntas:
* `md-links caminho-do-arquivo --stats --validate` </br>
</br><img alt="Exemplo da funcionalidade --stats" width="850" src="" /><br>

A ferramenta está apta a tratar os erros, exemplo:
1) O usário digita um arquivo sem extensão .md:
* `md-links caminho-do-arquivo-semMD` </br>
2) O usuário insere um arquivo vazio:
* `md-links caminho-do-arquivo-vazio` </br>

</br><img alt="Exemplo de tratativas de erros" width="850" src="" /><br>


## 👩🏻‍💻 Desenvolvido por:
 Erika Oliveira | [Linkedin](https://www.linkedin.com/in/erikaoli/)

