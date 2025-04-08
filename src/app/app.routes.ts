import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { PostsComponent } from './posts-list/posts-list.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent,
    },
    {
        path: 'todos',
        component: TodosListComponent,
    },
    {
        path: 'posts',
        component: PostsComponent,
    }
]