# Express Sample App

This is a sample Express.js application demonstrating various features such as middleware logging, serving static files, handling JSON responses, and error handling.

## Features

- Middleware logging
- Serving static files
- Basic "Hello, World!" route
- Dynamic route to greet users by name
- Handling JSON responses via POST
- Error handling

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/express-sample-app.git
   cd express-sample-app
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Routes

- `GET /basic`: Returns "Hello, World!"
- `GET /greet/:name`: Greets the user by name
- `POST /api/users`: Handles JSON data and responds with a message
- `GET /error`: Simulates an error to demonstrate error handling

## License

This project is licensed under the MIT License.
