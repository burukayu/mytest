import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  visivility=false
  constructor() { }

  ngOnInit(): void {
  }

  Visible(){
    if(this.visivility==false) this.visivility=true
    else this.visivility=false
  }
}
