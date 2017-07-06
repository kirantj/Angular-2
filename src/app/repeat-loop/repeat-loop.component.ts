import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat-loop',
  templateUrl: './repeat-loop.component.html',
  styleUrls: ['./repeat-loop.component.css']
})
export class RepeatLoopComponent implements OnInit {
  private detail:any;
  private details:any;
  private users:string[];
  private nullll:any;
  private udetails:any;
  private showDetails:boolean;
  private error:boolean;
  private addData:boolean;
  private save:boolean;

  name:string = "";
  designation:string = "";
  skills:string = "";
  place:string = "";



  constructor() {
     this.users = ["kiran","ram","sam","suresh","ravi"];
     this.detail = [
                      {  name: 'kiran', designation: 'UI', skills:'html, css, javascript', place:'hyd', experience:3 },
                      {  name: 'Ram', designation: 'php', skills:'php, drupal, core', place:'banglr', experience:4 },
                      {  name: 'Lisa', designation: 'dot net', skills:'Asp, Ado, javascript', place:'chennai', experience:5 },
                      {  name: 'jain', designation: 'java', skills:'jsp, jee, javascript', place:'pune', experience:6 },
                      {  name: 'aqua', designation: 'oracle', skills:'sql, oracle', place:'kerala', experience:7 }
                  ];
     this.details = [
                      {  name: 'kiran', designation: 'UI', skills:'html, css, javascript', place:'hyd', experience:3 },
                      {  name: 'Ram', designation: 'php', skills:'php, drupal, core', place:'banglr', experience:4 },
                      {  name: 'Lisa', designation: 'dot net', skills:'Asp, Ado, javascript', place:'chennai', experience:5 },
                      {  name: 'jain', designation: 'java', skills:'jsp, jee, javascript', place:'pune', experience:6 },
                      {  name: 'aqua', designation: 'oracle', skills:'sql, oracle', place:'kerala', experience:7 }
                  ];

      this.showDetails= false;
      this.error= true;

      this.save= false;
      this.addData= true;
   }

  ngOnInit() {
  }


toggledetails(){
        if(this.showDetails == true){
             this.showDetails = false;
             this.error= true;
            }
        else{
            this.showDetails = true;
            this.error= false;
        }
}


adduser(dtl){
     this.users.push(dtl);
     this.nullll = ' ';
  }
 dlttt(i){
     this.users.splice(i,1);
  }


  dlt(i){
     this.detail.splice(i,1);
  }




 delete(i){
     this.details.splice(i,1);
  }

  data() {
        if (this.details) {

            var entry = {
                'name': this.details.name,
                'designation': this.details.designation,
                'skills': this.details.skills,
                'place': this.details.place
            };

            this.details.push(entry);
            this.details.name = '';
            this.details.designation = '';
            this.details.skills = '';
            this.details.place = '';
        }
    }



edit(detail){
   //console.log(detail.name);
   this.save= true;
   this.addData= false;
     this.details.name = detail.name;
     this.details.designation = detail.designation;
     this.details.skills = detail.skills;
     this.details.place = detail.place;
}    

addUser(){
    this.save= false;
    this.addData= true;
        this.details.name = '';
        this.details.designation = '';
        this.details.skills = '';
        this.details.place = '';
}


/*saveUser(){
    console.log(1);
    console.log(this.details.name);
    console.log(this.detail.name);
      this.detail.name = this.details.name;
      this.detail.designation = this.details.designation;
      this.detail.skills = this.details.skills;
      this.detail.place = this.details.place;
} */


saveUser(value){
   this.detail.name= this.details.name;
   console.log(this.detail.name);
   console.log(this.details.name);
}
  


 /* saveUser() {
    const findUser = this.details.find(detail => detail.name === this.details.name);
    if(findUser) {
      this.detail.name = this.details.name.value;
    } else {
      console.log(123);
    }
  } */   
  



}
