import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }


  checkLogin(data){

      if(this.authService.authenticate(data.username,data.password)){

          this.router.navigate(['']);
          this.invalidLogin = false;

      }

      else
        this.invalidLogin = true;



  }

}
