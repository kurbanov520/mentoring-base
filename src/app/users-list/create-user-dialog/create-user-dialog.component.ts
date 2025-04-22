import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
    selector: 'app-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})

export class CreateUserFormDialog {

    @Output()
    createUser = new EventEmitter()

    readonly matDialogRef = inject(MatDialogRef<CreateUserFormDialog>)

    public form = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })

    public submitForm(): void {
        this.matDialogRef.close({
            ...this.form.value,
            company: {
                name: this.form.value.companyName
            }
        })
        this.form.reset()
        console.log('submit работает');
        
    }

    @Output()
    createUserModal = new EventEmitter()

    public submitCreateForm(): void {
        this.createUserModal.emit()
    }





}