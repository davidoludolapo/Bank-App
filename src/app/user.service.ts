import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public allUsers:any =[];

  constructor() { }

  getAllUsers(){
    this.allUsers = localStorage["localUsers"] ? JSON.parse(localStorage["localUsers"]):[]
    return this.allUsers
  }
}
