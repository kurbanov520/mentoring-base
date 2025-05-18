import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {AsyncPipe, DatePipe, NgFor} from "@angular/common";
import { CreatePostFormComponent } from "../create-post-form/create-post-form.component";
import { PostsApiService } from "../posts-api.service";
import { PostService } from "../posts.service";
import { Posts } from "../interfaces/posts.interface";
import {TodosPipe} from "../pipes/todos.pipe";

@Component({
    selector: 'api-posts-component',
    templateUrl: './posts-list.component.html',
    styleUrl: './posts-list.component.scss',
    standalone: true,
    imports: [NgFor, CreatePostFormComponent, AsyncPipe, TodosPipe, DatePipe],
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
    deletePost(id: number){
        this.postService.deletePost(id)
    }
    public createPost(formData: Posts) {
        this.postService.createPost(
            {
                id: new Date().getTime(),
                title: formData.title,
                body: formData.body
            }
        )
    }

  currentDate: Date = new Date();

}
