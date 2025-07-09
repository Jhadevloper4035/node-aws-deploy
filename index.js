const express = require('express');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us Here');
});

app.get('/faq', (req, res) => {
  res.send('faq page  Us Here');
});


module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
