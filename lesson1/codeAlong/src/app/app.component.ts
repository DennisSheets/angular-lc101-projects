import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to My Project';
  other = "this is just a little more";
  arr = ["thing","stuff","widget"]
}
