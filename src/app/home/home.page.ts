import { AnimationController, Animation } from '@ionic/angular';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  anim!: Animation;
  @ViewChild('square', {static: false}) square!: ElementRef;
  constructor(private animationCtrl: AnimationController) { }

  isPlaying = false;

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.anim = this.animationCtrl.create('myanim');
    this.anim
    .addElement(this.square?.nativeElement)
    .duration(2000)
    .easing('ease-out')
    .iterations(Infinity)
    .fromTo('transform','translateX(0px)','translateX(300px)')
    .fromTo('opacity',1,0.2)
  }

  toggleAnimation(){
    if (this.isPlaying) {
      this.anim.pause();
    } else {
      this.anim.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
