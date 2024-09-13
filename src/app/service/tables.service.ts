import { Injectable } from '@angular/core';
import { Emptable } from '../model/emptable';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
baseurl:string="http://localhost:3000/posts/"
countryurl:string="http://localhost:3000/country/"
  constructor( private http:HttpClient) { }
  getJson():Observable<Emptable[]>{
    return this.http.get<Emptable[]>(this.baseurl);
  }
  addJson(emp:any):Observable<Emptable>{
    return this.http.post<Emptable>(this.baseurl,emp)
  }

  delete(id:string):Observable<Emptable>{
    return this.http.delete<Emptable>(this.baseurl+id)
  }
  getCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.countryurl)
  }
}
