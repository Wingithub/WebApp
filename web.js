const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Demo CI/CD - Phiên bản 5.0</h1>');
});

app.listen(3000, () => console.log('Running on port 3000'));