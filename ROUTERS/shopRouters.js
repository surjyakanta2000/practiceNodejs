const express = require('express');
const Shop_Routes = express.Router();
const Shop_Control = require('../CONTROLERS/ShopController');

Shop_Routes.get('/',Shop_Control.productGet);

module.exports = Shop_Routes;