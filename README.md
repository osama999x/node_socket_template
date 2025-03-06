# Node Socket.io Template
## Express
## Overview

This is a Node.js backend template using Express, Socket.io, and MongoDB. It provides a foundation for building real-time applications with authentication, logging, and API request handling.

## Features

- **Socket.io Integration** for real-time communication
- **Express.js** for routing and API handling
- **MongoDB with Mongoose** for database interactions
- **JWT-based Authentication**
- **API Logging Middleware**
- **CryptoJS & RSA Encryption** for security
- **CORS Support**
- **Nodemon for Development**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/node-socket-template.git
   cd node-socket-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:
   ```env
   PORT=3030
   DATABASE=mongodb://localhost:27017/your-db
   JWTKEY=your-secret-key
   CRYPTKEY=your-crypt-key
   CRYPTIV=your-crypt-iv
   VERSION=v1
   ENV=dev
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
node server.js
```

## Project Structure

```
├── src
│   ├── config
│   │   ├── database.js        # Database connection setup
│   ├── middleware
│   │   ├── apiLogMiddleware.js # API logging middleware
│   ├── resources
│   │   ├── appUser
│   │   │   ├── appUserRouter.js  # Routes for user API
│   ├── utils
│   │   ├── logger.js         # Custom logging utility
│   │   ├── sendResponse.js   # Response handler
│   │   ├── encryption.js     # CryptoJS-based encryption methods
│   ├── socket.js            # Socket.io connection setup
├── app.js                   # Express app setup
├── server.js                # HTTP server with Socket.io
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
```

## API Routes

- **GET `/api/v1/appUser`** - Fetch user data
- **POST `/api/v1/appUser/register`** - Register a new user
- **POST `/api/v1/appUser/login`** - User login

## Socket.io Events

- `connection` - User connects to the server
- `disconnect` - User disconnects
- Additional real-time event handlers can be added as needed.

## Security & Encryption

- **JWT Authentication** is used for secure API access.
- **CryptoJS AES Encryption** is implemented for encrypting sensitive data.
- **RSA Encryption** is used for secure key handling.

## Logging

- Uses a custom logging system with levels: INFO, WARNING, ERROR.
- Logs requests and responses for debugging.

## Contribution

Feel free to fork and contribute to this project by submitting a pull request.

## License

This project is licensed under the ISC License.
