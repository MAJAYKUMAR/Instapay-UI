import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
        //{path:'',redirectTo:'home',pathMatch:'full'},
       {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
       {path:'Register',component:RegisterComponent},
       {path:'Admin',component:AdminComponent},
      
        {path:'login',component:LoginComponent},
        {path:'logout',component:LogoutComponent ,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
