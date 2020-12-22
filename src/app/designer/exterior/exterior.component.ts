import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/core/models/api.models';

@Component({
  selector: 'app-exterior',
  template: `
    <div class="horizontal-padding" style="border: 1px solid green; width: 100%;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class ExteriorComponent implements OnInit, OnChanges {
  @Input() selectedCar: Car | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadRouter(changes.selectedCar.currentValue);
  }

  public loadRouter(car: Car | null): void {
    if (car === null) {
    } else {
      switch (car.model.toLowerCase()) {
        case 'mx5':
          this.router
            .navigate(['designer/miata/exterior'], { skipLocationChange: false })
            .then((e) => {
              if (e) {
                console.log('loaded miata module successful');
              } else {
                console.log('loaded miata module has failed');
              }
            });
          break;
        case 'm2':
          this.router
            .navigate(['designer/m2/exterior'], { skipLocationChange: false })
            .then((e) => {
              if (e) {
                console.log('loaded m2 module successful');
              } else {
                console.log('loaded m2 module has failed');
              }
            });
          break;
      }
    }
  }
}
