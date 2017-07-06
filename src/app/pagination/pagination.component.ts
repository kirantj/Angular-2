import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

private collection:any;
private list:any;

q: number = 1;
p: number = 1;

  constructor() { 

    this.collection = [
        {nam:'vj', age:18},
       {nam:'kiran', age:24},
       {nam:'ram', age:32},
       {nam:'sam', age:44},
       {nam:'raj', age:99},
       {nam:'venu', age:48},
       {nam:'prasanth', age:50},
       {nam:'suresh', age:68},
       {nam:'kir', age:100}
    ]

    this.list = [
       {id:10440, name:'kiran', designation:'UI development', place:'Telangana'},
       {id:10441, name:'ram', designation:'java', place:'Gujarat'},
       {id:10442, name:'sam', designation:'Dot net', place:'	Haryana'},
       {id:10443, name:'venu', designation:'oracle', place:'Andhra Pradesh'},
       {id:10444, name:'prasanth', designation:'php', place:'Arunachal Pradesh'},
       {id:10445, name:'suresh', designation:'drupal', place:'Bihar'},
       {id:10446, name:'karan', designation:'ui developer', place:'Jharkhand'},
       {id:10447, name:'sameer', designation:'java', place:'Karnataka'},
       {id:10448, name:'kamal', designation:'oracle', place:'Kerala'},
       {id:10449, name:'rass', designation:'php', place:'Maharashtra'}
    ]

  }

  ngOnInit() {
  }

}
