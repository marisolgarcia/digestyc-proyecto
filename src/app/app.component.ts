import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('submenu', [
        state('hidden', style({
            height: '0',
            overflow: 'hidden',
            opacity: 0,
        })),
        state('visible', style({
            height: '*',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
    trigger('topbarSubmenu', [
        state('void', style({
            transform: 'translateY(5%)',
            opacity: 0
        })),
        state('visible', style({
            transform: 'translateY(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ])
    ]
})
export class AppComponent implements OnInit{
  title = 'SAI-DIGESTYC';
  visibleSidebar2;
  menuActive: boolean;

  @ViewChild('topbarMenu') topbarMenu: ElementRef;

    constructor() {

    }

    ngOnInit() {

    }

  onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }
}
