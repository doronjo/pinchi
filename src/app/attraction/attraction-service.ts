import { NextFunction, Request, Response } from "express";
import { AttractionRepo, IAttractionRepo }  from "./repo/attraction-repo";
import { IAttractionModel } from "./model/attraction-model" 
import { injectable, inject } from "inversify";
import { REPO_TYPES } from "../types"





export interface IAttractionService{
      getAttractionByTagId(tagArray:Array<number>):Promise<any>;
      getAttractionByExpression(expression: string):Promise<any>;
      getAll():Promise<any>;
}

@injectable()
export class AttractionService implements IAttractionService{

    private _currentExprssion:string = null;
    
    constructor(
          @inject(REPO_TYPES.AttractionRepo) private _attractionRepo: IAttractionRepo 
    ){

    }

    getAttractionByTagId(tagArray:Array<number>){
        return this._attractionRepo.getAttractionByTagId(tagArray)
    }
    getAttractionByExpression(expression: string){
        return this._attractionRepo.getAttractionByExpression(expression)
    }

    getAll(){
        return this._attractionRepo.retrieve()
    }

}