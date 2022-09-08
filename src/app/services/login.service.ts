import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  url = "http://nexcld.sytes.net:666/users"

  login(usuario: User): Observable<any> {
    console.log(usuario)
    fetch("http://nexcld.sytes.net:666/users", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => console.log(data))


    return this.httpClient.post(this.url, JSON.stringify(usuario), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: "response"
    })
  }
}
