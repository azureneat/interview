import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDetail } from './user-detail'
import { Observable } from 'rxjs'
import *  as RX from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  allUsers = new RX.BehaviorSubject([])


  constructor(
    private httpClient: HttpClient
  ) { }

  /**fetchUser(): Observable<UserDetail[]> {
    const url = `${environment.baseUrl}/users`
    return this.httpClient.get<UserDetail[]>(url)


  } */

  fetchUser() {
    const url = `${environment.baseUrl}/users`
    return this.httpClient.get(url).subscribe((res: UserDetail[]) => {
      this.allUsers.next(res)
      console.log(this.allUsers)
    })


  }

  userSignup(signupForm: any): Observable<UserDetail> {
    const url = `${environment.baseUrl}/add-user`

    console.log(this.allUsers)
    return this.httpClient.post<UserDetail>(url, signupForm)
  }

}
