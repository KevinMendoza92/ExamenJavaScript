import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css']
})
export class HeightComponent implements OnInit {

  @Input() height: number;
  constructor() { }

  ngOnInit() {
  }

}
