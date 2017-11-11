import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { SERVICE_TYPES } from "../types";
import { appContainer } from "../inversify.config";

import {ITagService} from "./tag-service";

@injectable()
export class TagController{

    
    private _tagService = appContainer.get<ITagService>(SERVICE_TYPES.TagService);
    private static _tagControllerInstance = new TagController();
   
    constructor(){
        if(TagController._tagControllerInstance){
            throw new Error("The Logger is a singleton class and cannot be created!");
            
        }
        TagController._tagControllerInstance = this;
    }
    
    static getInstance(){
        return TagController._tagControllerInstance;
    }

    findTagByExpression=(req:Request, res:Response)=>{    
        let expression = req.query.expression;
        console.log(expression);
        this._tagService.findTagByExpression(expression).then((results)=>{
            res.send(results);
        })
    }
}


