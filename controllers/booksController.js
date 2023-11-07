const { getAllBooks ,addBook, updateBook, deleteBook, getBookById} = require('../services/bookservice');

var express = require('express'),
    bookRouter = express.Router();

    bookRouter.get("/",async(req,res)=>{
       let data=await getAllBooks()
       console.log("data",data);
       return  res.send({success:true,data})
    })
    bookRouter.post("/",async(req,res)=>{
        let data=req.body;
        let result=await addBook(data);
        console.log("result",result)
        if(result.insertedId){
            res.send({success:true,bookId:result.insertedId,message:"Book added successfully"})
        }
        else{
            res.send({success:false,message:"Some error occurred"})
        }

    })
    bookRouter.patch("/",async(req,res)=>{
        let body=req.body;
        let result= await updateBook(body)
        if(result.modifiedCount){
            res.send({success:true,message:"Book updated successfully"})
        }
        else{
            res.send({success:false,message:"Some error occurred"})
        }
    }),
    bookRouter.delete("/",async(req,res)=>{
        let body=req.body;
        let result= await deleteBook(body)
        if(result.deletedCount){
            res.send({success:true,message:"Book delted successfully"})
        }
        else{
            res.send({success:false,message:"Some error occurred"})
        }
    }),
    bookRouter.get("/:id",async(req,res)=>{
        let id=req.params.id;
        console.log("id",id);
        let result= await getBookById(id)
        if(result){
            res.send({success:true,data:result})
        }
        else{
            res.send({success:false,message:"Some error occurred"})
        }
    })


    module.exports=  bookRouter