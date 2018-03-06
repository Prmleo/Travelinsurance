import{Injectable}from '@angular/core';
import{Http,Response}from '@angular/http';
import{Observable}from "rxjs/Observable";
import "rxjs/Rx";
import {NationalityModel}from '../Models/nationalityModel';
@Injectable()
export class NationalityService
{
    private myURL="http://192.168.1.33:8080/GGMarineV1/rest/AJService/nationalityList";
    constructor(private http:Http)
    {

    }
    getNationality():Observable<NationalityService[]>
    {
        return this.http.get(this.myURL).map((response:Response)=>
    {
        return <NationalityService[]>response.json();
    })
    .catch(this.handleError);
    }
    private handleError(error:Response)
    {
        return Observable.throw(error.statusText);
    }

    
}