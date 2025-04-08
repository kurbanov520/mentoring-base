import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Posts } from "../interfaces/posts.interface";
import { NgFor, NgIf } from "@angular/common";
import { BehaviorSubject, map } from "rxjs";

@Component({
    selector: 'api-posts-component',
    templateUrl: './posts-list.component.html',
    styleUrl: './posts-list.component.scss',
    standalone: true,
    imports: [NgFor],
})

export class PostsComponent {
    readonly getApiPosts = inject(HttpClient)
    takje: Posts[] = []

    constructor() {
        this.getApiPosts.get('https://jsonplaceholder.typicode.com/posts').subscribe(
            (item : any) => {
                this.takje = item
            }
        )
    }

    kutuvhIzu(luboy: number) {
        this.takje = this.takje.filter(
            izu => {
                if (luboy === izu.id) {
                    return false
                }
                else {
                    return true
                }
            }
        )
    }
}