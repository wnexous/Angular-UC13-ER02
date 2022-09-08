import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  url = "http://nexcld.sytes.net:666/users/"

  login(usuario: User): Observable<any> {
    let saida = this.httpClient.get(this.url)
    
    console.log("saida:", saida)
    return saida
  }
  createuser(usuario: User): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify({
      usuario: usuario,
      id: usuario.email
    }), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: "response"
    })
  }

  delusr(usuario: User): Observable<any> {
    console.log("usuario:", usuario)
    return this.httpClient.delete(this.url + usuario.email, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: "response"
    })

  }
}
