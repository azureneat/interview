import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDetail } from './user-detail'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchUser(): Observable<UserDetail[]> {
    const url = `${environment.baseUrl}/users`
    return this.httpClient.get<UserDetail[]>(url)


  }

  userSignup(signupForm: UserDetail): Observable<UserDetail> {
    const url = `${environment.baseUrl}/add-user`
    return this.httpClient.post<UserDetail>(url, signupForm)
  }

}
