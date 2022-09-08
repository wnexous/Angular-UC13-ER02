import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';


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
    this.loginService.createuser(this.userModel).subscribe((response) => {
      if(response.ok) alert("usuario criado com sucesso.")
      else alert("o usuario ja possui conta em nosso banco de usuarios.")
    })
  }
}