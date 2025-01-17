import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {Tab, TabList, Tabs, TabsModule} from 'primeng/tabs';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {PrimeNG} from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [TabsModule, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todolist';
  tabs!: { route: string, icon: string, label: string }[];

  ngOnInit() {
    this.tabs = [
      {route: "home", icon: "pi pi-home", label: "Accueil"},
      {route: "tutos", icon: "pi pi-graduation-cap", label: "Tutoriels"},
      {route: "questions", icon: "pi pi-question", label: "QCM"},
      {route: "blog", icon: "pi pi-file-edit", label: "Blog"},
    ]
  }
}
