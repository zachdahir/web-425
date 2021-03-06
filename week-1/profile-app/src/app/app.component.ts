/**
 * Title: app.component.ts
 * Author: Zachary Dahir
 * Date: 7-12-20
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment = 'Assignment 2.3 - Data Binding';
}
