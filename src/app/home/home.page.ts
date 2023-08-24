import { AnimationController, Animation } from '@ionic/angular';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  anim!: Animation; //el ! significa que se inicializara en el futuro
  firstname: string = "";
  lastname: string = "";

  constructor(private animationCtrl: AnimationController) { } //inyecta una instancia de lo que hay dentro en la clase

  ngOnInit() {
  }

  ngAfterViewInit(){
    let square = document.querySelector('#square') //selecciona un elemento HTML utilizando su identificador (id). 

    if (square){ //se asegura de que square esta en el DOM y no es nula
      this.anim = this.animationCtrl.create('myanim'); //se crea una instancia

      this.anim
      .addElement(square) //agrega el elemento square a la animación
      .duration(2500) //dura 2.5 segundos
      .easing('ease-out') //acelera al principio, desacelera al final
      .iterations(Infinity) //se repetira la animación infinitamente
      .keyframes([ //el offset es entre 0 y 1
        { offset: 0, transform: 'translateX(0%)', opacity: 1 },
        { offset: 0.5, transform: 'translateX(110%)', opacity: 1 },
        { offset: 0.75, transform: 'translateX(-110%)', opacity: 0 },
        { offset: 1, transform: 'translateX(0%)', opacity: 1 }
      ]);
    } 
    
    this.anim.play() //inicia la animación, y ya que la funcion ngAfterViewInit() se ejecuta al entrar a la page, es automatico
  }

  ejecutarAnimNombre(){
    let nombreInput = document.querySelector('#nombreInput') //obtiene el elemento del input por el ID
       
    if (nombreInput) { //verifica si encontró algo
      this.anim = this.animationCtrl.create('myanim'); //crea una instancia
     
      this.anim  //define la animación
      .addElement(nombreInput)
      .duration(1000) //duración en milisegundos
      .iterations(1) 
      .keyframes([
        { offset: 0, transform: 'translateX(50px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ]);

      this.anim.play() //reproducir la animación
    }

    //despues de 1 segundo restablece el valor del input "firstname" a vacio
    setTimeout(() => {
      this.firstname = "";
    }, 1000);
    
  }
  
  ejecutarAnimApellido(){
    let apellidoInput = document.querySelector('#apellidoInput')
       
    if (apellidoInput) {
      this.anim = this.animationCtrl.create('myanimApellido');
      this.anim
      .addElement(apellidoInput)
      .duration(1000)
      .iterations(1) //o Infinity
      .keyframes([
        { offset: 0, transform: 'translateX(50px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ]);

      this.anim.play()
    }

    setTimeout(() => {
      this.lastname = "";
    }, 1000);
    
  }

}
