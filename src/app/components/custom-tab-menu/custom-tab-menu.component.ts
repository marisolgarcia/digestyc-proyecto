import { Component, OnInit, Input } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-custom-tab-menu',
  templateUrl: './custom-tab-menu.component.html',
  styleUrls: ['./custom-tab-menu.component.css']
})
export class CustomTabMenuComponent implements OnInit {

	@Input('title')
	public title: string;

	@Input('links')
	public links: MenuItem[];

	constructor() { }

	ngOnInit(): void {
	}

}
