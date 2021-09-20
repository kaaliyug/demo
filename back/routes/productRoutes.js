


const express= require("express");
const router=express.Router();

const{ getAllProducts, getproductById, getProductById}=require("../controller/productControllers");

//@desc get all products from db
//@route Get /api/products
//@access public
router.get("/",getAllProducts)

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id",getProductById)

module.exports=router;