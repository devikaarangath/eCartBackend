//To define routes for the client request

//import express
const express=require('express');

//import productcontroller
const productcontroller = require('../Controllers/productcontroller')

//import wishlistcontroller
const wishlistController=require('../Controllers/whishlistController')

//import cart controller
const cartController = require('../Controllers/cartController')


//using express create an object for router class inorder to setup path
const router = new express.Router();

//resolve various client request


//api call


//1 get all products
router.get('/products/allproducts',productcontroller.getallproducts)

//2 view particular product details
router.get('/products/viewproduct/:id',productcontroller.viewproduct)
//addtowishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist)
// router.post('/products/addtowishlist',wishlistController.addtowishlist)
//4 get wishlist details
router.get('/products/getwishlist',wishlistController.getwishlist)
//  5 delete wishlist products
router.delete('/products/deletewishlist/:id',wishlistController.deletewishlist)
//add to cart
router.post('/products/addtocart',cartController.addtocart)
//get cart products
router.get('/products/getcart',cartController.getcart)
//delete cart products
router.delete('/products/deletecart/:id',cartController.delete)
//increment cart count
router.get('/products/increment/:id',cartController.incrementCartItems)
//decrement cart count
router.get('/products/decrement/:id',cartController.decrementCartItems)
//export router
module.exports = router