import { AbstractControl,ValidationErrors } from "@angular/forms";

export const PasswordValidator=function(control:AbstractControl): ValidationErrors | null{

let value: string=control.value || '';

if(!value){
    return null;
}

let uppercase=/[A-Z]+/g;
if(uppercase.test(value)===false){
    return { passwordstrength:`Uppercase Required` };
}

let lowercase=/[a-z]+/g;
if(lowercase.test(value)===false){
    return { passwordstrength:`Lowercase Required` };
}

let numbers=/[0-9]+/g;
if(numbers.test(value)===false){
    return { passwordstrength:`Number Required` }
}

let special=/[!@#$%^&*<>?/|\\[\]/+=-_{}';":.,`~]+/;
if(special.test(value)===false){
    return { passwordstrength:`Special Character Required` };
}





return null;

}