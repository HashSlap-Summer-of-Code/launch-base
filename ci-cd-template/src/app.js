const express = require('express');

const app = express();

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
