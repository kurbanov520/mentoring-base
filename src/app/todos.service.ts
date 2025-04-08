import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./interfaces/todo.interface";

@Injectable({providedIn: 'root'})

export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([])
    todos$ = this.todosSubject$.asObservable()

    setUsers(todos: Todo[]) {
        this.todosSubject$.next(todos);
    }

    editUser(editedTodo: Todo) {

        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo
                    }
                    else {
                        return todo
                    }
                }
            )
        )
    }

    createUser(todo: Todo) {
        this.todosSubject$.next(
            [...this.todosSubject$.value, todo]
        )
    }

    deleteUser(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                (item: any) => {
                    if (id === item.id) {
                        return false
                    }
                    else{
                        return true
                    }
                }
            )
        )

    }

}