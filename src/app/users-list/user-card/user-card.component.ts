import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
})
export class UserCardComponent {
  @Input()
  user!: IUser;

  @Output()
  deleteUserOne = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUserOne.emit(userId);
  }
}
