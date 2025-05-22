import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

export interface IUUser {
  name: string,
  email: string,
  isAdmin: boolean | null,
}


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly userSubject$ = new BehaviorSubject<IUUser | null>(null);
  public user$ = this.userSubject$.asObservable()

  private user: IUUser = {
    name: 'Ramazan',
    email: 'Kurbanov',
    isAdmin: null,
  }

  loginAsAdmin() {
    this.userSubject$.next({...this.user, isAdmin: true})
    console.log('Войти как user')
  }

  loginAsUser() {
    this.userSubject$.next({...this.user, isAdmin: false})
    console.log('Войти как admin')
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin
  }

  logout() {
    this.userSubject$.next(null)
  }
}
