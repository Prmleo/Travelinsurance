import {AbstractControl}from '@angular/forms';

export class FormValidation
{
    static noSpace(control:AbstractControl)
    {
        var textboxName:string=control.value;

        if(textboxName.indexOf(' ')>=0)
        return {noSpace:true};

        return null;
    }
    static noNumber(control:AbstractControl)
    {
        var textboxName:string=control.value;

        for(var i=0;i<textboxName.length;i++)
        {
            if(Number(textboxName[i])<=9)
            return {noNumber:true};
        }
        return null;
    }
    static noMail(control:AbstractControl)
    {
        var textboxName:string=control.value;
       
        for(var i=0;i<textboxName.length;i++)
        {
            if((textboxName[i])=="@")
            return null;
        }
        return {noMail:true};
        
        
    }
    static noMobil(control:AbstractControl)
    {
        var textboxName:string=control.value;
       
        for(var i=0;i<textboxName.length;i++)
        {
            if((Number(textboxName[0])==0)&&(Number(textboxName[1])==5))
            return null;
        }
        return {noMobil:true};
        
    }
    static noMobStr(control:AbstractControl)
    {
        var textboxName:string=control.value;
       
        for(var i=0;i<textboxName.length;i++)
        {
            if((Number(textboxName[i]))<=9)
            return null;
        }
        return {noMobStr:true};
        }
}