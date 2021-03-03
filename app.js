require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const PORT = 3000;

// Paths
//const usersRouter = require('./routes/users.routes');
const product = require('./routes/product');

// const models = require("./models");


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// Routes
/* app.use('/api/users', usersRouter); */
app.post('/app/product', product.create);



const router = express.Router();
app.use(router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var errorResponse = {};
    errorResponse.status = err.status;
    errorResponse.message = err.message;
    res.json(errorResponse);
  });

// DB connection
require("./config/sequelize.config");

router.use((err,req,res,next)=>{
    if(err){
        return res.send(err.message);
    }
});

app.listen(PORT,err=>{
    if(err) return console.log(`Cannot Listen on PORT:${PORT}`);
    console.log(`Server is Listining on: http://localhost:${PORT}`);
});

module.exports = app;