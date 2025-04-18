import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { Todo } from "../interfaces/todo.interface";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";

@Component({
    selector: 'app-users-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setUsers(response)
            }
        )
    }

    deleteTodo(id: any) {
        this.todosService.deleteUser(id)
    }
    createTodo(todoForm: any) {
        this.todosService.createTodo(
            {
                id: new Date().getTime(),
                userId: new Date().getTime(),
                title: todoForm.title,
                completed: todoForm.completed,
            }
        )
    }
}