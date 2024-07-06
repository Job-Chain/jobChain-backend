// db.js
const { MongoClient } = require("mongodb");

// Define the URI for the MongoDB server

const uri =
  "mongodb+srv://jobchain:jobchain@cluster0.kkoexsx.mongodb.net/?appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let isConnected = false;

async function connect() {
  if (!isConnected) {
    await client.connect();
    console.log("Connected successfully to server");
    isConnected = true;
  }
  return client;
}

// Export the connect function
module.exports = { connect };
