    import  * as mongoose from "mongoose";
    //import Constants = require("./../../config/constants/Constants");
    
    class DataAccess {
        static mongooseInstance: any;
        static mongooseConnection: mongoose.Connection;

        constructor () {
            DataAccess.connect();
        }
        
        static connect (): mongoose.Connection {
            if(this.mongooseInstance) return this.mongooseInstance;
            
            this.mongooseConnection  = mongoose.connection;
            this.mongooseConnection.once("open", () => {
                console.log("Conectado ao mongodb.");
            });
            let MONGODB_CONNECTION: string = "mongodb://admin:admin@bambook-shard-00-00-p73kk.mongodb.net:27017,bambook-shard-00-01-p73kk.mongodb.net:27017,bambook-shard-00-02-p73kk.mongodb.net:27017/Pinchi?ssl=true&replicaSet=bambook-shard-0&authSource=admin";
           this.mongooseInstance = mongoose.connect(MONGODB_CONNECTION);
           return this.mongooseInstance;
        }
        
    }
    
    DataAccess.connect();
    export default DataAccess;
     