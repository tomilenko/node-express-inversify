import { Request, Response } from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { AppService } from '../services';

@controller("/api")
export class HomeController implements interfaces.Controller {

    constructor(@inject("AppService") private _appService: AppService) { }

    @httpGet("/")
    private index(req: Request, res: Response): void {
        res.json({ "controller": "HomeController" });
    }

    @httpGet("/count")
    private count(@queryParam("first") first: number, @queryParam("second") second: number, res: Response): number {
        return this._appService.count(first, second);
    }
}