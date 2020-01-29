import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage : string;
  autherized : boolean;

  constructor(public auth : AuthenticateService, public router : Router) { 
      this.errorMessage = "Invalid Credentials!!!";
      this.autherized = true;
  }

  checkLogin(txtLogin : HTMLInputElement, txtPswd : HTMLInputElement){
  
    if(this.auth.authenticate(txtLogin.value, txtPswd.value)){
    
        this.autherized = true;
        this.router.navigate(['/media']);
    }else{
        this.autherized = false;
    }
  }

  ngOnInit() {
  }

}
