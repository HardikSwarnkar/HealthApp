const bodyParser = require('body-parser');
const express = require('express');
const mySql = require('mysql2');
const port = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

const db = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
}
console.log("Connected to the database");
})

app.get('/items/{name}', (req, res) => {
    const name = req.query.name;
    const query = name ? 'SELECT * FROM items WHERE name = ?' : 'SELECT * FROM items';
    name = name ? [name] : [];
    db.query(query, name, (err,result) =>{
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(result)
    });
  });
  
app.post('/items/addItem', (req,res) => {
    const userInfo = req.body;
    const query = 'INSERT INTO UserInfo (name,age,gender,height,weight,addInfo) VALUES (?,?,?,?,?,?)';
    db.query(query,[userInfo.name,userInfo.age,userInfo.gender,userInfo.height,userInfo.weight,userInfo.addInfo], ( err, result ) =>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send("data added succesfully");
    })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});