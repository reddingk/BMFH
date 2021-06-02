'use strict';
require('dotenv').config();

const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var base = {
    saveFormData(type, data, callback) {
        var ret = {"error":null, "results":true};

        try {
            mongoClient.connect(process.env.DatabaseConnectionString, { useUnifiedTopology: true }, function(err, client){
                if(err) {
                    ret.error = err; ret.results = false;
                    client.close();
                    callback(ret);
                }
                else {
                    const db = (type == "connections" ?
                        client.db(process.env.DatabaseName).collection('connections') :
                        client.db(process.env.DatabaseName).collection('ideas')
                    );
                    
                    var tmpData = {
                        name: data.name, contact: data.contact, 
                        interest: data.interest, date: new Date() 
                    }

                    db.insertOne(tmpData,function(insertError,retId){
                        if(insertError){
                            console.log("[Error] Adding Form Data: ", insertError);
                            ret.results = false; ret.error = insertError;
                        }
                        
                        client.close();
                        callback(ret);
                    });                  
                }               
            });
        }
        catch(ex){
            console.log("[Error] Saving Form Data: ", ex);
            ret.results = false; ret.error = ex;
            callback(ret);
        }
        
    }
}

module.exports = base;