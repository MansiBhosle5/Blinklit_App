const mongoose = require("mongoose");



const CategorySchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required: true

        },
        image:{
            type:String,
            required : true
        }    
    

    }
)

const CategoryModel = mongoose.model("CategoryModel", CategorySchema); // para (modelname,schemaname)
module.exports = CategoryModel; //Export the category model

