import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


//console.log("todo")


@NgModule({
  declarations: [
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
