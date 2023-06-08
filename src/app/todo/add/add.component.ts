import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  

  constructor( private todoService:TodoService){}

  todoform = new FormGroup({
    name:new FormControl('', [Validators.required , Validators.minLength(3) ]),
    isdone:new FormControl()
   

  })

  createToDo(){
    this.todoform.controls["isdone"].setValue(false)
    console.log(this.todoform.value)
    this.todoService.Addtodo(this.todoform.value).subscribe((result:any)=>{
      this.todoform.reset()
      alert("Task added successfully")
      
    },(error)=>{
      alert("Task not added ")
    })

   
  }



}
