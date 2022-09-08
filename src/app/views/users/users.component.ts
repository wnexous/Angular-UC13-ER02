import { animate } from '@angular/animations';
import { elementAt } from 'rxjs';
import { Component, VERSION, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Name: String = ""
  public data:any;
  changeName():void{
    this.Name= "asoiasoasi"
    this.data = "Opa"
  }

};
(async () => {
  let dataUser: any = await fetch("http://nexcld.sytes.net:666/users");
  dataUser = await dataUser.json();
  // for (const x of dataUser) {

  // }



})();
