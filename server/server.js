const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8000; // Change to ENV variable

app.use(bodyParser.json());


app.post('/login', (req, res, next) => {});


app.get('/maintenance', (req, res, next) => {});
app.post('/maintenance', (req, res, next) => {});
app.delete('/maintenance/:id', (req, res, next) => {});


app.get('/shopping', (req, res, next) => {});
app.post('/shopping', (req, res, next) => {});
app.delete('/shopping/:id', (req, res, next) => {});


app.get('/messages', (req, res, next) => {});
app.post('/messages', (req, res, next) => {});
app.delete('/messages/:id', (req, res, next) => {});


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