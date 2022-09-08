import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

async function deleteusr(user: any) {
  let saida = fetch("http://nexcld.sytes.net:666/users/" + user.email, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',

    }
  })

  if ((await saida).ok) { alert("usuario DELETADO"); return true }
  else { alert("usuario NAO CADSTRADO."); return false }




}

@Component({
  selector: 'app-delusr',
  templateUrl: './delusr.component.html',
  styleUrls: ['./delusr.component.css']
})
export class DelusrComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  userModel = new User();


  deletarDados() {
    deleteusr(this.userModel)
  }


}

