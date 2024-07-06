const { MongoClient } = require("mongodb");
const Config = require("../config/config");
const { connect } = require("../db");

const InstituteDBService = {
  // Create a new Candidate
  async createInstitute(Institute) {
    const client = new MongoClient(Config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const database = client.db("jobchain");
    const collection = database.collection("institute");

    try {
      const result = await collection.insertOne(Institute);
      return result;
    } catch (error) {
      console.error("Error creating Institute:", error);
      throw error;
    } finally {
      await client.close();
    }
  },
};
module.exports = InstituteDBService;
