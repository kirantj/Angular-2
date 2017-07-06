import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

public count: number = 0;
public clicked_button: string = "";
public dubl_click: string = "";

  increment() {
    this.count += 1;
  }
  decrement(){
    if(this.count === 0){
      //return this.count = 0;
      alert("value should be more than zero");
    } else{
      this.count -= 1;
    }
  }


changeColor(){
	//alert(1);
	this.clicked_button = "you clicked the button";
}

dblclickk(){
	this.dubl_click = "Double click event triggers";
}


wasClicked = false;
    onClick() {
        this.wasClicked= !this.wasClicked;
 }


public oover: string = "";
public lleave: string = "";
lleavee = false;
ooverr = false;
 overEvent(){
    //alert("over");
    this.oover= "You hover the mouse on text";
    this.ooverr= !this.ooverr;
    this.lleave= "";
 }
 leaveEvent(){
    //alert("leave");
    this.lleave= "You leave the mouse on text";
    this.lleavee= !this.lleavee;
    this.oover= "";
 }


public keyPresss: string = "";
public keyUpp: string = "";
 keyPress(){
    this.keyPresss = "KeyPress event triggers";
    this.keyUpp = "";
 }
 keyUp(){
    this.keyUpp = "KeyUp event triggers";
    this.keyPresss = "";
 }


  constructor() { }

  ngOnInit() {
  }

}
