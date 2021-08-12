import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      "firstName":new FormControl(null,[Validators.required,pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null),
      "emailId":new FormControl(null),
      "mobileNumber":new FormControl(null)
    });
  }

  submitData()
  {
   console.log(this.loginForm.value);
  }

}
