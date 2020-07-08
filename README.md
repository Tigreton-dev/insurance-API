# INSURANCE-API

Tools

---

Key tools used in this project are:

- ES6
- NodeJS
- Express
- MongoDB
- Mongoose

# Authentication

---

You need to pass a header "user-name" with the name of one user to authenticated and retrieve data.

# Authorization

---

users with role "user" will be restricted for some routes and users with role "admin" will be allowed to retrieve data for every route.

# API routes

---

It expouse 4 routes:

1: Will obtain the user's data with the id that is passed in the route.

    http://localhost:3000/api/client/id/{"id of the client"}

2: Will obtain the user data corresponding to the name that is passed in the route

    http://localhost:3000/api/client/name/{"name of the client"}

3: will get policies for the username that is passed in the route, allowed for admin role.

    http://localhost:3000/api/policies/user/{"name of the client"}

4: will get the policies with the id that correspond with the id that you passed on the route, allow for admin role.

    http://localhost:3000/api/policies/id/{"id of the policie"}

# Installation

---

First you need to have mongodb installed on your machine.
After create a database.
You have to set enviroment variable "db" with the url of your mongodb data base.
Then you need to import the data from followings urls into your database:

    http://www.mocky.io/v2/5808862710000087232b75ac

    http://www.mocky.io/v2/580891a4100000e8242b75c5

- On the app folder:

Execute the following command on your terminal to install all the needed packages:

    npm install

To start the app:

    npm run start

The API will run on port 3000

Copyright and license

---

The MIT License (MIT). Please see License File for more information.
