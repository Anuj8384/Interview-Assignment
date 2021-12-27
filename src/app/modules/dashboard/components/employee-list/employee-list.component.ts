import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() employee:any={};
  @Output("parentBack") parentBack : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  back(){
    this.parentBack.emit();
  }
  
  

}
