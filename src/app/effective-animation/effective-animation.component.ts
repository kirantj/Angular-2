import { Component, OnInit} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-effective-animation',
  templateUrl: './effective-animation.component.html',
  styleUrls: ['./effective-animation.component.css'],
  animations: [

       trigger('myAwesomeAnimation', [
           state('small', style({
              transform: 'scale(0.8)',
          })),
            state('large', style({
              transform: 'scale(1.2)',
          })),

          transition('small <=> large', animate('1000ms ease-in')),

          //transition('small <=> large', animate('300ms ease-in', style({transform: 'translateY(40px)'}))),
             
            /* transition('small <=> large', animate('300ms ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
             ]))), */

       ]),


      /* trigger('colorChange', [

           kiran('off', style({
               transform: 'scale(0.8)',
           })),
           kiran('on', style({
               transform: 'scale(1.2)',
           })),

           transition('off <=> on', animate('1000ms ease-in')),
  
        ]), */


    ]
})
export class EffectiveAnimationComponent implements OnInit {
  
  title = 'app';
   
   state: string = 'small';
   kiran: string = 'off';

    animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }

    togglelights() {
         this.kiran = (this.kiran === 'off' ? 'on' : 'off');
    }



  constructor() { }

  ngOnInit() { }

}
