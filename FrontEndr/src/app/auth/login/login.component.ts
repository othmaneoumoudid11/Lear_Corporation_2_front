import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm:any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId":new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    });
  }

  submitData()
  {
   console.log(this.loginForm.value);
  }

  get firstname() { return this.loginForm.get('firstName'); }

  get lastname() { return this.loginForm.get('lastName'); }

  get emailid() { return this.loginForm.get('emailId'); }

  get mobilenumber() { return this.loginForm.get('mobileNumber'); }




}
