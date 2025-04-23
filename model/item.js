const mongoose = require("mongoose");
const CategoryModel = require("./categories");

const ItemSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true

    },
    image:{
        type:String,
        required : true
    } ,

    category:{
        type : mongoose.Schema.Types.ObjectId,
        ref: CategoryModel,
        required : true
    },


    description:{
        type : String,
        required: true

    },  

    quantity:{
        type : String,
        required: true
    },

    price:{
        type : String,
        required: true
    }
     
})


const ItemModel = mongoose.model("ItemModel", ItemSchema); // para (modelname,schemaname)
module.exports = ItemModel; //Export the category model