import { Document, Schema, Model, model} from "mongoose";
import DataAccess from "../../data-access/data-access";

export interface IAttraction {
    //id:number;
    title:string;
    description:string;
    media:object;
    tags:Array<number>;
}

export interface IAttractionModel extends IAttraction, Document{

}

var attractionSchema: Schema = new Schema({
    id:Number,
    title: String,
    description:String,
    media: Object,
    tags:Array
});
attractionSchema.pre("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });

export const AttractionModel: Model<IAttractionModel> = DataAccess.mongooseConnection.model<IAttractionModel>("Attraction", attractionSchema);