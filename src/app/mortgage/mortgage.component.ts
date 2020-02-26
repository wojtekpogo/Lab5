import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CalculateService} from '../services/calculate.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private calculateService: CalculateService) { }

  ngOnInit(): void {
  }
  years: number;
  Total:number;

  calculateinterest()
  {
    this.Total = this.calculateService.calculateinterest(this.years);
  }
 /* Total: number;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  
  calculateinterest(): void {
    for (var counter: number = 1; counter < this.years + 1; counter++) {
      this.Total = this.Amount * Math.pow((1 +
        this.interestRate / this.annualCompound),
        (this.annualCompound * counter));
    }
  }
  */

}
