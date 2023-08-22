import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'mail' },
    { title: 'Credenciales', url: '/credenciales', icon: 'home' },
    { title: 'Home', url: '/home', icon: 'home' }
  ];
  public labels = ['Duoc'];
  constructor() {}
}
