import { Schema,model } from "mongoose";

const postschema = new Schema({
    date:{
        type:Date,
        required: true,
        default : Date.now
    },
     title:{
        type: String,
        required: true
     },
     description :{
        type : String,
        required: true
     }
   },
     {
      collection: 'posts',
      timestamps: true
      })
      export default model("Post", postschema)