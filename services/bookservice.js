const { ObjectId } = require("mongodb")
const { db } = require("../connection/connection")

module.exports={
    getAllBooks:async(data)=>{
       let collection=await db.collection("books")
       let result=await collection.find({}).toArray()
       return result
    },
    addBook:async(data)=>{
       let collection=await db.collection("books")
       let result= collection.insertOne(data)
        return result
    },
    updateBook:async(data)=>{
        let collection=await db.collection("books")
        let result= await collection.updateOne({_id: new ObjectId(data._id) },{$set:{name:data.name,author:data.author}})
         return result
     },
     deleteBook:async(data)=>{
        let collection=await db.collection("books")
        let result= await collection.deleteOne({_id: new ObjectId(data._id) },)
         return result
     },
     getBookById:async(id)=>{
        let collection=await db.collection("books")
        let result= await collection.findOne({_id: new ObjectId(id) },)
         return result
     }
}