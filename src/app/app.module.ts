import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { DepartmentComponent } from './department/department.component';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
