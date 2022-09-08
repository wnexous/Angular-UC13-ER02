import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';

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
    console.log("dados recebidos:", this.userModel)
    this.loginService.delusr(this.userModel).subscribe((response) => {
      if(response.ok) alert("usuario deletado com sucesso.")
      else alert("o usuario nao consta em nosso banco de usuarios.")
    })
  }
}
