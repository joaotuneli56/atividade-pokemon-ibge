import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntoComponentComponent } from '../into-component/into-component.component';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule,IntoComponentComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
name:string = "Thiago";
age:number = 39;
job = "Developer";  
hobbies = ["Music", "Sports", "Movies"];
car = {make: "Ford", model: "Fiesta"};  


  constructor() {


   }


}
