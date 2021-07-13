import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  loadData() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.users = data;
    });
  }

  employees$: Observable<Array<any>>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }
}
