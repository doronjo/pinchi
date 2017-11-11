import { NextFunction, Request, Response } from "express";
import { TagRepo, ITagRepo }  from "./repo/tag-repo";
import { injectable, inject } from "inversify";
import { REPO_TYPES } from "../types"





export interface ITagService{
      findTagByExpression(expression:String):Promise<any>;
}

@injectable()
export class TagService implements ITagService{

    private _currentExprssion:string = null;
    
    constructor(
          @inject(REPO_TYPES.TagRepo) private _tagRepo: ITagRepo
    ){

    }

    findTagByExpression(expression:string){
        return this._tagRepo.findTagByExpression(expression);
    }

}