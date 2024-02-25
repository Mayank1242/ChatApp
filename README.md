# React Chat Application with Socket.io  🚀
 
This project is a real-time chat application built using React for the frontend and Node.js with Express and Socket.io for the backend.

## Features

- Real-time messaging: Users can send and receive messages instantly.
- Multiple users: Supports multiple users chatting simultaneously.
- Responsive design: The application is designed to work seamlessly across various devices and screen sizes.

## Folder Structure

- `server`: Contains the backend code implemented in Node.js with Express.
- `chatapp`: Houses the frontend code implemented in React.

## Installation

1. Clone the repository:

```
git clone https://github.com/Mayank1242/ChatApp
```

2. Install dependencies for both the server and chatapp:

```
cd server
npm install

cd ../chatapp
npm install
```

## Usage

1. Start the server:

```
cd server
npm start
```

This will start the backend server on `http://localhost:5000`.

2. Start the React application:

```
cd ../chatapp
npm start
```

This will start the React development server and automatically open the application in your default web browser.

## Configuration

- You can configure the server settings such as port number and other options in the `server/index.js` file.
- For frontend configuration, such as API endpoint, you can modify the `chatapp/src/config.js` file.

## Dependencies

- Node.js
- Express
- Socket.io
- React
- React Router
- Socket.io-client (for frontend)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

