import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CalculateService} from '../services/calculate.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {



  constructor(private calculateService: CalculateService) { }


  ngOnInit(): void {
  }
 /* Total: number;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  */
  years: number;
  Total: number;
 /* calculateinterest(): void {
    for (var counter: number = 1; counter < this.years + 1; counter++) {
      this.Total = this.Amount * Math.pow((1 +
        this.interestRate / this.annualCompound),
        (this.annualCompound * counter));
    }
  }
  */

  calculateinterest()
  {
    this.Total = this.calculateService.calculateinterest(this.years);
  }

}
