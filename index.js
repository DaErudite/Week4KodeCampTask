require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const productRoutes=require('./src/api/routes/product.js')

const morgan=require('morgan')


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(morgan('dev'));



const Private_Key=process.env.dbURI
mongoose.connect(Private_Key,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then((result)=> app.listen(3000))
.catch((error)=> console.log('mongoose error occurred'));



app.get('/',(req,res)=>{
    res.redirect('/products');
})

app.use('/' , productRoutes)


