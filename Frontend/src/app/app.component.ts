import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./components/employee-list.component";
import { EmployeeFormComponent } from "./components/employee-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeListComponent, EmployeeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee_task';
}
