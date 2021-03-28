import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Select Images!';
  image1 = 'assets/img/1.jpg';
  image2 = 'assets/img/2.jpg';
  image3 = 'assets/img/3.jpg';
  image4 = 'assets/img/4.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}