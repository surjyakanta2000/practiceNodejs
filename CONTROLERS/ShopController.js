const Product_Model= require('../MODELS/productModel');

exports.productGet=async(req,res,next)=>{
    const products = await Product_Model.find()
    if(products){
        return res.status(200).json({
            result: products,
            message:"success"
        })
    }
    else{
        return res.status(401).json({
            message:"somthing went wrong"
        })
    }
}