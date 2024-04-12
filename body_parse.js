const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
