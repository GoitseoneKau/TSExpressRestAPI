<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">



<!-- ![Login Screen](/src/assets/images/logo.PNG) -->

<h1 align="center" style="font-family:Poppins;font-size:4em">TS<span style="color:green">Express</span>RestAPI</span> 
</h1>
<h4 align="center" style="font-family:Poppins;font-size:1.2em;margin-top:20px">Simple Express Server Written In TypeScript.</h4>
<p align="center">A simple project highlighting my TypeScript skills and Understanding of RESTful API.</p>


## Table of Contents

* [Introduction](#introduction)

* [Cloning the app](#cloning-and-running-the-app)
  * [CMD line](#cmd-line)
  * [API](#api)

* [Features](#features)

* [Preview](#preview)





## Introduction
This is a user and todos simple api. WIth basic _POST_, _DELETE_, _PUT_, _GET_ methods.






## Cloning and running the app
This is after you download and extract zip file in your desired folder or cloned this project via github

### CMD line
```
//cloning
git clonehttps://github.com/GoitseoneKau/TSExpressRestAPI.git //the repository

//This will install dependencies//
npm install 

//To start the app run these commands//

npm run start

> TSExpressRestAPI@1.0.0 start
> tsx --env-file=.env index.ts

Server running at http://localhost:8000

OR

npm run build

//after it finishes building
npm run serve 



> TSExpressRestAPI@1.0.0 serve
> tsx dist/index.js

Server running at http://localhost:8000


```


###  API

On the browser set address 
to localhost:8000/api/users or localhost:8000/api/todos



#### localhost:8000/api/users
```
[
  {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "065-431-3024",
    "password": "emilySpass96*",
    "userId": 14001
  },
  {
    "id": 2,
    "firstName": "Michael",
    "lastName": "Williams",
    "email": "michael.williams@x.dummyjson.com",
    "phone": "058-627-6644",
    "password": "Michael.wpass8",
    "userId": "14002"
  },
  {
    "id": 3,
    "firstName": "Sophia",
    "lastName": "Brown",
    "email": "sophia.brown@x.dummyjson.com",
    "phone": "010-652-2785",
    "password": "Sophiabpass5$",
    "userId": 14003
  },
  ..........
 ]
 ```
 
 #### localhost:8000/api/users/1
 ```
 {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "065-431-3024",
    "password": "emilySpass96*",
    "userId": 14001
  }
  ```
 
#### localhost:8000/api/todos
 ```
 [
  {
    "id": 1,
    "todo": "Memorize a poem",
    "priority": "Medium",
    "priorityColor": "Orange",
    "dueDate": "2024-10-01T14:00+01:00",
    "completed": false,
    "userId": 14002
  },
  {
    "id": 2,
    "todo": "Memorize a poem",
    "priority": "Medium",
    "priorityColor": "Orange",
    "dueDate": "2024-10-01T14:00+01:00",
    "completed": false,
    "userId": 14006
  },
  {
    "id": 3,
    "todo": "Watch a classic movie",
    "priority": "Low",
    "priorityColor": "#eded15",
    "dueDate": "2024-10-05T14:00+01:00",
    "completed": false,
    "userId": 14006
  },
  ......
 ]
 ```
 

#### localhost:8000/api/todos/1
  ```
  {
    "id": 1,
    "todo": "Memorize a poem",
    "priority": "Medium",
    "priorityColor": "Orange",
    "dueDate": "2024-10-01T14:00+01:00",
    "completed": false,
    "userId": 14002
  }
 ```
## Features

* API functionality 
* GET Method
* PUT Method
* POST Method
* DELETE Method



## Preview


Check out my deployed API simple RESTful server on Render 

[TSExpressAPI for users](https://tsexpressrestapi.onrender.com/api/users) API end point for Users

[TSExpressAPI for todos](https://tsexpressrestapi.onrender.com/api/todos) API end point for Todos
