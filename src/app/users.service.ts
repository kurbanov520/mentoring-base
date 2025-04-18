import { Injectable } from "@angular/core";
import { IUser } from "./interfaces/user.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class usersService {
    private usersSubject$ = new BehaviorSubject<IUser[]>([])
    users$ = this.usersSubject$.asObservable()

    setUsers(users: IUser[]) {
        this.usersSubject$.next(users);
    }

    editUser(editedUser: IUser) {

        this.usersSubject$.next(
            this.usersSubject$.value.map(
                user => user.id === editedUser.id ? editedUser: user
            )
        )
    }

    createUser(user: IUser) {

        const existingUser = this.usersSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        )

        if(existingUser !== undefined) {
            alert('ТАКОЙ EMAIL УЖЕ СУЩЕСТВУЕТ');    
        }else{
            this.usersSubject$.next([...this.usersSubject$.value, user])
            alert('НОВЫЙ USER УСПЕШНО ДОБАВЛЕН');  
        }
    }

    deleteUser(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                (item: any) => id === item.id ? false: true
            )
        )

    }

}