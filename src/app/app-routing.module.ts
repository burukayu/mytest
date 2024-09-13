import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
import { FormdesignComponent } from './components/formdesign/formdesign.component';
import { ProcardComponent } from './property/procard/procard.component';
import { literalMap } from '@angular/compiler';
import { ListComponent } from './property/list/list.component';
import { BodyComponent } from './property/body/body.component';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PopupComponent } from './components/popup/popup.component';

const routes: Routes = [
  {path:"card",component:CardComponent},
  {path:'menubar',component:MenubarComponent},
  {path:'about',component:SliderComponent},
  {path:'home',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:"procard",component:ProcardComponent},
  {path:"list",component:ListComponent},
  {path:"body",component:BodyComponent},
  {path:"add-property",component:AddpropertyComponent},
  {path:"pro-detail/:id",component:PropertyDetailComponent},
  {path:"confirm",component:PopupComponent},
  {path:"**",component:TableComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
