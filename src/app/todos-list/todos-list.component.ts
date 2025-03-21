import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosApiService } from "../todos-api.service";
import { Todo } from "../interfaces/todo.interface";

@Component({
    selector: 'app-users-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent]
})


export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    todos: Todo[] = []

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response;
                console.log('TODOS', this.todos)     
            }
        )
    }
    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            (item: any) => item.id !== id
        )
    }
}