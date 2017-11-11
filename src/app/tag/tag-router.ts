import { NextFunction, Request, Response, Router } from "express";
import { TagController }  from "./tag-controller";

export class TagRouter {
   
    router: Router; 
    private _tagController: TagController;

    constructor() {
        this.router = Router();
        this._tagController = TagController.getInstance();
        console.log(JSON.stringify(this._tagController));
        this._init();
    }
 
    private _init(){
        this.router.get('/',this._tagController.findTagByExpression);
    } 
}

const  tagRouter = new TagRouter();
export default tagRouter.router;