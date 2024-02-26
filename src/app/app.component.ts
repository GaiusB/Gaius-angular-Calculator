import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})

export class AppComponent {
  title = 'Gaïus-ang-calculator'; 

  // Définition des variables

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue';
  
  firstNumber: number = 0;
  secondNumber: number = 0;

  // Fonction pour gérer les clics sur les boutons

  onClickValue(val: string, type: any) {
    console.log(val, type);

    if(type == 'number') {
      this.onNumberClick(val);
    } else if(type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if(this.calNumber != 'noValue') {
      this.calNumber += val; 
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (val === 'c') {
      this.clearAll();
    } else if (val === '%') {
      if (this.funcT === 'NoFunction') {
        this.firstNumber = this.calValue / 100;
        this.calValue = this.firstNumber;
      } else {
        this.performCalculation();
        this.calValue /= 100;
      }
      this.resetForNextOperation();
    } else if (val === '=') {
      this.performCalculation();
      this.onEqualClick();
    } else {
      if (this.funcT !== 'NoFunction') {
        this.performCalculation();
      }
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
  }

  performCalculation() {
    this.secondNumber = this.calValue;
    switch (this.funcT) {
      case '+':
        this.calValue = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.calValue = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.calValue = this.firstNumber * this.secondNumber;
        break;
      case '/':
        if (this.secondNumber === 0) {
          console.error("Division by zero!");

          // Gérer la division par zéro de manière appropriée
          
        } else {
          this.calValue = this.firstNumber / this.secondNumber;
        }
        break;
    }
    this.resetForNextOperation();
  }

  resetForNextOperation() {
    this.firstNumber = this.calValue;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'NoFunction';
  }

  onEqualClick() {
    this.resetForNextOperation(); 
  }

  clearAll() {
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
}