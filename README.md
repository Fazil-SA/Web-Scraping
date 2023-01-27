# Web Word Count & Media Scrapping

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)


## Introduction

FrontEnd - React
BackEnd - NodeJs & Express
Database - MongoDb


## Demo

The web app consists of two tiers
 - Web Url Search Page
 - Search History

![This is an image](/home.JPG)
![This is an image](/searchcount.JPG)
![This is an image](/history.JPG)
## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- PORT: Specify the port Number

- MONGO_ATLAS_URI: Specify the MongoDB URI to connect to the database

After you've set these environmental variables in the .env file at the server folder of the project, and intsall node modules using  `npm install` in both server and client folder

Now you can run `npm start` in the client folder and `nodemon` in server folder and the application should work.

## Technology

The application is built with:

- Node.js 
- MongoDB
- Express 
- React.js
- Material UI
- Cheerio
- Toastify


 Copyright 2022 © [FazilSA](https://github.com/Fazil-SA)
