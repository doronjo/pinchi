import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { SERVICE_TYPES } from "../types";
import { appContainer } from "../inversify.config";

import {IAttractionService} from "./attraction-service";

@injectable()
export class AtrractionController{

    
    private _attractionService = appContainer.get<IAttractionService>(SERVICE_TYPES.AttractionService);
    private static _attractionControllerInstance = new AtrractionController();
   
    constructor(){
        if(AtrractionController._attractionControllerInstance){
            throw new Error("The Logger is a singleton class and cannot be created!");
        }
        AtrractionController._attractionControllerInstance = this;
    }
    
    static getInstance(){
        return AtrractionController._attractionControllerInstance;
    }

    getArraction = (req:Request, res:Response)=>{    
        let tagId = parseInt(req.query.tagId);
        if(tagId && typeof(tagId) === "number"){
            this._attractionService.getAttractionByTagId([tagId]).then((results)=>{
                res.send(results);
            })
        }else{
            this._attractionService.getAll().then((results)=>{
                res.send(results);
            })
        }


    }
}
