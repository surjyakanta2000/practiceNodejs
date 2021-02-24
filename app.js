require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const dotenv =  require('dotenv');
const body_perser = require('body-parser');
const mongoose = require('mongoose');
app.use(body_perser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/PUBLIC')));
const port = process.env.PORT || 3000;
const Admin_Routes = require('./ROUTERS/adminRouters');
const Shop_Routes = require('./ROUTERS/shopRouters');
// const Admin_Product = require('./MODELS/productModel');

app.set('view engine', 'ejs');

app.use(body_perser.json());
app.use(Admin_Routes);
app.use(Shop_Routes);

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true})
.then(srvr=>{
    app.listen(port,()=>{
        console.log(`listing on port ${port}`);
    });
}).catch(err=>{
    console.log(err);
})
