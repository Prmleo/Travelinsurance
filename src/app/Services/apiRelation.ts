import{Injectable}from '@angular/core';
import{Http,Response}from '@angular/http';
import{Observable}from "rxjs/Observable";
import "rxjs/Rx";
import {ApiRelationModel}from '../Models/relationModel';
@Injectable()
export class ApiRelation
{
    private myURL="http://192.168.1.33:8080/GGMarineV1/rest/AJService/relationList";
    constructor(private http:Http)
    {

    }
    getRelation():Observable<ApiRelationModel[]>
    {
        return this.http.get(this.myURL).map((response:Response)=>
    {
        return <ApiRelationModel[]>response.json();
    })
    .catch(this.handleError);
    }
    private handleError(error:Response)
    {
        return Observable.throw(error.statusText);
    }
}