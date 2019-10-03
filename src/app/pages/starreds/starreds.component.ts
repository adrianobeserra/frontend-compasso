import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starreds',
  templateUrl: './starreds.component.html',
  styleUrls: ['./starreds.component.scss']
})
export class StarredsComponent implements OnInit {

  @Input() starreds: any[];

  constructor() { }

  ngOnInit() {
  }

}
