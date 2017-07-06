import { Component, OnInit } from '@angular/core';
import { form } from './form'

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent implements OnInit {
  private tech:string[];

  //model:form[] =[];
  model = new form(1, '', '', '', '', '');
  get currentform(){
     return JSON.stringify(this.model)
  }

  constructor() {
     this.tech =["HTML","CSS","Bootstrap","JavaScript","Jquery","Angular"];
   }

  ngOnInit() {
  }


}
