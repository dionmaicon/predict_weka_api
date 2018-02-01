# predict_weka_api
API NodeJs for improved J48 Classification Tree for the Prediction of Dengue, Chikungunya or Zika.
Back-end de uma aplicação que realiza consultas numa API. <br>
O Front-end foi desenvolvido pelo brother Maikon Melo e pode ser encontrado em:
https://github.com/dionmaicon/predict_weka_front
<p>
Trata-se de uma versão de testes que estavamos implementando a nível de curiosidade. Os dados gerados para o dataset são randomicos e podem ser encontrados nos diretorios da API (files) que contem também uma versão do WEKA.</p> Se quiser continuar esse projeto e precisar de qualquer ajuda, entre em contato: dionmaicon@outlook.com
<br>
Para rodar Back-end API:

<ol>1 - Faça o download https://github.com/dionmaicon/predict_weka_api e descompacte.</ol>
<ol>2 - Depois de descompactar, utilize o npm para baixar as dependencias. (Se não tem o NPM, instale! Pode ser encontrado em: https://docs.npmjs.com/cli/install) depois de instalar vá até a pasta do projeto e digite:</ol>
npm install
<ol>3 - Agora pode rodar o projeto com o comando:</ol>
nodemon server.js
(Para instalar o nodemon digite: npm install -g nodemon)
<br>
Para rodar o projeto Front-end:

<ol>1 - Faça o download do repositorio https://github.com/dionmaicon/predict_weka_front.</ol>
<ol>2 - Dentro da pasta base do projeto digite:</ol>
npm install
<ol>3 - Depois digite: node app.js ou nodemon app.js</ol>
<ol>4 - Se precisar altere o arquivo em app/controllers/consulta.js</ol>
Axios.post('http://localhost:3000/j48', dadosForm) substitua pelo IP que está rodando a API.
<ol>5 - Abra o navegador na URL em que você está rodando o front.</ol>
Ex: http://localhost:5001 (Se desejar alterar mude a porta no arquivo app.js)
<ol>6 - Faça a consulta com o console do navegador aberto para ver se não há problemas de conexão.</ol>
Este projeto não é profissional e fizemos em uma tarde. Então alguns bugs podem ocorrer, mas se precisa achar um meio de integrar Nodejs, Angular4 e WEKA. Este projeto pode guiar você.
