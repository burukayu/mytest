import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HostingService {

  constructor(  private http:HttpClient) { }

  
getAllProperties(SaleRent: number ):Observable<IProperty[]>{
 
 return this.http.get<IProperty[]>('http://localhost:3000/proprty/')
 .pipe(
  map(data=>{ 
    const propertiesArray:Array<IProperty> = [];
    for (const id in data){
      if(data.hasOwnProperty(id) && data[id].forSale==SaleRent){
      propertiesArray.push(data[id])
    }}
    return propertiesArray
  })
 );
}
}
