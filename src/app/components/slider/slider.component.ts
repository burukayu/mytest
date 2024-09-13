import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slidervalue=0;
  constructor() { }

  ngOnInit(): void {
    var lmmd="trying is better to understand. but it is hopeless for the first time!"
  }

}
