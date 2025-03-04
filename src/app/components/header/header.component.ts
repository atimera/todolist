import {Component, OnInit} from '@angular/core';
import {Tab, TabList, Tabs} from 'primeng/tabs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    Tab,
    TabList,
    Tabs,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  tabs!: { route: string, icon: string, label: string }[];

  ngOnInit() {
    this.tabs = [
      {route: "home", icon: "pi pi-home", label: "Accueil"},
      {route: "tutoriels", icon: "pi pi-graduation-cap", label: "Tutoriels"},
      {route: "todolist", icon: "pi pi-clock", label: "Todo List"},
      {route: "questions", icon: "pi pi-question", label: "QCM"},
      {route: "blog", icon: "pi pi-file-edit", label: "Blog"},
      {route: "apropos", icon: "pi pi-info-circle", label: "A Propos"},
    ]
  }
}
