import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/country';
import { TablesService } from 'src/app/service/tables.service';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.scss']
})
export class FormdesignComponent implements OnInit {
 emp:any={
  name:"d",email:"",phone:"",address:"",country:"",term:'',dob:"",status:"",gender:""
 }
 country!:Country[]
  countryname!:any
  termlist=['eth','ear','usa','sud']
  
  constructor( private bu:FormBuilder,
               private ts:TablesService,
               private ra:Router

  ) { }
  custemorForm=this.bu.group({
    name:this.bu.control('',Validators.compose([Validators.required,Validators.max(15),Validators.min(5),Validators.pattern("Add2")])),
    email:this.bu.control('',Validators.compose([Validators.required,Validators.email])),
    phone:this.bu.control('',Validators.compose([Validators.required,Validators.required])),
    countryn:this.bu.control('',[Validators.required,Validators.min(5)]),
    address:this.bu.control('',Validators.required),
    term:this.bu.control('',Validators.required),
    gender:this.bu.control('female'),
    dob:this.bu.control(new Date(2016,3,2)),
    status:this.bu.control(true),
  })
  ngOnInit(): void {
    this.ts.getCountry().subscribe({
      next:(re)=>{this.countryname=re.map(r=>r.name);  },
      error:(re)=>{console.log("some ting else with country")}
    })
    this.custemorForm.setValue({name:'abebe',email:'abebe@gmal.com',phone:'087654323',countryn:'usa',term:'yyyg',gender:'female'
      ,address:'addis',dob:new Date(2001,3,2),status:true
    })
  }

  saveChange(){
  this.emp=this.custemorForm.value
// this.emp=this.custemorForm
    this.ts.addJson(this.emp).subscribe({
      next:(re)=>{ console.log("added succesfully"),
        this.custemorForm.reset();
        this.ra.navigate(['home']) },
      error:(re)=>{console.log("error occurd"+re)}
    })
console.log(this.custemorForm.value)
  }
  clearform(){
    
  }
}
