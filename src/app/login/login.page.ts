import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string='';
  password:string='';
  esUser = true;
  esPass = true;

  constructor() { }

  ngOnInit() {
  }

  esAlfanumerico(str: string): boolean {
    const alfanumericoRegex = /^[a-zA-Z0-9]+$/;
    return alfanumericoRegex.test(str);
  }
  esNumerico(str: string): boolean {
    const numericaRegex = /^[0-9]+$/;
    return numericaRegex.test(str);
  }

  logearse(){

    this.comprobar1()
    this.comprobar2()

    if (this.esUser == false) {
      console.log(this.username)
    } else if (this.esPass == false) {
      console.log(this.password);
    } else {
      console.log("logeado exitosamente!", this.username, this.password);
    }
    
  }

  comprobar1(){

    //validación usuario

    if (this.username.length < 3) {
      console.log('Usuario muy corto!')
      this.esUser = false;
    } else if (this.esAlfanumerico(this.username)) {
      console.log('Usuario no alfanumerico!')
      this.esUser = false;
    } else {
      this.esUser = true;
    }
  }
  
  comprobar2(){

      if (this.password.length < 4) {
        console.log('Contraseña erronea!')
        this.esPass = false;
      } else if (!this.esNumerico(this.password)) {
        console.log('Contraseña no es numerica!')
        this.esPass = false;
      } else {
        this.esPass = true;
      }

  }
  
}

