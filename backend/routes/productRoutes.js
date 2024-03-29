import  express  from "express";
import expressAsyncHandler from "express-async-handler";
const router = express.Router()
import Product from '../Models/productModel.js'

// @desc Fetch specific product
// @route GET /api/products/:id
// @access Public

router.get("/:id", expressAsyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)
  
  if(product){
      res.json(product);
  } else {
    res.status(404)
    throw new Error('Product not Found')
  }
}));

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get("/", expressAsyncHandler( async (req, res) => {
    const product = await Product.find({})
  res.json(product);
}));

export default router