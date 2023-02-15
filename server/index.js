const express = require('express');
const cors = require('cors');
const app = express();
//middleware
app.use(cors());
app.use(express.json());
//dot env vars
require('dotenv').config();
const db_pass = process.env.DB_PASS;
const port = process.env.PORT || 3000;

//sequelize / connect
const { Sequelize } = require('sequelize');

const sequelize  = new Sequelize('my_database_1', 'root', `${db_pass}`, {
    host: 'localhost',
    dialect: 'mysql'
}) 

//defining model of data
const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,

    }
});
//syncing table
sequelize.sync().then(() => {console.log('tables created')}).catch(err => console.log(err));


//enpoints
app.post('/api/user/', (req, res) => {
    const user_data = req.body;
    console.log(user_data, 'data posting to DB...')
    //creating the data object
    User.create(user_data).then(() => {console.log('SUCCESS! data sent over to DB.')}).catch(err => console.log(err));
    
})



app.listen(3008, () => {
    console.log(`server is running on PORT__${port}__`)
})