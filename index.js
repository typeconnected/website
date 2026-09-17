const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello! This is a test project running successfully 🎉',
    timestamp: new Date().toISOString(),
    status: 'ok'
  });
});

// Health check endpoint (useful for Coolify health checks)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
