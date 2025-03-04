import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TutorielsComponent} from './components/tutoriels/tutoriels.component';
import {BlogComponent} from './components/blog/blog.component';
import {QuestionsComponent} from './components/questions/questions.component';
import {HomeComponent} from './components/home/home.component';
import {AproposComponent} from './components/apropos/apropos.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'questions', component: QuestionsComponent, data: { title: 'QCM' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  { path: 'tutoriels', component: TutorielsComponent, data: { title: 'Tutoriels' } },
  { path: 'todolist', component: TodoListComponent, data: { title: 'Todo List' } },
  { path: 'apropos', component: AproposComponent, data: { title: 'A Propos' } },
  { path: '**', redirectTo: 'home' }
];
