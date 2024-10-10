    import mongoose from "mongoose";

    const bookSchema =new mongoose.Schema(
        {
            title :{
                type : String,
                required : true
            },
            author : {
                type : String,
                required : true
            },
            publishYear : {
                type :Number,
                required : true
            },
            review: {
                type: String, 
                required: false
            },
            rating: {
                type: Number, 
                min: 1,
                max: 5, 
                required: false
            },
            imgUrl : {
                type : String,
                required : false
            }  
        },
        {
            timeStamp : true,
        }
    ); 
    export const Book = mongoose.model('bookts',bookSchema); 

