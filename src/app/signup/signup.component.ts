import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    if (localStorage["localUsers"]){
      this.allUsers = JSON.parse(localStorage["localUsers"])
      console.log(this.allUsers);
      
    } else {
      this.allUsers=[]
      console.log(this.allUsers);
      
    }
    this.allUsers = localStorage["localUsers"]?JSON.parse(localStorage["localUsers"]):[]
      console.log(this.allUsers)
      
  }


  signupForm = this.fb.group({
    firstName: ['Dolapo', Validators.required],
    lastName: [''],
    email: [''],
    phone: [],
    password: this.fb.group({
      password: [''],
      confirmPassword: [''],
    })

  })
  
//  signupForm = new FormGroup({
//     firstName: new FormControl('Oludolapo'),
//     lastName: new FormControl(''),
//     email: new FormControl(''),
//     phone: new FormControl(''),
//     password: new FormControl(''),
//     confirmPassword: new FormControl('')
//   });

  loadApiData(){
    this.signupForm.patchValue({
      firstName: 'Dayo',
      lastName: 'John',
      email: 'test@gmail.com',
      phone: 234,
      password: {
        password: 'test',
        confirmPassword: 'test'
      }
    })
  }

  signUp(){
    let {firstName,lastName,email,phone,password,confirmPassword,allUsers} = this
    this.allUsers.push({firstName,lastName,email,phone,password,confirmPassword})
    console.log(allUsers);
    localStorage["localUsers"] =JSON.stringify(allUsers)
    
  }


}
