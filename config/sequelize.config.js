const Sequelize = require('sequelize');

const mode =  'development';
const dialect = 'mysql';
const database = 'node_api_ecom_sequelize';
const username ='root';
const password = '0000';

const connectionObject = {
    host: 'localhost',
    dialect, 
    pool: {
        max: 5,
        min:  1,
        acquire: 30000,
        idle: 10000
    },
    operatorsaliases:false,
};

const sequelize = new Sequelize(database, username, password, connectionObject);


module.exports=sequelize;

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
