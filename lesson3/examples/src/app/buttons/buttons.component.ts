import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   inactiveButton: boolean = false;
   constructor() { }

   ngOnInit() { }

   inactive() {
      this.inactiveGold = false,
      this.inactiveSilver = false,
      this.inactiveCopper = false
   }

   reverse() {
      this.inactiveGold = !this.inactiveGold,
      this.inactiveSilver = !this.inactiveSilver,
      this.inactiveCopper = !this.inactiveCopper
   }

}
 