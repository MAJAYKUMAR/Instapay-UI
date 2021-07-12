import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AdminComponent } from './admin/admin.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { DthbillComponent } from './dthpayment/dthpayment.component';
import { FixeddepositComponent } from './fixeddeposit/fixeddeposit.component';


import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { RecurringdepositComponent } from './recurringdeposit/recurringdeposit.component';
import { RegisterComponent } from './register/register.component';
import { RemittanceComponent } from './remittance/remittance.component';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';

import { AuthGuardService } from './service/auth-guard.service';
import { TransferComponent } from './transfer/transfer.component';
import { UtlitybillsComponent } from './utlitybills/utlitybills.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PeriodicstatementComponent } from './periodicstatement/periodicstatement.component';
import { WifibillComponent } from './wifibill/wifibill.component';
import { FundsdepositComponent } from './fundsdeposit/fundsdeposit.component';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { BalanceComponent } from './balance/balance.component';
const routes: Routes = [
        //{path:'',redirectTo:'home',pathMatch:'full'},
       {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
       {path:'Register',component:RegisterComponent},
       {path:'Admin',component:AdminComponent},
       {path:'savingsaccount',component:SavingsaccountComponent},
       {path:'MiniStatement',component:MinistatementComponent},
       {path:'Utlitybills',component:UtlitybillsComponent},
       {path:'Transfer',component:TransferComponent},
       {path:'Withdraw',component:WithdrawComponent},
       {path:'DTHBill',component:DthbillComponent},
        {path:'FixedDeposit',component:FixeddepositComponent},
        {path:'RecurringDeposit',component:RecurringdepositComponent},
        {path:'login',component:LoginComponent},
        {path:'Remittance',component:RemittanceComponent},
        {path:'AccountDetails',component:AccountdetailsComponent},
        {path:'CardDetails',component:CarddetailsComponent},
        {path:'logout',component:LogoutComponent ,canActivate:[AuthGuardService]},
        {path:'WifiBill',component:WifibillComponent},
        {path:'balance',component:BalanceComponent},
        {path:'FundsDeposit',component:FundsdepositComponent},
        {path:'PeriodicStatement',component:PeriodicstatementComponent},
        {path:'AddServiceProvider',component:AddserviceproviderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
