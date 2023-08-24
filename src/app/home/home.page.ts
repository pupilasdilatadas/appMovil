import { AnimationController, Animation } from '@ionic/angular';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  anim!: Animation;
  animacionInput!: Animation;

  firstname : string = "";
  lastname : string = "";

  constructor(private animationCtrl: AnimationController) { }

  isPlaying = false;
  isActivo = false;

  ngOnInit() {
  }

  ngAfterViewInit(){
    let square = document.querySelector('#square')

    if (square){
      this.anim = this.animationCtrl.create('myanim');
      this.anim
      .addElement(square)
      .duration(2500)
      .easing('ease-out')
      .iterations(Infinity) //o Infinity
      .keyframes([
        { offset: 0, transform: 'translateX(0%)', opacity: 1 },
        { offset: 0.5, transform: 'translateX(110%)', opacity: 1 },
        { offset: 0.75, transform: 'translateX(-110%)', opacity: 0 },
        { offset: 1, transform: 'translateX(0%)', opacity: 1 }
      ]);
    } 
    
    this.anim.play()
  }



  ejecutarBotonsito(){
    let square = document.querySelector('#square')

    if (square){
      this.anim = this.animationCtrl.create('myanim');
      this.anim
      .addElement(square)
      .duration(2500)
      .easing('ease-out')
      .iterations(Infinity) //o Infinity
      .keyframes([
        { offset: 0, transform: 'translateX(0%)', opacity: 1 },
        { offset: 0.5, transform: 'translateX(110%)', opacity: 1 },
        { offset: 0.75, transform: 'translateX(-110%)', opacity: 0 },
        { offset: 1, transform: 'translateX(0%)', opacity: 1 }
      ]);

      this.anim.play()
    }

   
    
  }

  ejecutarAnimNombre(){
    let nombreInput = document.querySelector('#nombreInput')
       
    if (nombreInput) {
      this.anim = this.animationCtrl.create('myanim');
      this.anim
      .addElement(nombreInput)
      .duration(1000)
      .iterations(1) //o Infinity
      .keyframes([
        { offset: 0, transform: 'translateX(50px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ]);

      this.anim.play()
    }

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
