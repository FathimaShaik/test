import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  data: any = [];
    delRow;
  
    editRow(row) {
          this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
      row.isEditable = true;
    }
  
    save(row){
      row.isEditable = false
    }
  
    addNew(){
      this.data.push({
        name: '',
        value: ''
      })
      this.data[this.data.length - 1].isEditable = true;
    }
  
    delete(row){
        console.log(row);
        this.delRow = this.data.indexOf(row);
        this.data.splice(this.delRow,1);
        console.log(this.data);
        
    }
  
    getData() {    
      this.data = [
        {name: "Name1", value: "value1"},
        {name: "Name2", value: "value2"},
        {name: "Name3", value: "value3"},
        {name: "Name4", value: "value4"}
        ];
        this.data.map(row => {      
          row.isEditable = false;        
        });    
      
    };
  
  
  }
  

