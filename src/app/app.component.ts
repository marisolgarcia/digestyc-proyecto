import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SAI-DIGESTYC';
  menuActive: boolean;

  constructor(private router: Router) {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              this.menuActive = false;
           }
      });
  }

  ngOnInit() {

  }

  onMenuButtonClick(event: Event) {
      this.menuActive = !this.menuActive;
      event.preventDefault();
  }

  }
