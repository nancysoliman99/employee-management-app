import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  employeeService = inject(EmployeeService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  };

  isEdit = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.employeeService.getEmployee(+id).subscribe({
        next: (emp) => this.employee = emp,
        error: (err) => {
          this.errorMessage = 'failed to load employee data. Plz try again.';
          console.error(err);
        }
      });
    }
  }

  saveEmployee() {
    this.clearMessages();
    if (this.isEdit) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe({
        next: () => {
          this.successMessage = 'Employee updated successfully!';
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 2000);
        },
        error: (err) => {
          this.errorMessage = 'Failed to update employee. plz try again.';
          console.error(err);
        }
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe({
        next: () => {
          this.successMessage = 'Employee added successfully!';
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 2000);
        },
        error: (err) => {
          this.errorMessage = 'Failed to add employee. plz try again.';
          console.error(err);
        }
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  clearMessages() {
    this.successMessage = null;
    this.errorMessage = null;
  }
}
