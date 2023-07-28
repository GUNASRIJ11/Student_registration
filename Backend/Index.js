const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


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
  
  const query = 'INSERT INTO student (fullName, email, age, gender) VALUES (?, ?, ?, ?)';
  connection.query(
    query,
    [studentData.fullName, studentData.email, studentData.age, studentData.gender],
    (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        res.status(500).json({ message: 'Error inserting data into the database' });
      } else {
        console.log('Data inserted successfully!');
        res.status(200).json({ message: 'Student data received and inserted successfully!' });
      }
    }
  );

});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






module.exports = connection;