const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'project',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.post('/api/students', (req, res) => {
  const studentData = req.body;
  console.log('Received data:', studentData);
  
  

});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






module.exports = connection;