import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { UtlitybillsComponent } from './utlitybills/utlitybills.component';
import { DthbillComponent } from './dthpayment/dthpayment.component';
import { FixeddepositComponent } from './fixeddeposit/fixeddeposit.component';
import { RecurringdepositComponent } from './recurringdeposit/recurringdeposit.component';
import { RemittanceComponent } from './remittance/remittance.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { WifibillComponent } from './wifibill/wifibill.component';
import { FundsdepositComponent } from './fundsdeposit/fundsdeposit.component';
import { PeriodicstatementComponent } from './periodicstatement/periodicstatement.component';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { BalanceComponent } from './balance/balance.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ProductComponent,
    RegisterComponent,
    AdminComponent,
    SavingsaccountComponent,
    WithdrawComponent,
    TransferComponent,
    UtlitybillsComponent,
    DthbillComponent,
    FixeddepositComponent,
    RecurringdepositComponent,
    RemittanceComponent,
    AccountdetailsComponent,
    CarddetailsComponent,
    MinistatementComponent,
    WifibillComponent,
    FundsdepositComponent,
    PeriodicstatementComponent,
    AddserviceproviderComponent,
    BalanceComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [ProductComponent]
})
export class AppModule { }
