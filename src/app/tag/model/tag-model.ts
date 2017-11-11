import { Document, Schema, Model, model} from "mongoose";
import DataAccess from "../../data-access/data-access";

export interface ITag {
    //id:number;
    title:string;
}

export interface ITagModel extends ITag, Document{

}

var tagSchema: Schema = new Schema({
    id:Number,
    title: String,
});
tagSchema.pre("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });

export const TagModel: Model<ITagModel> = DataAccess.mongooseConnection.model<ITagModel>("Tag", tagSchema);