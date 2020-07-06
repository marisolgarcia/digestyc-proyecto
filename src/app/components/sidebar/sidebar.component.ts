import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
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
export class SidebarComponent implements OnInit {

  items: MenuItem[];
  menuActive: boolean;

  constructor() { }

  ngOnInit() {

    this.items = [

            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },

            {separator:true},
            {
                label: 'Quit', icon: 'pi pi-fw pi-times'
            }
        ];
  }

}
