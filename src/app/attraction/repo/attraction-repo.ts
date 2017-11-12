import { AttractionModel , IAttractionModel } from "../model/attraction-model"
import  { IBaseRepo, BaseRepo }  from "../../common/base-repo"

export interface IAttractionRepo extends IBaseRepo<IAttractionModel>{
    getAttractionByTagId(tagArray:Array<number>):Promise<any>;
    getAttractionByExpression(expression:string):Promise<any>;
}

export class AttractionRepo extends BaseRepo<IAttractionModel> implements IAttractionRepo{

    constructor(){
        super(AttractionModel);
    }

    getAttractionByTagId(tagArray:Array<number>){
        return AttractionModel.where("tags").in(tagArray).exec()
    }
    getAttractionByExpression(expression:string){
        return AttractionModel.find({description:new RegExp(expression,'i')}).exec();
    }
} 
