//logic to resolve


//import products collection
const products=require('../model/productschema')
//import wishlist collection
const wishlists=require('../model/wishlistSchema')
//get all products
exports.getallproducts = async (req,res)=>{
    //logic
    try{
        //get all products from collection in mongodb
        const allproducts = await products.find()
        res.status(200).json(allproducts)//response
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.viewproduct = async (req, res) => {
    //logic
    //get particular product id
    const id = req.params.id//2

    try {
        //get all products from products collection in mongodb
        const allproducts = await products.findOne({ id })
        if (products) {
            res.status(200).json(allproducts)//response send back to the client
        }
        else {
            res.status(401).json("product not found")//error sending back
        }
    }
    catch (err) {
        res.status(401).json(err)//error sending back to the client
    }
}
    

    
