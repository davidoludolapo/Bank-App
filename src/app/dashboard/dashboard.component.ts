import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../type/task.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isDisabled = false;
  public name: string = ''
  public allTasks:Array<TaskInterface>=[]
  public editData:boolean= false;
  public editedIndex:number= 0

  public image:  string = "../assets/zenith.png"
  public image1: string = "../assets/gtb.png"
  public image2: string = "../assets/firstbank.png"
  public image3: string = "../assets/wema.png"
  public user: any = ''
  public currentUser: any = []

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage["currentUser"])
    console.log(this.user.accountNo);

  }

  addTask(e:any) {
    e.preventDefault()
    let name = this.name
    this.allTasks.push({name})
    this.name= ''
   
  }

  deleteTask(i:number){
    this.allTasks =this.allTasks.filter((_,index)=>index!==i)
    
  }
 
  editTask(i:number){
   this.editData = true;
   this.editedIndex= i;
 
   let editedObject = this.allTasks[i]
   this.name = editedObject.name
   
  }
 
  saveChanges() {
   let {name, editedIndex} = this
   let editedObject = {name}
   this.allTasks[editedIndex] = editedObject
   this.editData =false
   
   this.name= ''
   
  }

  logOut(){
    localStorage.removeItem("currentUser")
  }

}
