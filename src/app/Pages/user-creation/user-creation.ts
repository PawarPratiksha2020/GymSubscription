import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-user-creation',
  standalone: true,
  imports: [FormsModule, NgFor, AgGridAngular],
  templateUrl: './user-creation.html',
  styleUrls: ['./user-creation.css']
})
export class UserCreation {

  users = signal<any[]>([]);

  name = '';
  age = '';
  phone = '';
  currentWeight = '';
  gender = '';

  // AG-Grid Columns
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true },
    { headerName: 'Current Weight', field: 'currentWeight' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Phone', field: 'phone' }
  ];

  rowData: any[] = [];

  addUser() {
    if (!this.name || !this.age || !this.phone || !this.currentWeight || !this.gender) return;

    this.users.update(u => [
      ...u,
      {
        name: this.name,
        age: this.age,
        phone: this.phone,
        currentWeight: this.currentWeight,
        gender: this.gender
      }
    ]);

    // update grid data
    this.rowData = this.users();

    // reset fields
    this.name = '';
    this.age = '';
    this.phone = '';
    this.currentWeight = '';
    this.gender = '';
  }
}
