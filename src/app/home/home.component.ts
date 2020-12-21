import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // loadRouter(): void {
  //   this.router.navigate(
  //     [
  //       '/miata',
  //       {
  //         outlets: {
  //           interior: [{ componentStep: 'interior', selectedBrandModel: 'mazda-miata' }],
  //         },
  //       },
  //     ],
  //     { skipLocationChange: false }
  //   );

  //   this.router
  //     .navigate(['', { outlets: { interior: 'designer/miata' } }], {
  //       skipLocationChange: false,
  //     })
  //     .then((e) => {
  //       if (e) {
  //         console.log('Navigation is successful');
  //       } else {
  //         console.log('Navigation has failed');
  //       }
  //     });
  // }
}
