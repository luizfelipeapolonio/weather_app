# City Weather App

Aplicação feita em React JS, consumindo a OpenWeather API, que consulta e exibe os dados do clima da cidade desejada, e a Country Flags API para exibir a bandeira do país ao qual a cidade pesquisada pertence. Possui layout responsivo, totalmente adaptado para dispositivos mobile.

<img src="./assets/WeatherAppGIF.gif" alt="Gif demonstração do projeto" />

## 💻 Tecnologias utilizadas
As seguintes ferramentas foram utilizadas na construção do projeto:
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ReactJS](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Create React App](https://github.com/facebook/create-react-app)
- [OpenWeather API](https://openweathermap.org/api)
- [Country Flags API](https://countryflagsapi.com)

## 🛠 Pré-requisitos
* Para começar, você precisa ter uma chave de acesso da [OpenWeather API](https://openweathermap.org/api).
* Ter instalado o [Git](https://git-scm.com/) e o [NodeJs](https://nodejs.org/en/).

## ⚙ Como rodar a aplicação
Com o auxílio de um terminal, precisamos rodar alguns comandos para executar o projeto:
* Primeiro, clone este repositório:
```bash
$ git clone https://github.com/luizfelipeapolonio/weather_app
```
* Acesse a pasta da aplicação:
```bash
$ cd weather_app
```
* Instale as dependências:
```bash
 $ npm install
```
* Agora, com o auxílio de um editor de códigos, criamos um arquivo `.env` na raíz da aplicação:
* Dentro do arquivo `.env`, coloque sua chave de acesso da OpenWeather API, e os endpoints das APIs, seguindo este modelo:
```
REACT_APP_API_KEY=&appid="Sua chave de acesso, sem as aspas"
REACT_APP_API_BASE_URL="URL da API de acordo com o plano escolhido"?q=
REACT_APP_COUNTRY_FLAG=https://countryflagsapi.com/png/
REACT_APP_WEATHER_ICON=http://openweathermap.org/img/wn/
```
* Com o auxílio do terminal novamente, na pasta raíz da aplicação (weather_app), damos o comando para iniciar a aplicação:
```bash
$ npm start
```
* A aplicação irá abrir automaticamente no seu navegador na porta:3000, caso não abra, acesse http://localhost:3000

## Autor
Feito com 💜 por luizfelipeapolonio
