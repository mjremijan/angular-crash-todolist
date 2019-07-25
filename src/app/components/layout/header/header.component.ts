import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = '';
  subTitle:string = '';

  ngOnInit() {
  }
  
  constructor() {
      this.setTitle('ToDo');
      this.setSubTitle("Angular");
  }

  setTitle(title:string):void {
      this.title = title;
  }

  setSubTitle(subTitle:string):void {
      this.subTitle = subTitle;
  }

  

}
