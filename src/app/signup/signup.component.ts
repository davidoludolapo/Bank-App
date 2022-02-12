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
  public firstName:string = '';
  public lastName:string = '';
  public email:string = '';
  public phone:number = 0;
  public password:string = '';
  public confirmPassword:string = '';
  public allUsers:any = []
  
  constructor(private _anyService:UserService, private _router:Router) { }
  
  ngOnInit(): void {
    this.allUsers = this._anyService.getAllUsers()
    console.log(this._anyService);
    console.log(this.allUsers);
      
  }


  // signupForm = this.fb.group({
  //   firstName: ['Dolapo', Validators.required],
  //   lastName: [''],
  //   email: [''],
  //   phone: [],
  //   password: this.fb.group({
  //     password: [''],
  //     confirmPassword: [''],
  //   })

  // })


  // loadApiData(){
  //   this.signupForm.patchValue({
  //     firstName: 'Dayo',
  //     lastName: 'John',
  //     email: 'test@gmail.com',
  //     phone: 234,
  //     password: {
  //       password: 'test',
  //       confirmPassword: 'test'
  //     }
  //   })
  // }

  signUp(){
    let {firstName,lastName,email,phone,password,confirmPassword} = this
    if (this._anyService) {
      alert('proceed to sign in')
      this._router.navigate(['/signin'])
    }

    this.allUsers.push({firstName,lastName,email,phone,password,confirmPassword})
    // console.log(this.allUsers);
    localStorage["localUsers"] =JSON.stringify(this.allUsers)
    
  }


}
