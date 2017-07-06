import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  color: string;
  condition:boolean = true;
  public colors="green";
  public persons=['kiran', 'sam', 'ram', 'suresh', 'teja'];

  constructor() {

   }

  ngOnInit() {
  }

}
