import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styles: [],
})
export class ExteriorComponent implements OnInit {
  routerUrl!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerUrl = this.router.url;
  }
}
