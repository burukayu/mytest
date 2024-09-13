import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procard',
  templateUrl: './procard.component.html',
  styleUrls: ['./procard.component.scss']
})
export class ProcardComponent implements OnInit {

  constructor( private ra:Router
    ) { }
 @Input( ) property!:IProperty

  ngOnInit(): void {
  }
  addProperty(id:any){
    this.ra.navigate(['pro-detail/'+id])
      }

}
