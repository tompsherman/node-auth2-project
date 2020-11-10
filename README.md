# Authentication using JSON Web Tokens (JWTs) Module Project

## Introduction

In this project we'll implement a full authentication workflow (register/login/logout/restrict endpoint) using `Node.js`, `Express`, `SQLite` and `JSON Web Tokens` on the server.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [x ] Create a forked copy of this project.
- [x ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x ] Push commits: git push -u origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

Use Node.js, Express and Knex to build an API that provides _Authentication_ functionality using SQLite to store _User_ information.

The user schema should include: `username`, `password` and `department`. The `department` should be a string used to group the users. No need for a `departments` table or setting up relationships.

Use **JSON Web Tokens** to keep users authenticated across requests.

### Design and build the following endpoints.

| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                            |
| POST   | /api/login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!' |
| GET    | /api/users    | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.                                                                  |

### Task 3: Stretch Goals

- add the code necessary so that when a client makes a `GET` request to `/api/users` the server only returns documents with the `same department` as the logged in user. For example if the logged in user belongs to the finance department, then only users with the _finance_ department should be returned; if the logged in user is in _sales_ only users on the sales department should be returned.
- implement a React client:
  - use `create-react-app` to generate a application to server as the client for the Web API.
  - inside the React application add **client-side routes** and components for `signup`, `signin` and showing the `list of users` stored in the database.
  - the `/signup` route should provide a form to gather `username`, `password` and `department` for the user and make a `POST` request to the `/api/register` route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the `/users` route, where they should see the list of users.
  - the `/signin` route should provide a form to gather `username` and `password` for the user and make a `POST` request to the `/api/login` route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the `/users` route.
  - the `/users` route should read the token from local storage and make a `GET` request to the `/api/users` route on the API attaching the token as the value of the `Authorization` header.
  - provide a button to `sign out` that will remove the token from local storage.
- add any extra functionality to make the application more user friendly like showing a message and redirecting to `/signin` if an unauthenticated user tries to access the list of users in the `/users` route.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**

---

---

---

# In Terminal:

1. npx gitignore node
2. touch index.js
3. npm init -y
4. touch server.js
5. npm i -D nodemon
6. npm i express dotenv helmet morgans cors knex knex-cleaner sqlite3 colors
   (if auth/entication|orization needed:)
   bcryptjs express-session connect-session-knex
7. touch .env
8. npx knex init
9. mkdir data => cd
10. touch db-config.js => cd ..
11. mkdir models => cd
    11.1 touch models.js && router.js
12. mkdir auth => cd
    12.1 touch authRouter.js
13. code .

## In the Code:

14. package.json => line 6 ''scripts'' :
    ''server'': ''nodemon index.js'',
    ''start'': ''node index.js''

15. index.js _ STATIC _ :
    dotenv.config ; server require ; PORT ; server.listen

16. .env :
    PORT = 8888

17. server.js _ mostly static _ :
    require dependencies ; //require router// ; define server ; use server ; //use router// ; export server

18. knexfile,js _STATIC_ :
    zac rec dev sets

19. data => config.js _STATIC_ :
    knex config.dev

20. models => models.js -dynamic-:
    require config ; module.exports with function names for endpoitns ; functions for endpoitns

21. models => router.js - dynamic-:
    express.Router ; pull in model ; //a ; export

22. test on postman

23. npx knex migrate:make create\*ducks_table

24. data => migrations => 2020...\_dynamic\*:

25. npx knex migrate:latest

26. npx knex seed:make 01-cleanup

27. npx knex seed:make 02-ducks

28. data => seed => 01.js :
    add in cleanup code

29. 02.js :
    add in seed data

30. npx knex seed:run

31. create endpoints in router

32. create functions in model
