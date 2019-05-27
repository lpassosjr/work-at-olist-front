![Logo of Olist project](/src/prod/image/olist-logo.svg)

# Work at Olist front &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
> This repo is a test to Olist

This Application is a simple page to send a form with a strength verification password. 

## Installing / Getting started

You will need to install `Nodejs` and `npm` to run this application .

```shell
git clone https://github.com/lpassosjr/work-at-olist-front.git
cd work-at-olist-front
npm start
```

After download the repo, you must follow the steps to run serve.

You should have a return like:

```shell
Starting up serve, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.15.60:8080
Hit CTRL-C to stop the server
```

Your browser must open the application in a new tab. If your browser don't open you can acess with URL [http://127.0.0.1:8080](http://127.0.0.1:8080)

## Developing

### Built With

This application was written with HTML5, Javascript(ES5), CSS(SASS) and Python(Flask). 

### Prerequisites

You will need to install globally: 
- [node.js](https://nodejs.org/en/)

Follow the instructions on their website


### Setting up Dev

To initialize the project you will need to follow the steps written bellow.

```shell
git clone https://github.com/lpassosjr/work-at-olist-front.git
cd work-at-olist-front
npm install
gulp
```

The repo will be cloned and your dependencies installed.

## Tests

To execute the tests you must run

```shell
npm test
```

> After the test ended you can watch the test video in  `./cypress/videos/functions.spec.js`

## Api Reference

To serve this application it was created an API in Python with Flask library. This API is instantiated in Heroku and can be accessed through the URL [https://python-olist-api.herokuapp.com/signup](https://python-olist-api.herokuapp.com/signup).
> Note: Because it is a simple API to send data, only the method `POST` its enable;  

## Licensing

Copyright (c) 2019 Luiz Roberto Gonçalves dos Passos Junior

All licenses in this repository are copyrighted by their respective authors.