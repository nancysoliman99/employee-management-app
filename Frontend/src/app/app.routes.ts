import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form.component';



export const routes: Routes = [


  { path: '', component: EmployeeListComponent },
  { path: 'create', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
];
