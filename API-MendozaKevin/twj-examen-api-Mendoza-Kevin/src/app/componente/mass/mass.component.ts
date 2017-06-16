import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent implements OnInit {

  @Input() mass: number;
  constructor() { }

  ngOnInit() {
  }

}
