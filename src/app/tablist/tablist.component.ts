import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
export interface PeriodicElement {
  ID: number;
  Name: string;
  Country: string;
  City: string;
  Salary:string;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.scss']
})
export class TablistComponent implements AfterViewInit {
data1 = [];
  displayedColumns: string[] = ['ID', 'Name', 'Country', 'City','Salary'];
  dataSource = ELEMENT_DATA;
  constructor(public _dataservice: DataService) { 
    this.data1 = this._dataservice.getData();
  }

  ngAfterViewInit() {

    console.log(this.data1)
    ELEMENT_DATA=[];
    for (let i = 0; i < this.data1.length; i++) {
 
      const obj = {
        ID: this.data1[i].ID,
        Name: this.data1[i].Name,
        Country: this.data1[i].Country,
        City: this.data1[i].City,
        Salary: this.data1[i].Salary,
      }
      ELEMENT_DATA.push(obj);
    }
  }

}
