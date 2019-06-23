import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myname='i m md mujahid ansari'
  onclick1(){
    alert("clik me reght");
  }
}
