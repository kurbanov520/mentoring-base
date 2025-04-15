import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class PostsApiService {
    readonly getPostsApi = inject(HttpClient)

    getPosts() {
        return this.getPostsApi.get('https://jsonplaceholder.typicode.com/posts')
    }
}