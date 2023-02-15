const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
//dot env vars
require('dotenv').config();
const db_pass = process.env.DB_PASS;
const port = process.env.PORT || 3000;








const { Sequelize } = require('sequelize');

const sequelize  = new Sequelize('my_datbase_1', 'root', `${db_pass}`, {
    host: 'localhost',
    dialect: 'mysql'
}) 


app.post('/api/user/', (req, res) => {
    console.log(req.body)
})



app.listen(3008, () => {
    console.log(`server is running on PORT__${port}__`)
})