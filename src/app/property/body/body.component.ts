import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private ra:Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.ra.navigate(['add-property'])
      }
}
