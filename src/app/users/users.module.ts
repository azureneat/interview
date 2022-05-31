import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { MaterialModule } from './../material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const Components = [
  DisplayUsersComponent,
  UserRegComponent,
]




@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    Components
  ]
})
export class UsersModule { }
