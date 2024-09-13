import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {

  constructor(private ra:Router, ) { }

  ngOnInit(): void {

  }
onBack(){
  this.ra.navigate(['/card'])
}
onSubmit(Form:NgForm){
  console.log(Form)
}
onConfirm(){
  this.ra.navigate(["body"])
}
}
