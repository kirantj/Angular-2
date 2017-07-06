import { Component, OnInit } from '@angular/core';
import { form } from './form';

@Component({
  selector: 'app-login-valid',
  templateUrl: './login-valid.component.html',
  styleUrls: ['./login-valid.component.css']
})
export class LoginValidComponent implements OnInit {

  model:form[] =[];

  constructor() { }

  ngOnInit() {
  }

}
