const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());





const port = 3008;
const { Sequelize } = require('sequelize');

const sequelize  = new Sequelize('my_datbase_1', 'root', 'Dark50ulz999', {
    host: 'localhost',
    dialect: 'mysql'
}) 


app.post('/api/user/', (arg) => {
    console.log(arg)
})



app.listen(3008, () => {
    console.log(`server is running on PORT__${port}__`)
})