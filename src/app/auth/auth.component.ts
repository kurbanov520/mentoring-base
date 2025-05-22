import {Component} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: '/',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  standalone: true,
  imports: [
    MatButton,
    MatDialogClose
  ]
})

export class AuthComponent {

}
