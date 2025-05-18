import {Component, inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: '/',
  templateUrl: 'close-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogClose
  ]
})

export class CloseDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
}
