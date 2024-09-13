import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HostingService } from 'src/app/service/hosting.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private hs:HostingService,
   private ra:Router,
   private ar:ActivatedRoute
  ) { }
  SaleRent=1;
  properties!:IProperty[];
  ngOnInit(): void {
    
    if(this.ar.snapshot.url.toString()){
      this.SaleRent=2
    }
this.hs.getAllProperties(this.SaleRent).subscribe({next:(d)=>{
  this.properties=d;},error:(re)=>{console.log(re)}
})

  }

  
}
