import { TagModel , ITagModel } from "../model/tag-model"
import { IBaseRepo, BaseRepo }  from "../../common/base-repo"
import { injectable, inject } from "inversify";
import Q  from "q"

export interface ITagRepo extends IBaseRepo<ITagModel>{
    findTagByExpression(s:string):Promise<any>        
}

@injectable()
export class TagRepo extends BaseRepo<ITagModel> implements ITagRepo{

    constructor(){
        super(TagModel);
    }

    findTagByExpression(s:string){
       return TagModel.find({title:new RegExp(s,'i')}).exec();
    }
} 
