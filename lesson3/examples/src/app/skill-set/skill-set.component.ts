import { Attribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loopss', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = 'purple';
   bulletType: string = 'a';
   changeColor: boolean = false;
  

   constructor() { }

   ngOnInit() { }

}
