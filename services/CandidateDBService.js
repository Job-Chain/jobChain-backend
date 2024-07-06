const { MongoClient } = require("mongodb");
const Config = require("../config/config");
const { connect } = require("../db");

const CandidateDBService = {
  // Create a new Candidate
  async createCandidate(Candidate) {
    const client = new MongoClient(Config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const database = client.db("jobchain");
    const collection = database.collection("candidates");

    try {
      console.log(Candidate);
      const result = await collection.insertOne(Candidate);
      return result;
    } catch (error) {
      console.error("Error creating Candidate:", error);
      throw error;
    } finally {
      await client.close();
    }
  },

  // Get all candidates
  async getcandidates() {
    try {
      const client = await new MongoClient(Config.databaseUrl, {});
      const db = client.db(Config.dbName);
      const collection = db.collection("candidates");
      const candidates = await collection.find().toArray();
      client.close();
      return candidates;
    } catch (error) {
      console.error("Error getting candidates:", error);
      throw error;
    }
  },

  // Get a Candidate by ID
  async getCandidateById(id) {
    try {
      const client = await new MongoClient(Config.databaseUrl, {});
      const db = client.db(Config.dbName);
      const collection = db.collection("candidates");
      const Candidate = await collection.findOne({ _id: id });
      client.close();
      return Candidate;
    } catch (error) {
      console.error("Error getting Candidate by ID:", error);
      throw error;
    }
  },

  // Update a Candidate by ID
  async updateCandidateById(id, updatedCandidate) {
    try {
      const client = await new MongoClient(Config.databaseUrl, {});
      const db = client.db(Config.dbName);
      const collection = db.collection("candidates");
      const result = await collection.updateOne(
        { _id: id },
        { $set: updatedCandidate }
      );
      client.close();
      return result.modifiedCount;
    } catch (error) {
      console.error("Error updating Candidate by ID:", error);
      throw error;
    }
  },

  // Delete a Candidate by ID
  async deleteCandidateById(id) {
    try {
      const client = await new MongoClient(Config.databaseUrl, {});
      const db = client.db(Config.dbName);
      const collection = db.collection("candidates");
      const result = await collection.deleteOne({ _id: id });
      client.close();
      return result.deletedCount;
    } catch (error) {
      console.error("Error deleting Candidate by ID:", error);
      throw error;
    }
  },
};

module.exports = CandidateDBService;
