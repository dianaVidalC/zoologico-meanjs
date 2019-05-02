import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #4481eb',
        color: '#ffffff',
        backgroundColor: '#0ba360',
        borderRadius: '0px',
      })),
      state('active', style({
        border: '5px solid #0ba360',
        backgroundColor: '#eb3941',
        borderRadius: '50px',
        color: '#ffffff',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('3s linear')),
      transition('active => inactive', animate('3s linear'))
    ])
  ]
})
export class StoreComponent implements OnInit {
  status: any;
  constructor() {
    this.status = 'inactive';
  }

  ngOnInit() {
  }

  changeStatus() {
    if (this.status === 'inactive') {
      this.status = 'active';
    } else {
      this.status = 'inactive';
    }
  }
}
