import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() name: string = 'world';

  constructor() { }

  ngOnInit(): void {
    let i = 0;

    setInterval(() => {
      i +=1;
      this.name = `name ${i}`;
    },4000)
  }

}
