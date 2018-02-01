# predict_weka_api
A API NODE for improved J48 Classification Tree for the Prediction of Dengue, Chikungunya or Zika.
Back-end de uma aplicação que realiza consultas numa API. <br>
O Front-end foi desenvolvido pelo brother Maikon Melo e pode ser encontrado em:
https://github.com/dionmaicon/predict_weka_front
Trata-se de uma versão de testes que estavamos implementando a nível de curiosidade. Os dados gerados para o dataset são randomicos e podem ser encontrados nos diretorios da API (files) que contem também uma versão do WEKA. Se quiser continuar esse projeto e precisar de qualquer ajuda, entre em contato: dionmaicon@outlook.com

Para rodar Back-end API:
1 - Faça o download https://github.com/dionmaicon/predict_weka_api e descompacte.
2 - Depois de descompactar, utilize o npm para baixar as dependencias. (Se não tem o NPM, instale! Pode ser encontrado em: https://docs.npmjs.com/cli/install) depois de instalar vá até a pasta do projeto e digite:
npm install
3 - Agora pode rodar o projeto com o comando:
nodemon server.js
(Para instalar o nodemon digite: npm install -g nodemon)

Para rodar o projeto Front-end.

1 - Faça o download do repositorio https://github.com/dionmaicon/predict_weka_front.
2 - Dentro da pasta base do projeto digite:
npm install
3 - Depois digite: node app.js ou nodemon app.js
4 - Se precisar altere o arquivo em app/controllers/consulta.js
Axios.post('http://localhost:3000/j48', dadosForm) substitua pelo IP que está rodando a API.
5 - Abra o navegador e no endereço do passo 4 digite a URL.
Ex: http://localhost:3000
6 - Faça a consulta com o console do navegador aberto para ver se não há problemas de conexão.
Este projeto não é profissional e fizemos em uma tarde. Então alguns bugs podem ocorrer, mas se precisa achar um meio de integrar Nodejs, Angular4 e WEKA. Este projeto pode guiar você.
