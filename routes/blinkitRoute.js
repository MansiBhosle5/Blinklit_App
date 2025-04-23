const express = require("express");
const CategoryModel = require("../model/categories");
const ItemModel = require("../model/item");
const UserModel = require("../model/user");

const router = express.Router();

// Get all categories
router.get("/category", async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new category
router.post("/category", async (req, res) => {
    try {
        const { title, image } = req.body;

        const newCategory = new CategoryModel({ title, image });
        const savedCategory = await newCategory.save();

        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//ALL Items
router.get("/all-items", async (req, res) => {
    try {
      const items = await ItemModel.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//get items by category id
router.get("/category/item/:id",async(req,res)=>{
    try{
        const items = await ItemModel.find({category : req.params.id});
        res.json(items);      
    } catch(error) {
        res.status(500).json({message:error.message});
    }
})

// create item 
router.post("/category/item", async (req, res) => {
    try {
        const { title, image, category ,  description , quantity , price } = req.body;

        const newItem = new ItemModel({ title, image, category ,  description , quantity , price });
        const savedItem = await newItem.save();

        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//register 

router.post("/register",async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const newUser = new UserModel({ name, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // ✅ Return user info properly
      res.status(200).json({
        message: "Login successful",
        user: {
          name: user.name,
          email: user.email,
          // add more if needed (never send password!)
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  



module.exports = router;
