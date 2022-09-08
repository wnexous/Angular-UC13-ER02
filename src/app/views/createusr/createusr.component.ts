import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

async function createusr(user: any) {
  if(!user.email || !user.password){
    alert("Preencha todos os campos.")
    return false
  }
  let saida = fetch("http://nexcld.sytes.net:666/users/", {
    method: "POST",
    body: JSON.stringify({
      usuario: user,
      id: user.email
    }),

    headers: {
      'Content-Type': 'application/json',

    }
  })
  if ((await saida).ok) { alert("usuario CRIADO com sucesso"); return true }
  else { alert("usuario JA CADASTRADO."); return false }
}

@Component({
  selector: 'app-createusr',
  templateUrl: './createusr.component.html',
  styleUrls: ['./createusr.component.css']
})
export class CreateusrComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  userModel = new User();
  criarDados() {
    console.log("dados recebidos:", this.userModel)
    createusr(this.userModel)
  }
}