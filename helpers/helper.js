
const { MongoClient, ServerApiVersion } = require('mongodb');
const {db} = require('../config.json')
const uri = db.mongoConnectionString;


class MongoConnection {
    constructor() {
      if (!MongoConnection.instance) {
        this.client = null;
        MongoConnection.instance = this;
      }
      return MongoConnection.instance;
    }
    async connect() {
        try {
            this.client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
                });
    
             this.client = await client.connect(); 
             await this.client.db(dbName).command({ ping: 1 });
            }
        catch(err) {console.log(err)}
    }

    getClient() {
        return this.client;
      }

    getCollection() {
        let collection = this.client.db("test").collection("inventory");
        collection.find({}).toArray((error, documents) => {
            if (error) {
              console.error("Error retrieving documents:", error);
            } else {
              console.log("Retrieved documents:", documents);
            }
          });
        return collection
    }
    }



module.exports = {
  MongoConnection : new MongoConnection()
};

