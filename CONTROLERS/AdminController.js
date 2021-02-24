const Product_Model= require('../MODELS/productModel');

exports.formDataPost=async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    if(!title){
        return res.status(401).json({
            success:false,
            message:"title required"
        })
    }
    else if(!description){
        return res.status(401).json({
            success:false,
            message:"description required"
        })
    }
    else if(!price){
        return res.status(401).json({
            success:false,
            message:"price required"
        })
    }
    else if(!image){
        return res.status(401).json({
            success:false,
            message:"image required"
        })
    }
    else{
    const Product =new Product_Model({
        _title:title,
        _description:description,
        _price:price,
        _image:image,
    })
    const saveProduct= await Product.save()
    if(saveProduct){
        console.log(saveProduct);
        return res.status(200).json({
            success:true,
            message:"product created",
            result:saveProduct
        })
    }
    else 
    {
        return res.status(401).json({
            success:false,
            message:"product not add!"
        })
    }
}
}
exports.productDetailsGet=async(req,res,next)=>{
        const product_id = req.params.product_id;
        const find_product =await Product_Model.findById({_id:product_id})
        if(find_product){
            return res.status(200).json({
                message:"Product find",
                product:find_product,
                success:true
            })
        }
        else {
            return res.status(401).json({
                success:false,
                message:"Product not found"
            })
        }
}
exports.productDetailsDelete=async(req,res,next)=>{
    const product_id = req.params.product_id;
    const find_product = await Product_Model.deleteOne({_id:product_id})
    if(find_product){
        console.log("Product Deleted:",product_id)
        return res.status(200).json({
            message:"Product deleted",
            product:find_product,
            success:true
        })
    }
    else {
        return res.status(401).json({
            success:false,
            message:"Product not delete"
        })
    }

}
