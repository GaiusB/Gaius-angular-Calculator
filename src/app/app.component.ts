import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gaïus-ang-calculator';

  /* lets creat some variables */

  calcValue: number = 0;
  funcT: any = 'NoFunction'
  /* the aboce variable a created to assigne the current value and the function of the cal  */

  onClickValue (val: string, type: any)  {
    console.log(val, type);

  }
}
