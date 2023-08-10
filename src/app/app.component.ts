import { Component } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from './passwordvalidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';
 

  constructor(){}

  

    loginform=new FormGroup({

      "email":new FormControl(null,([Validators.required,Validators.email])),
      "password":new FormControl(null,Validators.compose([Validators.required,Validators.maxLength(32),Validators.minLength(8),PasswordValidator]))

    })

    submit(){
      console.log(this.loginform.value);
      alert("Form is submiited!");
      this.loginform.reset();
    }

    get Email(){
      return this.loginform.get('email');
    }

    get Password(){
      return this.loginform.get('password');
    }

    
  
}
