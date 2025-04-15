import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Posts } from "../interfaces/posts.interface";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { BehaviorSubject, map } from "rxjs";
import { CreatePostFormComponent } from "../create-post-form/create-post-form.component";
import { PostsApiService } from "../posts-api.service";
import { PostService } from "../posts.service";

@Component({
    selector: 'api-posts-component',
    templateUrl: './posts-list.component.html',
    styleUrl: './posts-list.component.scss',
    standalone: true,
    imports: [NgFor, CreatePostFormComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsComponent {
    readonly getApiPosts = inject(PostsApiService)
    readonly postService = inject(PostService)

    constructor() {
        this.getApiPosts.getPosts().subscribe(
            (item: any) => {
                this.postService.setPost(item)
            }
        )
    }

    kutuvhIzu(id: number) {
        this.postService.deletePost(id)
    }
}