import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public allUsers: any = [];
  public found: any = {};



  constructor(private _anyService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.allUsers = this._anyService.getAllUsers()
  }

  signIn() {
    this.found = this.allUsers.find((val: any, i: any) => val.email == this.email && val.password == this.password)
    if (this.found) {
      alert(`signed in success`)
      localStorage["currentUser"] = JSON.stringify(this.found)
      this._router.navigate(["/dashboard"])
    } else {
      alert(`wrong details`)
    }
    console.log(this.found);
  }

}
