import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styles: [],
})
export class InteriorComponent implements OnInit {
  routerUrl!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerUrl = this.router.url;
  }
}
