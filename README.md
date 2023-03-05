
 
# NFT Market

O NFT Market é um site de comércio de artes digitais em formato de tokens fungíveis, onde os visitantes podem criar uma conta de usuário e comercializar seus NFTs. Este projeto foi desenvolvido utilizando o Sequelize ORM, MySQL e Express.

## Dependências

As dependências necessárias para executar este projeto estão listadas abaixo:

- Node.js
- MySQL
- VS Code (ou outra IDE)
- Pacotes npm: express, express-session, bcrypt, ejs, sequelize e mysql2

## Como inicializar

Siga os passos abaixo para inicializar o projeto:

1. Crie uma base de dados MySQL com o nome "store".
2. No arquivo `db/db.js`, configure o seu usuário e senha do MySQL na constante Sequelize (padrão: root, '').
3. No terminal, selecione o diretório do projeto e execute o comando `npm i` para instalar as dependências do projeto.
4. Em seguida, execute o comando `npm run devStart` para iniciar o servidor.
5. Abra o seu navegador e acesse http://localhost:3000/.

## Rotas

As rotas do projeto estão listadas abaixo:

- http://localhost:3000/ (home)
- http://localhost:3000/login (início de sessão)
- http://localhost:3000/register (registro de usuário)
- http://localhost:3000/create (criação de NFT)
- http://localhost:3000/edit (edição de NFT)
- http://localhost:3000/view (visualização de um único NFT)
- http://localhost:3000/logout (desconectar da sessão)

Para navegar nas rotas "create" e "edit", é necessário estar autenticado com um usuário.

## Relacionamentos

O diagrama de relacionamentos do projeto está ilustrado abaixo:

<img src="https://github.com/Wando2/nft-market/blob/10eeee4d549d169b1f44a15381d665310eb6e1dd/readme/Relacionamentos.png" />

 
 ## Screenshots
 <img src="https://github.com/Wando2/Market-nft/blob/e6f03c8dda8976c0807112de9352ed8921cb06f1/readme/home1.png"/>
 <img src="https://github.com/Wando2/Market-nft/blob/e6f03c8dda8976c0807112de9352ed8921cb06f1/readme/home2.png" />
 <img src="https://github.com/Wando2/Market-nft/blob/597482922e6541fafffc069acadc8c96e64a0f92/readme/dashboard.png" />
 <img src="https://github.com/Wando2/Market-nft/blob/e6f03c8dda8976c0807112de9352ed8921cb06f1/readme/publicar.png" />
 <img src="https://github.com/Wando2/Market-nft/blob/main/readme/Arquitetura.png" />
 
 
 









