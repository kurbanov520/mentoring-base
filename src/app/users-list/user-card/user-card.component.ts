import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {CloseDialogComponent} from "../../close-dialog/close-dialog.component";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {UserCardBoxshadowDirective} from "../../directives/user-card-boxshadow.directive";
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, UserCardBoxshadowDirective]
})
export class UserCardComponent {
  @Input()
  user!: IUser;

  @Output()
  deleteUserOne = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user }
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult)
      }

    });
  }

  openCloseDialog(): void {
    (document.activeElement as HTMLElement)?.blur();
    const dialogRef = this.dialog.open(CloseDialogComponent, {
      data: {name: '123'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteUserOne.emit(this.user.id)
      }
    });
  }

}



