import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  message:string = "From Hello Component."

  getMessage():String{ 
    console.log("From getMessage method.") //show in console only
    return "From getMessage method." //show on the page
  }

  //Event binding Method
  myClicker():void{
    alert("Button Clicked") 
  }
}
