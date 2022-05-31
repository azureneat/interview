import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http'
//import { MaterialModule } from '../material/material.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    //  MaterialModule
  ]
})
export class SharedModule { }
