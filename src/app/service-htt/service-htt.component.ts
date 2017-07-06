import { Component, OnInit } from '@angular/core';
import { PostService } from './get.service';

@Component({
  selector: 'app-service-htt',
  templateUrl: './service-htt.component.html',
  styleUrls: ['./service-htt.component.css'],
  providers:[PostService]
})
export class ServiceHttComponent implements OnInit {
 public posts:post[];

  constructor(private PostService: PostService) {
          this.PostService.getPost().subscribe(post => {
             this.posts = post;
          })
     }

  ngOnInit() {
  }


}

interface post{
   id:number;
   title:string;
   body:string;
}
