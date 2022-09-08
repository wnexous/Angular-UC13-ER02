import { Component, VERSION, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eplayers';
  name = "Angular " + VERSION.major;
  @ViewChild("usr1")
  myName!: ElementRef;
  getData() {
      console.log(this.myName);
      this.myName.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
  }
}