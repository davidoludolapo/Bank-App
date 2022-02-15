import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public receiver: any = ""
  public password: string = ""
  public amount: number = 0
  public bfaccountName: number = 0
  public account_bal: number = 0;
  public currentUser: any = []
  public allUsers: any = []
  constructor() { }

  ngOnInit(): void {
    this.allUsers = JSON.parse(localStorage['localUsers'])
    console.log(this.allUsers);
    this.currentUser = JSON.parse(localStorage['currentUser'])


  }
  transfer() {
    this.receiver = (this.allUsers.find((val: any, i: number) => val.accountNo == this.bfaccountName))


    let { amount, password, receiver } = this;

    if (amount > this.currentUser.account_bal) {
      alert('insufficient fund')
    } else if (!receiver) {
      alert('Account does not exist')
    } else if (this.currentUser.password != password) {
      alert('incorrect password')
    } else {
      this.currentUser.account_bal = this.currentUser.account_bal - this.amount
      this.receiver.account_bal = this.receiver.account_bal + this.amount

      console.log(this.currentUser.account_bal);
      alert("transfer successful")
      console.log(this.receiver.account_bal);

    }

  }
}


