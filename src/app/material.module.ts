import { NgModule } from "@angular/core";
import { MatCardModule, } from "@angular/material/card";
import { MatIconModule, } from "@angular/material/icon";
import { MatToolbarModule, } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule, } from "@angular/material/button";
import { MatListModule, } from "@angular/material/list";
import { MatSliderModule, } from "@angular/material/slider";
import { MatSidenavModule, } from "@angular/material/sidenav";
import { MatBadgeModule, } from "@angular/material/badge";
import { MatSortModule } from "@angular/material/sort";
import {  MatTableModule } from "@angular/material/table";
import {MatPaginatorModule } from "@angular/material/paginator";
import {MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule } from "@angular/material/input";
import {MatDatepickerModule } from "@angular/material/datepicker";
import {MatNativeDateModule } from "@angular/material/core";
import {MatRadioModule } from "@angular/material/radio";
import {MatSelectModule } from "@angular/material/select";
import {MatCheckboxModule } from "@angular/material/checkbox";
import {MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatDialogModule } from "@angular/material/dialog";



@NgModule({
    exports:[
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatSliderModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatRadioModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatDialogModule
]
})
export class MaterialModule{

}