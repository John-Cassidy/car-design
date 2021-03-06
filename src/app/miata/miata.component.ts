import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miata',
  templateUrl: './miata.component.html',
  styles: [],
})
export class MiataComponent implements OnInit {
  routerUrl!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerUrl = this.router.url;
  }
}
