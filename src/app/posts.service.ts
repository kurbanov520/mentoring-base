import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Posts } from "./interfaces/posts.interface";

@Injectable({providedIn: 'root'})

export class PostService {
    private postsSubject$ = new BehaviorSubject<Posts[]>([])
    posts$ = this.postsSubject$.asObservable()

    setPost(post: Posts[]) {
        this.postsSubject$.next(post)
    }
    editPost(editedPost: Posts) {
        this.postsSubject$.next(
            this.postsSubject$.value.map(
                post => post.id === editedPost.id ? editedPost: post
            )
        )
    }
    deletePost(id: number) {
        this.postsSubject$.next(
            this.postsSubject$.value.filter(
                (item: any) => id === item.id ? false: true
            )
        )
    }
    createPost(post: Posts) {
        const existingPost = this.postsSubject$.value.find(
            (item) => item.body === post.body
        )

        if(existingPost !== undefined) {
            console.log('ТАКОЙ BODY УЖЕ СУЩЕСТВУЕТ')
        }else{
            this.postsSubject$.next(
                [...this.postsSubject$.value, post]
            )
            console.log('НОВЫЙ POST УСПЕШНО СОЗДАН')
        }
    }
}
