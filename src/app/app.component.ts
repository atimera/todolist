import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {Tab, TabList, Tabs, TabsModule} from 'primeng/tabs';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {PrimeNG} from 'primeng/config';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [TabsModule, RouterModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todolist';

}
