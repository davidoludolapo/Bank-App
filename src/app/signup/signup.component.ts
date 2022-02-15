import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public phone: number = 0;
  public password: string = '';
  public accountNo: string = "";
  public account_bal: number = 100000;
  public confirmPassword: string = '';
  public allUsers: any = []


  constructor(private _anyService: UserService, private _router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.allUsers = this._anyService.getAllUsers()
    console.log(this._anyService);
    console.log(this.allUsers);

  }

  signUp() {
    let { firstName, lastName, email, phone, password, confirmPassword, accountNo, account_bal } = this
    accountNo = `223${Math.floor(Math.random() * 10000000)}`
    console.log(this.accountNo);

    this.allUsers.push({ firstName, lastName, email, phone, password, confirmPassword, accountNo, account_bal })
    // console.log(this.allUsers);
    localStorage["localUsers"] = JSON.stringify(this.allUsers)

    if (this._anyService) {
      alert('proceed to sign in')
      this._router.navigate(['/signin'])
    }
  }


}
