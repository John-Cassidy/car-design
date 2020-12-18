import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  template: `
    <mat-nav-list>
      <h3 matSubheader>Home</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/home">Home</a>
      <h3 matSubheader>Design</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/designer">Designer</a>
    </mat-nav-list>
  `,
  styles: [
    `
      .active-link {
        font-weight: bold;
        border-left: 3px solid green;
      }
    `,
  ],
})
export class NavigationMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
