const express = require('express');
const Admin_Routes = express.Router();
const Admin_Control = require('../CONTROLERS/AdminController');

Admin_Routes.post('/product_add', Admin_Control.formDataPost);
Admin_Routes.get('/product_details/:product_id',Admin_Control.productDetailsGet);
Admin_Routes.delete('/product_delete/:product_id',Admin_Control.productDetailsDelete); 

module.exports = Admin_Routes;