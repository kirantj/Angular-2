import { Component, OnInit, NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { FilterRangePipe } from './filter-range.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
private namee:string;
private birthday = new Date(2017, 11, 15);
private details:any;
private detailss: any;
  private people:any;
  sliderValue:number = 20;
  

  //order: string = 'place';
  // order:any;



  constructor(){
    this.namee = 'Angularjs Built in Pipes'
     this.details = [
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

     this.detailss = [
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

    this.people = [
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
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [ FilterPipe, FilterRangePipe ]
})
export class AppModule { }
