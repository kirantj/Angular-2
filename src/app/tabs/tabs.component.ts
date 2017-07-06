import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
 private shown: string = 'About';
 private tab: number = 1;
 private tabb: string = 'one';



  constructor() { }

  ngOnInit() {
  }

}
