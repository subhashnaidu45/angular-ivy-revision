import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  myName: String = '';
  isDisabled: boolean = false;
  handleInput() {
    // this.isDisabled = true;
  }
  handleChange(event: any) {
    this.myName = event.target.value;
  }
  isAuthorized: boolean = false;
  toggleButton() {
    this.isAuthorized = !this.isAuthorized;
  }
}
