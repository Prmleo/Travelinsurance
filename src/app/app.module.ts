import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{FormsModule}from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { InsuredInfoemationComponent } from './insured-infoemation/insured-infoemation.component';
import { PersonToInsureComponent } from './person-to-insure/person-to-insure.component';
import { TestComponent } from './test/test.component';
import{ApiRelation}from './Services/apiRelation';
import{NationalityService}from './Services/nationalityService';


@NgModule({
  declarations: [
    AppComponent,
    InsuredInfoemationComponent,
    PersonToInsureComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpModule
  ],
  providers: [ApiRelation,NationalityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
