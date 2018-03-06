import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import{ApiRelation}from '../Services/apiRelation';
import{ApiRelationModel}from '../Models/relationModel';
import{NationalityService}from '../Services/nationalityService';
import{NationalityModel}from '../Models/nationalityModel';
import {PassengerFormValidation}from './validationFile';

@Component({
  selector: 'app-person-to-insure',
  templateUrl: './person-to-insure.component.html',
  styleUrls: ['./person-to-insure.component.css']
})
export class PersonToInsureComponent implements OnInit {
  myFormObject:FormGroup;
  relationArray:ApiRelationModel[];
  nArray:any[];
  passportPattern="^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$";
  constructor(private apirelationService:ApiRelation,private nationalityService:NationalityService) {  
    this.myFormObject=new FormGroup({
      passengerName:new FormControl('',[Validators.required,PassengerFormValidation.noSpace,PassengerFormValidation.noNumber]),
      passengerNameArabic:new FormControl('',Validators.required),
      NationalId:new FormControl('',[Validators.required,Validators.maxLength(18)]),
      passName:new FormControl('',[Validators.required,PassengerFormValidation.passNumber])
  })
}
getRelation():void{
  this.apirelationService.getRelation().subscribe(resultArray=>this.relationArray=resultArray,
  error=>console.log("the Error is::"+error))
 
}

getNationality():void{
  this.nationalityService.getNationality().subscribe(resultArr=>this.nArray=resultArr,
  error=>console.log("the Error is::"+error))

}
ngOnInit():void {
  this.getRelation();
 this.getNationality();
  
}
  get passengerName()
{
  return this.myFormObject.get('passengerName');
}
get passengerNameArabic()
{
  return this.myFormObject.get('passengerNameArabic');
}
get NationalId()
{
  return this.myFormObject.get('NationalId');
}
get passName()
{
  return this.myFormObject.get('passName');
}

}
