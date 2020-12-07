const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Test working');
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
