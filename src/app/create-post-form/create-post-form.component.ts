import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: './app-post-create-form',
    templateUrl: './create-post-form.component.html',
    styleUrl: './create-post-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule],
})

export class CreatePostFormComponent {

    @Output()
    createPost = new EventEmitter()




    public form = new FormGroup({
        title: new FormControl('',Validators.required),
        body: new FormControl('',Validators.required),
    })

    public submitForm(): void {
        this.createPost.emit(this.form.value)
        this.form.reset()
    }
}