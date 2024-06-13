// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Define a route
// 4. Start the server
const express = require('express');
const app = express();
const PORT = 3000;
const comments = [
  {
    username: "Tam",
    comment: "Hello World!"
  },
  {
    username: "Tim",
    comment: "Hi there!"
  },
  {
    username: "Tom",
    comment: "Howdy!"
  }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});