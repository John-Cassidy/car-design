import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styles: [],
})
export class InteriorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.navigate(
    //   [
    //     '/miata',
    //     {
    //       outlets: {
    //         interior: [{ componentStep: 'interior', selectedBrandModel: 'mazda-miata' }],
    //       },
    //     },
    //   ],
    //   { skipLocationChange: false }
    // );
  }
}
