import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-form-todo',
    templateUrl: './create-todo-form.component.html',
    styleUrl: './create-todo-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule],
})

export class CreateTodoFormComponent {
    @Output()
    createTodo = new EventEmitter()

    public form = new FormGroup({
        title: new FormControl('', [Validators.required]),
        completed: new FormControl('', [Validators.required]),
    })

    submitButton() {
        this.createTodo.emit(this.form.value)
    }
}