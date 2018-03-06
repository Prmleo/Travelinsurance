import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {FormValidation}from './validationFile';
@Component({
  selector: 'app-insured-infoemation',
  templateUrl: './insured-infoemation.component.html',
  styleUrls: ['./insured-infoemation.component.css']
})
export class InsuredInfoemationComponent implements OnInit {
  myFormObject:FormGroup;
  constructor() {this.myFormObject=new FormGroup({
    cusNameEnglish:new FormControl('',[Validators.required,FormValidation.noSpace,FormValidation.noNumber]),
    cusNameArabic:new FormControl('',Validators.required),
    NationalId:new FormControl('',[Validators.required,Validators.maxLength(18)]),
    mail:new FormControl('',[Validators.required,FormValidation.noMail]),
    Mobile:new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12),FormValidation.noMobil,FormValidation.noMobStr])
  }) }

  get cusNameEnglish()
{
  return this.myFormObject.get('cusNameEnglish');
}
get cusNameArabic()
{
  return this.myFormObject.get('cusNameArabic');
}
get mail()
{
  return this.myFormObject.get('mail');
}
get NationalId()
{
  return this.myFormObject.get('NationalId');
}
get Mobile()
{
  return this.myFormObject.get('Mobile');
}
  ngOnInit() {
  }
login(event)
{
  console.log(event);
}

}
