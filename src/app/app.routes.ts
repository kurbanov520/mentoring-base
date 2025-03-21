import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodoCardComponent } from './todos-list/todo-card/todo-card.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent,
    },
    {
        path: 'todos',
        component: TodoCardComponent
    }
]