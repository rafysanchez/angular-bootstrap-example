// http://plnkr.co/edit/PxBaZs?p=preview
// https://www.youtube.com/watch?v=zIuALrbcQog&t=10s

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { DataTableModule } from "angular2-datatable";
import { CommonModule }      from '@angular/common';
import { DataFilterPipe }   from './data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe],
  imports: [
    CommonModule,
    BrowserModule, 
    AppBoostrapModule, 
    FormsModule,
    DataTableModule],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule {}
