import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  getData() {
    return [

      { ID: 1, Name: 'raj', Country: 'hyderabad', City: 'H',Salary: '5,698' },
      { ID: 2, Name: 'rahul', Country: 'hyderabad', City: 'He',Salary: '7,698' },
      { ID: 3, Name: 'rina', Country: 'hyderabad', City: 'Li',Salary: '5,598' },
      { ID: 4, Name: 'fara', Country: 'hyderabad', City: 'Be',Salary: '2,698' },
      { ID: 5, Name: 'salma', Country: 'hyderabad', City: 'B' ,Salary: '5,698'},
      { ID: 6, Name: 'anii', Country: 'hyderabad', City: 'C' ,Salary: '5,883'},
      { ID: 7, Name: 'priya', Country: 'hyderabad', City: 'N',Salary: '4,698' },
      { ID: 8, Name: 'sai', Country: 'hyderabad', City: 'O',Salary: '7,698' },
      { ID: 9, Name: 'rohan', Country: 'hyderabad', City: 'F',Salary: '9,698' },
      { ID: 10, Name: 'kiran', Country: 'hyderabad', City: 'Ne' ,Salary: '10,698'},

    ];
  }
}