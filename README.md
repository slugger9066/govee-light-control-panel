# Govee Light Control Panel

## Requirements

- Node.js 18 or higher

## Installation

Install dependencies using `npm install`:

```bash
npm install
```

## Configuration

Create a `.env` file inside the `backend` directory and set your Govee API key.
You can start from the provided `.env.example`:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and add your API key:

```
GOVEE_API_KEY=your-key-here
```

## Starting the server

Run the backend server with Node:

```bash
node backend/server.js
```

The server listens on port `3000` and serves the frontend at `http://localhost:3000`.
