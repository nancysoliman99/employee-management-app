import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  employeeService = inject(EmployeeService);
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;
  searchTerm: string = '';

  constructor() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.filteredEmployees = data; // Initialize filtered list
      },
      error: (err) => {
        this.errorMessage = 'Failed to load employees. Please try again.';
        console.error(err);
      }
    });
  }

  filterEmployees() {
    if (!this.searchTerm.trim()) {
      this.filteredEmployees = this.employees; // Show all if search is empty
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.firstName.toLowerCase().includes(term) ||
      emp.lastName.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.position.toLowerCase().includes(term)
    );
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.clearMessages();
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.successMessage = 'Employee deleted successfully!';
          this.loadEmployees(); // Reload and re-filter
        },
        error: (err) => {
          this.errorMessage = 'Failed to delete employee. Please try again.';
          console.error(err);
        }
      });
    }
  }

  clearMessages() {
    this.successMessage = null;
    this.errorMessage = null;
  }
}
