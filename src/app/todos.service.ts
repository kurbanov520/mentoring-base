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
                todo => todo.id === editedTodo.id ? editedTodo: todo
            )
        )
    }

    createTodo(todo: Todo) {
        const existingTodo = this.todosSubject$.value.find(
            (currentElement) => currentElement.title === todo.title
        )

        if(existingTodo !== undefined) {
            alert('ТАКОЙ TITLE УЖЕ СУЩЕСТВУЕТ');    
        }else{
            this.todosSubject$.next([...this.todosSubject$.value, todo])
            alert('НОВЫЙ TODO УСПЕШНО ДОБАВЛЕН');  
        }

    }

    deleteUser(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                (item: any) => id === item.id ? false: true
            )
        )

    }

}