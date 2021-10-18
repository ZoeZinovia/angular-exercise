import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Login } from '../models/Login'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private loginUrl = 'http://localhost:4200/api/login'

constructor(private http:HttpClient) { }

login(login: Login): Observable<Login>{
  return this.http.post<Login>(this.loginUrl, login, httpOptions)
}

}
