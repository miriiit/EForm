import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-json',
  templateUrl: './view-json.component.html',
  styleUrls: ['./view-json.component.scss']
})
export class ViewJsonComponent implements OnInit {

  @Input()
  data: any;

  json: any;
  title: any;

  ngOnInit() {
    this.title = this.data.title;
    this.json = JSON.parse(this.data.json);
  }
}
