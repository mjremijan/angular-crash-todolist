import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = '';
    subTitle:string = '';

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
