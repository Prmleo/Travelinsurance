import {AbstractControl}from '@angular/forms';

export class PassengerFormValidation
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
    static passNumber(control:AbstractControl)
    {
        var textboxName:string=control.value;

        if (control.value.match(/[a-zA-Z]{1}[0-9]{7}/)) {            
            return null;
        }
        else {            
            return { passNumber: true };
        }
    }
}