import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../../view/home/home.component.html',
  styleUrls: ['../../view/home/home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
