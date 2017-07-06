import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()

export class PostService {
    constructor(public  http: Http){
       console.log('postservice initalished...');
    }

   getPost(){
     // return this.http.get("https://jsonplaceholder.typicode.com/posts")
   //    return this.http.get("app/service-htt/getMethod.json")
    //  .map(res => res.json());

    return this.http.get("https://jsonplaceholder.typicode.com/posts")
         .map((res:Response) => res.json());


   }

}
