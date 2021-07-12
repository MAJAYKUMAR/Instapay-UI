import { Component, OnInit } from '@angular/core';
import { IpayService } from '../service/ipay.service';
import {ReoccurringDeposit } from '../service/Recurringdeposit';

@Component({
  selector: 'app-recurringdeposit',
  templateUrl: './recurringdeposit.component.html',
  styleUrls: ['./recurringdeposit.component.css']
})
export class RecurringdepositComponent implements OnInit {

  reoccurringdeposit:ReoccurringDeposit;


  constructor(private ipayService:IpayService) { }


  ngOnInit(): void {
  }


  addMoney(reoccurringdeposit:ReoccurringDeposit){


     this.ipayService.addMoney(reoccurringdeposit);



  }
}
