import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-post-create-form',
    templateUrl: 'create-post-form.component.html',
    styleUrl: 'create-post-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule],
})

export class CreatePostFormComponent {
    
}