import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public image: string = "../assets/zenith.png"
  public image1: string = "../assets/gtb.png"
  public image2: string = "../assets/firstbank.png"
  public image3: string = "../assets/wema.png"

  constructor() { }

  ngOnInit(): void {
  }
  
}
