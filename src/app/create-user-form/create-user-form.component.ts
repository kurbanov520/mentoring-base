import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule]
})

export class CreateUserFormComponent {

    @Output()
    createUser = new EventEmitter()

    public form = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })

    public submitForm(): void {
        this.createUser.emit(this.form.value)
        this.form.reset()
    }

    @Output()
    createUserModal = new EventEmitter()

    public submitCreateForm(): void {
        this.createUserModal.emit()
    }



}