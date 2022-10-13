import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


async function usrlogin(data: any) {
  let dataUsers: any = await fetch("http://nexcld.sytes.net:666/users/")
  dataUsers = await dataUsers.json()
  for (let db of dataUsers) {
    if (db.usuario.email == data.email && db.usuario.password == data.password) {
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
  public loginCorreto = true

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    this.loginCorreto = false
   }

  ngOnInit(): void {
  }
  userModel = new User();
  receberDados() {
    this.loginService.login(this.userModel).subscribe((response) => {
    })


    usrlogin(this.userModel).then(data => {
      if (data) this.router.navigate([`/`], { relativeTo: this.route })
      else {

        this.loginCorreto = true
      }

    })
  }
  criarConta() {
    this.router.navigate([`/`], { relativeTo: this.route })
  }

}




// console.log(this.userModel)

