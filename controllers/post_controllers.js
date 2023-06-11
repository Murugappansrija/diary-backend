import Post from "../models/Post.js";
import mongoose,{mongo} from "mongoose";

export const getallpost  = async(req,res)=>{ 
    try{
        const post = await Post.find({}).sort({
            createdAt: -1
            })
            res.status(200).json(post)
    }catch(err) {
        res.status(200).json({error: err.message})
    }
 
};


export const getpost  = async(req,res)=>{ 
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:'post not exist'})
   try {
    const post = await Post.findById(id)
    if(!post) return res.status(404).json({error:'post not exist'})
     res.status(200).json(post)

   }catch(err){
     res.status(400).json({error :err.message })
   }
};


export const createpost  = async(req,res)=>{ 
    const {date, title, description} = req.body

    try{
         const post = await Post.create({date,title,description})
         res.status(200).json(post)
        
    }catch(err){
        res.status(400).json({error: err.message})

    }
};


export const deletepost  = async(req,res)=>{ 
   const {id} = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: "data not found"})

   try {
    const post = await Post.findById(id)
    if(!post)return res.status(400).json({error: "data not found"})
    const deletaepost = await Post.findOneAndDelete({_id : id})
    res.status(200).json(deletaepost)
   }catch(err){
    res.status(400).json({error: err.message})

}
};


export const updatepost  = async(req,res)=>{ 
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: "data not found"})
 
    try {
     const post = await Post.findById(id)
     if(!post)return res.status(400).json({error: "data not found"})
     const updateaepost = await Post.findOneAndUpdate({_id : id},{...req.body})
     res.status(200).json(updateaepost)
    }catch(err){
     res.status(400).json({error: err.message})
    }
  
};


