const { MongoClient, ServerApiVersion } = require('mongodb');
const url = `mongodb+srv://yogeshkhandgaure610:Home19011984@cluster0.vrjdjsm.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// Create a new MongoClient
 const client = new MongoClient(url, );

const db = client.db('bookmanagement');
module.exports={client,db}