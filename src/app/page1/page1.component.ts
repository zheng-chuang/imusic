import { Component, OnInit } from '@angular/core';
import { invoke } from "@tauri-apps/api/tauri";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  greetingMessage = "";

  greet(name: string): void {
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }

}
