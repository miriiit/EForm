import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';
@Component({
  selector: 'app-user-form.header',
  templateUrl: './user-form.header.component.html',
  styleUrls: ['./user-form.header.component.scss']
})
export class UserFormHeaderComponent implements
  FormioCustomComponent<string>, AfterViewInit{

  @Input()
  value: string;

  @Output()
  valueChange = new EventEmitter<string>();

  @Input()
  disabled: boolean;

  @Input() 
  properties: Record<string, string>;

  constructor() {
    this.disabled = false;
    this.value = '';
  }

  ngAfterViewInit(): void {
    // console.log("Properties: "+ this.properties);
  }

}