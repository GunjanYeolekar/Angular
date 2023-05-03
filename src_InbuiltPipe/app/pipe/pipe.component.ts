import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit 
{
  name = "Gunjan Yeolekar";
  today = new Date();
  no = 32.389;

  constructor() { }

  public Institute = 
  {
    "Name" : "Gunjan",
    "Location" : "Pune"
  }

  ngOnInit() {
  }

}
