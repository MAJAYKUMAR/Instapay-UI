import { Component, OnInit } from '@angular/core';
import { balance } from '../service/balance';
import { IpayService } from '../service/ipay.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  
  constructor(private service:IpayService) { }

  ngOnInit(): void {
    
    this.statement();

  }

balanceList:balance[]= [];

  statement(){


          this.service.getBalance().subscribe(balance => this.balanceList = balance);

            console.log(this.balanceList);
  }
}
