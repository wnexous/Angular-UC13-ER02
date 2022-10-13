import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ignoreElements } from 'rxjs';

async function createusr(user: any) {
  if (!user.email || !user.password) {
    return "allSpace"
  }

  if ((user.email).length < 5) {
    return "errorEmail"
  }
  if ((user.password).length < 8) {
    return "errorPwd"
  }

  //proteção contra ataque sql 
  const proibidas = ["/", '\ ', '$', '{', '}', '"', "'", "`"]
  for (let x of user.email) {
    for (let y of proibidas) {
      if (`${y.trim()}` == `${x}`) {
        return "errorCaracterEmail"
      }

    }
  }
  for (let x of user.password) {
    for (let y of proibidas) {
      if (`${y.trim()}` == `${x}`) {
        return "errorCaracterPwd"
      }

    }
  }

  let saida = await fetch("http://nexcld.sytes.net:666/users/", {
    method: "POST",
    body: JSON.stringify({
      usuario: user,
      id: user.email
    }),

    headers: {
      'Content-Type': 'application/json',

    }
  })
  if ((await saida).ok) { return "Sucessiful" }
  else { return "wasCreated" }
}

@Component({
  selector: 'app-createusr',
  templateUrl: './createusr.component.html',
  styleUrls: ['./createusr.component.css']
})
export class CreateusrComponent implements OnInit {

  public allSpace = false
  public errorEmail = false
  public errorPwd = false
  public errorCaracterEmail = false
  public errorCaracterPwd = false
  public wasCreated = false
  public Sucessiful = false

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  userModel = new User();
  criarDados() {
    createusr(this.userModel)
      .then((data) => {
        this.allSpace = false
        this.errorEmail = false
        this.errorPwd = false
        this.errorCaracterEmail = false
        this.errorCaracterPwd = false
        this.wasCreated = false
        this.Sucessiful = false
        if (data == "Sucessiful") this.Sucessiful = true
        if (data == "wasCreated") this.wasCreated = true
        if (data == "errorCaracterPwd") this.errorCaracterPwd = true
        if (data == "errorCaracterEmail") this.errorCaracterEmail = true
        if (data == "errorPwd") this.errorPwd = true
        if (data == "errorEmail") this.errorEmail = true
        if (data == "allSpace") this.allSpace = true

      })

  }
}