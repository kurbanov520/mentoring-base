import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { usersService } from "../users.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateUserFormDialog } from "./create-user-dialog/create-user-dialog.component";
import { MatButtonModule } from '@angular/material/button';
import {CloseDialogComponent} from "../close-dialog/close-dialog.component";


@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsersListComponent {

    readonly dialog = inject(MatDialog);
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(usersService)

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response)
            }
        )

        this.usersService.users$.subscribe( (users) => console.log(users))
}
    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    editUser(user: any) {
        this.usersService.editUser({
            ...user,
            company: {
                name: user.companyName
            }
        })
    }

    public createUser(formData: any) {
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.companyName
            }
        })
    }

    public openCreateUserDialog() {
        const dialogRef = this.dialog.open(CreateUserFormDialog, {
              data: { user: null }
            });

            dialogRef.afterClosed().subscribe((userData) => {
                if(!userData) return;
                this.usersService.createUser(userData)
            });
    }

}
