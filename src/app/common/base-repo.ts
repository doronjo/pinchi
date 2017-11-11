   
   import * as mongoose from "mongoose";
   import { injectable, unmanaged } from "inversify";

   export interface IBaseRepo<T>{
    create (item: T):Promise<any>;
    retrieve ():Promise<any>;
    update (_id: mongoose.Types.ObjectId, item: T):Promise<any>;
    delete (_id: string):Promise<any>;
    findById (_id: string):Promise<any>;
   }

   @injectable()
   export  class BaseRepo<T extends mongoose.Document>  {
       
       private _model: mongoose.Model<mongoose.Document>;
       
       constructor (@unmanaged() schemaModel: mongoose.Model<mongoose.Document>) {
           this._model = schemaModel;
       }
       
       create (item: T) {
           return this._model.create(item);
           
       }
       
       retrieve () {
          return this._model.find({}).exec()
       }
       
       update (_id: mongoose.Types.ObjectId, item: T) {
           return  this._model.update({_id: _id}, item).exec();
               
       }
           
       delete (_id: string) {
           return this._model.remove({_id: this.toObjectId(_id)}).exec();
          
       } 
       
       findById (_id: string) {
           return this._model.findById( _id).exec();
       }
        
       private toObjectId (_id: string) : mongoose.Types.ObjectId {
           return mongoose.Types.ObjectId.createFromHexString(_id)
       }
       
   }
   
