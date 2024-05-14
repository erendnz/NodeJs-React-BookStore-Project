This project is a simple RESTful API architecture built with Node.js, React, and MSSQL. It consists of a backend API server written in Node.js located in the server directory, a frontend client written in React located in the client directory, and SQL scripts used for database setup located in the database directory.

Installation

To set up the project, follow these steps:

Backend (Server)

Navigate to the server directory in a terminal.

Run npm install to install the required dependencies for the backend.

Create a .env file in the server directory and add the following environment variables with your database connection details:

DB_USER='user'
DB_PASSWORD='password'
DB_SERVER="servername"
DB_NAME='dbname'
DB_PORT='dbportnumber'
SERVER_PORT='serverportnumber'

Frontend (Client)

Navigate to the client directory in a terminal.

Run npm install to install the required dependencies for the frontend.

Database Setup

Create a new MSSQL database instance.

Execute the SQL scripts located in the database directory to set up the necessary tables and data for the project.

Usage

Once the installation and database setup are complete, you can start the backend server and frontend client:

Navigate to the server directory and run noder server.js to start the backend server.

Navigate to the client directory and run npm start to start the frontend client.

Notes

Ensure that the backend server is running with the correct environment variables set in the .env file to establish a connection with the database.
Customize the database connection details in the .env file according to your MSSQL setup.
