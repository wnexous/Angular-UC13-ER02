import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


async function usrlogin(data: any) {
  let dataUsers: any = await fetch("http://nexcld.sytes.net:666/users/")
  dataUsers = await dataUsers.json()
  for (let db of dataUsers) {
    console.log("db:", db.usuario)
    if (db.usuario.email == data.email && db.usuario.password == data.password) {
      console.log("AQUI:", db.email)
      return true

    }
  }
  return false
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  userModel = new User();
  receberDados() {
    console.log("dados recebidos:", this.userModel)
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("response:", response.ok)
    })


    usrlogin(this.userModel).then(data => {
      if (data) this.router.navigate([`/`], { relativeTo: this.route })
      else alert("Senha incorreta ou usuario não cadastrado.")

    })
  }
  criarConta() {
    this.router.navigate([`/`], { relativeTo: this.route })
  }

}




// console.log(this.userModel)

