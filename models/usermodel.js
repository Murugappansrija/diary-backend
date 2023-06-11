import { Schema,model } from "mongoose";

const userschema = new Schema({
    email:{
        type: String,
        required : true,
        unique: true
      
       
    },
     password:{
        type: String,
        require: true
     }
   },
     {
      collection: 'users',
      timestamps: true
      })
      export default model("user", userschema)