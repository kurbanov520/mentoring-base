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

    deletePost(id: number) {
        this.postsSubject$.next(
            this.postsSubject$.value.filter(
                (item: any) => {
                    if(id === item.id) {
                        return false
                    }else{
                        return true
                    }
                }
            )
        )
    }
}