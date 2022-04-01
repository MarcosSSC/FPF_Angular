import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  //@ts-ignore
  @Input() newFruit: string;
  fruit: string = "";
  fruits: string[] = [];

  ngOnInit(): void {
    this.fruit = this.newFruit;
  }

  public addFruit(): void {
    this.fruits.push(this.fruit);
    this.fruit = "";
  }

  public removeFruit(index: number): void {
    this.fruits.splice(index, 1);
  }
}

