import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todoList:any;

  
  
  // isdone:boolean=false;
  

  constructor( private todService:TodoService){}

  ngOnInit(): void {
    this.getList()
    //this.isCompleted()

    

   
  }

  getList(){
    this.todService.gettodoList().subscribe((result:any)=>{
      this.todoList = result
      console.log(result)

      // for(var i=0; i<result.lenght;i++){
      //   console.log(result[0])

      // }


    })

  }


  deleteToDo(todoid:any){
    console.log(todoid)
    this.todService.DeleteTodoById(todoid).subscribe((result)=>{
       alert("Task deleted")
       this.getList()
     });
  }


  isCompleted(event:any, listid:any){
    
    console.log(event.target.checked)
    this.todService.updateStatus(listid , {isdone:event?.target.checked}).subscribe((data)=>{
    
      console.log("d"+data)
     alert("Task updated")
    })



  }
 
   
    
  


}
