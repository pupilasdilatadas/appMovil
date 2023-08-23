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
  @ViewChild('square', {static: false}) square!: ElementRef;

  animacionInput!: Animation;
  @ViewChild('nombreInput', { static: false }) nombreInput!: IonInput;
  @ViewChild('apellidoInput', { static: false }) apellidoInput!: IonInput;

  constructor(private animationCtrl: AnimationController) { }

  isPlaying = false;
  isActivo = false;


  ngOnInit() {
  }

  ngAfterViewInit(){
    this.anim = this.animationCtrl.create('myanim');
    this.anim
    .addElement(this.square?.nativeElement)
    .duration(2500)
    .easing('ease-out')
    .iterations(1) //o Infinity
    .keyframes([
      { offset: 0, transform: 'translateX(0%)', opacity: 1 },
      { offset: 0.5, transform: 'translateX(110%)', opacity: 1 },
      { offset: 0.75, transform: 'translateX(-110%)', opacity: 0 },
      { offset: 1, transform: 'translateX(0%)', opacity: 1 }
    ]);
  
    this.animacionInput = this.animationCtrl.create('inputAnimation');
    this.animacionInput
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 1, transform: 'translateX(50px)' },
      ]);

  }

  toggleAnimation(){
    if (this.isPlaying) {
      this.anim.pause();
    } else {
      this.anim.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  ejecutarAnimacion(input: IonInput) {
    if (this.isActivo) {
      this.animacionInput.pause();
    } else {
      this.animacionInput.play();
    }
    this.isActivo = !this.isActivo;
  }
}
