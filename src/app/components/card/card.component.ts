import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  visivility=true
  likes=0
  constructor() { }

  ngOnInit(): void {
  }

  telegram(){
  
  }
  addLike(){
if(this.likes<5){ this.likes=this.likes+1; this.visivility=false}
if(this.likes==0) {this.visivility=true;}
  }
}
