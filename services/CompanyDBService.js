const { MongoClient } = require("mongodb");
const Config = require("../config/config");
const { connect } = require("../db");

const CompanyDBService = {
  // Create a new Candidate
  async createCompany(Company) {
    const client = new MongoClient(Config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const database = client.db("jobchain");
    const collection = database.collection("company");

    try {
      const result = await collection.insertOne(Company);
      return result;
    } catch (error) {
      console.error("Error creating Company:", error);
      throw error;
    } finally {
      await client.close();
    }
  },
};
module.exports = CompanyDBService;
