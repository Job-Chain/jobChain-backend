const { MongoClient } = require('mongodb');
const Config = require('../config/config');


const UserDBService = {

    collectionName: 'users',
    databaseUrl: null,

    //create a constructor that takes the configuration object

    // Create a new user
    async createUser(user) {
        try {
            console.log(Config.databaseUrl);

            const client = await new MongoClient(Config.databaseUrl, {})
            const db = client.db(Config.dbName);
            const collection = db.collection("users");
            const result = await collection.insertOne(user);
            return result.insertedId;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        } finally {
            client.close();
        } 
    },

    // Get all users
    async getUsers() {
        try {
            const client = await new MongoClient(Config.databaseUrl, {})
            const db = client.db(Config.dbName);
            const collection = db.collection("users");
            const users = await collection.find().toArray();
            client.close();
            return users;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    },

    // Get a user by ID
    async getUserById(id) {
        try {
            const client = await new MongoClient(Config.databaseUrl, {})
            const db = client.db(Config.dbName);
            const collection = db.collection("users");
            const user = await collection.findOne({ _id: id });
            client.close();
            return user;
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    },

    // Update a user by ID
    async updateUserById(id, updatedUser) {
        try {
            const client = await new MongoClient(Config.databaseUrl, {})
            const db = client.db(Config.dbName);
            const collection = db.collection("users");
            const result = await collection.updateOne({ _id: id }, { $set: updatedUser });
            client.close();
            return result.modifiedCount;
        } catch (error) {
            console.error('Error updating user by ID:', error);
            throw error;
        }
    },

    // Delete a user by ID
    async deleteUserById(id) {
        try {
            const client = await new MongoClient(Config.databaseUrl, {})
            const db = client.db(Config.dbName);
            const collection = db.collection("users");
            const result = await collection.deleteOne({ _id: id });
            client.close();
            return result.deletedCount;
        } catch (error) {
            console.error('Error deleting user by ID:', error);
            throw error;
        }
    },
};

module.exports = UserDBService;