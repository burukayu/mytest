import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material.module';
import { MenubarComponent } from './components/menubar/menubar.component';
import { TableComponent } from './components/table/table.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormdesignComponent } from './components/formdesign/formdesign.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './property/list/list.component';
import { ProcardComponent } from './property/procard/procard.component';
import { BodyComponent } from './property/body/body.component';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenubarComponent,
    TableComponent,
    SliderComponent,
    FormdesignComponent,
    ListComponent,
    ProcardComponent,
    BodyComponent,
    AddpropertyComponent,
    PropertyDetailComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
