# Task Management Application

This is a basic task management application. 
## Built With

**Dependencies**
[axios](https://github.com/axios/axios), [cors](https://github.com/expressjs/cors), [dotenv](https://github.com/motdotla/dotenv), [express](https://github.com/expressjs/express), [mongodb](https://github.com/mongodb/mongo), [mongoose](https://github.com/Automattic/mongoose), [node](https://github.com/nodejs/node), [react](https://github.com/facebook/react)

**Dev Dependencies**
[nodemon](https://github.com/remy/nodemon), [vite](https://github.com/vitejs/vite)

## Getting Started

### Prerequisites

This repository requires the use of [`npm`](https://github.com/npm/cli). You can find installation instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Things to know

* The to prevent accidentally sharing credentials, `dotenv` is being used. The `.env` file can be found here: `./server/src/config/.env`

* The server datebase configuration can be found in `./server/src/config/db.js`

* All directories and filenames are named semantically, giving a logic to components, controllers, hooks, models, and routers.

* Comments have been left to explain the purpose of important files, and where appropriate, to explain why something exists.

* Classes, functions, modules, objects, and variables have been named semantically so that the code is easier to understand and more modular.

### Installation

1. Clone the repository

`git clone https://github.com/GarlandKey/tma.git`

2. Go to server directory

`cd server`

> ***Note:*** All directory paths listed assume that you are in the root directory, `tma`, and will be indicated as `./`

3. Install server packages
`npm i`

4. Go to client directory

`cd ./client`

5. Install client packages

`npm i`

### Running the server

1. Go to src directory

`cd ./server/src`

2. Start the server

Runs the server in development mode. [http://localhost:2121](http://localhost:2121). The developer build runs with `nodemon` so it will automatically restart when you make changes.

`npm start server`

### Running the client

1. Go to client directory

`./client`

2. Start the client

`npm run dev`

## License

This project is licensed under the **GNU General Public License v3**.
See [LICENSE](LICENSE) for more information.

## Roadmap

The MVP is not complete. The following need to be done to.

1. The `AddTask.jsx` component needs to redirect back to `/` when the `POST` request is successful and provide an error message to the user when something goes wrong.

2. The `EditTask.jsx` component needs tweaking so that the data that is being `PUT` meets the server schema and therefore stops returning a server error.

3. There needs to be a new `DeleteTask.jsx` button component that can be used within the following components: `TaskList.jsx`, `EditTask.jsx`.
