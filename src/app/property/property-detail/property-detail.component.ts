import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  propertyId:any;
  constructor(private ar:ActivatedRoute,
    private ra:Router
  ) { }

  ngOnInit(): void {
this.propertyId=this.ar.snapshot.params['id']
this.ar.params.subscribe(
  (params)=>{
    this.propertyId=+params['id']
  }
)
  }

  onNext(){
   this. propertyId=Number(this.propertyId)+1
   this.ra.navigate(["/pro-detail/"+this.propertyId])
  }
}
