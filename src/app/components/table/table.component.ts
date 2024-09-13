import { Component, OnInit, ViewChild } from '@angular/core';
import { Emptable } from 'src/app/model/emptable';
import { TablesService } from 'src/app/service/tables.service';
import {MatTableDataSource} from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Country } from 'src/app/model/country';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
displayedColumns: string[] = [ 'name', 'email', 'phone','country', 'address', 'status', 'dob','gender','term' ,'action2','action'];
dataSoure:any;
emp!:Emptable[]
malePeople!:Emptable[]
femalePeople!:Emptable[]
countryPeople!:Emptable[]
countryname!:Country[]
countryPe!:any
dialogVisible:boolean=false
@ViewChild(MatPaginator) pagi!: MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
  constructor(private ts:TablesService,
    private di:MatDialog
  ) { 
    
    
  }

  ngOnInit(): void {
    this.getJson();
  }


getJson(){
  this.ts.getJson().subscribe({
    next:(d)=>{
  this.emp=d
  console.log(this.emp)
  this.dataSoure=new MatTableDataSource<Emptable>(this.emp)
  this.dataSoure.paginator = this.pagi
  this.dataSoure.sort=this.sort}
}) 
  }
  
 

FilterChange(event:Event){
const filtervalue=(event.target as HTMLInputElement).value
this.dataSoure.filter=filtervalue
  }

  Delete(id:any){ 
  this.ts.delete(id).subscribe(d=>{
  console.log("deleted")
  this.ngOnInit()

})
  }



  getM(m:string){
    this.ts.getJson().subscribe(d=>{
    this.emp=d
    console.log(this.emp)
    this.malePeople = this.emp.filter(person => person.gender.toLowerCase() === m);
    this.dataSoure=new MatTableDataSource<Emptable>(this.malePeople)
    this.dataSoure.paginator = this.pagi;
    this.dataSoure.sort=this.sort
  })}




  getF(m:string){
this.ts.getJson().subscribe({
  next:(re)=>{this.femalePeople=re.filter(fp=>fp.gender==m)
    this.dataSoure=new MatTableDataSource<Emptable>(this.femalePeople)
    this.dataSoure.paginator=this.pagi
    this.dataSoure.sort=this.sort
  }
})
  }
  // getF(m:string){
  //   this.ts.getJson().subscribe(d=>{
  //   this.emp=d
  //   console.log(this.emp)
  //   this.femalePeople = this.emp.filter(person => person.gender.toLowerCase() === m);
  //   this.dataSoure=new MatTableDataSource<Emptable>(this.femalePeople)
  //   this.dataSoure.paginator = this.pagi;
  //   this.dataSoure.sort=this.sort
  // })}
  getByCountryName(name:string){
    this.ts.getJson().subscribe(d=>{
      this.emp=d
      console.log(this.emp)
      this.countryPeople = this.emp.filter(person => person.countryn== name);
      this.dataSoure=new MatTableDataSource<Emptable>(this.countryPeople)
      this.dataSoure.paginator = this.pagi;
      this.dataSoure.sort=this.sort
    })}
 
  getCountry(name:string){
    this.ts.getCountry().subscribe({
     next:(re)=>{this.countryname=re.filter(coun=>coun.name.toLowerCase()===name);
       this.dataSoure=new MatTableDataSource<Emptable>(this.countryPeople)
     this.dataSoure.paginator = this.pagi;
     this.dataSoure.sort=this.sort
     }})
    }

msg='';

    deleteSome(id:any){
      const shouldDelete=window.confirm("Are you sure to delete?");
      if(shouldDelete){
        this.Delete(id)
      }
    }

    Openpopup(id:any){
      var _poup= this.di.open(PopupComponent,{
         width:'60%',
         enterAnimationDuration:'100ms',
         exitAnimationDuration:'100ms',
         data:{
           title:'Confirmation'
           
         }})
        
       _poup.afterClosed().subscribe(i=>{
         console.log(i)
       })
     }


     clitosh(){
      this.dialogVisible=true
     }
     
     aylse(){
      this.dialogVisible=false;
     }
}
  