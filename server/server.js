const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize')

const PORT = process.env.PORT || 8000; // Change to ENV variable

// TODO: Change password and extract into env variable
const sequelize = new Sequelize('cabin_db', 'cabin_db_user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// TODO: implement basic http auth
// app.post('/login', (req, res, next) => {});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Access-Token, X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

let db = {
  maintenance: [],
  activities: [],
  shopping: []
};

app.get('/activities', (req, res, next) => {
  let activityList = db.activities;
  res.status(200).json(activityList).end();
});
app.post('/activities', (req, res, next) => {
  let value = req.body.activity;
  db.activities.push(value);
  res.status(201).json({message: "/activities received a POST", activity: value}).end();
});
// app.delete('/activities/:id', (req, res, next) => {});


app.get('/maintenance', (req, res, next) => {
  let maintenanceList = db.maintenance;
  res.status(200).json(maintenanceList).end();
});
app.post('/maintenance', (req, res, next) => {
  let value = req.body.task;
  maintenance.push(value);
  res.status(201).json({message: "/maintenance received a POST", task: value}).end();
});
// app.delete('/maintenance/:id', (req, res, next) => {});


app.get('/shopping', (req, res, next) => {
  let shoppingList = db.shopping;
  res.status(200).json(shoppingList).end();
});
app.post('/shopping', (req, res, next) => {
  let value = req.body.item;
  shopping.push(value);
  res.status(201).json({message: "/shopping received a POST", item: value}).end();
});
// app.delete('/shopping/:id', (req, res, next) => {});

// app.get('/notes', (req, res, next) => {});
// app.post('/notes', (req, res, next) => {});
// app.delete('/notes/:id', (req, res, next) => {});



app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});



/*
app.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let value = req.body.value;
  db.get(id)
    .then((data)=>{
      if (data === undefined) {
        return Promise.reject("Can't update record; ID not found");
      }
      return db.put(id.toString(), value)
                .then((data)=>{
                  res.status(200).json({message: `Updated record at ID: ${id}.`});
                });
      })
    .catch(next);
});
*/