import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>,
) { }
  inputdata:any
  closemesage='closed form ppp'
  ngOnInit(): void {
    this.inputdata=this.data
  }

  closeButton(){

      //this.t.Delete("d75c")
    
  this.ref.close('closed using function');
  }
}
