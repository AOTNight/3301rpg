# Ficha de Personagem (Character Sheet)

## Aplicativo Web feito para jogadores e mestres, inspirado por "Ordem Paranormal" de Cellbit, e em Call of Cthulhu.

ACDS RPG foi desenvolvido da seguinte forma:
  - Backend: Node.js com banco de dados MySQL.
  - Frontend: HTML, CSS, Javascript, JQuery e Bootstrap.

O sistema usa APIs de terceiros, como a Random.org, responsável por gerar números aleatórios.

As variáveis de ambiente são:
  - PORT: A porta a ser vinculada.
  - DATABASE_URL: A URL do banco de dados MySQL.
  - EXPRESS_SESSION_SECRET: Um hash ou secret para o funcionamento do pacote "xpress-session".
  - RANDOM_ORG_KEY: A chave para uso do Random.org. Caso não exista, o sistema gerará números pseudo-aleatórios.

O SQL para criar o banco de dados está nomeado como "create database.sql", e pode ser tanto executado como importado pra criar o ambiente.

Há uma rota escondida só pra mestres, que é "/register/admin", onde a chave do mestre/adm é "123456", como definida no banco de dados.
