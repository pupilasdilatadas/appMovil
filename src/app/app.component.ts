import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'mail' },
    { title: 'Home', url: '/credenciales', icon: 'home' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  ];
  public labels = ['Duoc'];
  constructor() {}
}
