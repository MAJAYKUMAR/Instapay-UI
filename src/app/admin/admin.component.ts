import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  invalidLogin = false;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }


  checkLogin(data){

      if(this.authService.authenticateadmin(data.adminId,data.password)){

          this.router.navigate(['']);
          this.invalidLogin = false;

      }

      else
        this.invalidLogin = true;



  }

}
