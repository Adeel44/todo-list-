import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseURL ="http://localhost:3000/todo";


  constructor( private http:HttpClient) { }

  gettodoList(){
    return this.http.get("http://localhost:3000/todo")
  }

  Addtodo(data:any){
    return this.http.post("http://localhost:3000/todo", data)
  }
  DeleteTodoById(id:any){

    return this.http.delete(`${this.baseURL}/${id}`)

  }

  updateStatus(id:any , data:any){
    return this.http.patch(`${this.baseURL}/${id}`,data)
    
  }




}
