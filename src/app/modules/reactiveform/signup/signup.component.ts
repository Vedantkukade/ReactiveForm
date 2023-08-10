import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  hide = true;
  signup=new FormGroup({

    "email":new FormControl("",[Validators.required,Validators.email]),
    "password":new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
    "profile":new FormControl("",Validators.required),
    "date":new FormControl("",Validators.required),
    "gender":new FormControl("",Validators.required)
    
  })
}
