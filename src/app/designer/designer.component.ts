import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Car } from '../core/models/api.models';
import { CarApiService } from '../core/services/car-api/car-api.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styles: [],
})
export class DesignerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('stepper', { static: false }) public stepper!: MatHorizontalStepper;

  public firstFormGroup!: FormGroup;
  public interiorFormGroup!: FormGroup;
  public exteriorFormGroup!: FormGroup;

  Cars$: Observable<Car[]> | undefined;
  selectedCar: Car | null = null;

  showRouter = false;
  stepperSelectedIndex!: number;

  constructor(
    private formBuilder: FormBuilder,
    private carApiService: CarApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stepperSelectedIndex = 0;

    this.buildForm();

    this.interiorFormGroup = this.formBuilder.group({
      interiorControl: '',
      viewControl: [],
    });

    this.exteriorFormGroup = this.formBuilder.group({
      exteriorControl: '',
      viewControl: [],
    });

    // this.carApiService.getAllCars().subscribe((cars) => {
    //   this.Cars = cars;
    // });

    this.Cars$ = this.carApiService.getAllCars();

    // this.Cars$.subscribe();
  }
  buildForm(): void {
    this.firstFormGroup = this.formBuilder.group({
      brandModel: [this.selectedCar?.id || '', Validators.required],
    });
  }

  onCarSelected(event: any): void {
    if (typeof event.value === 'string' || event.value === undefined) {
      this.selectedCar = null;
    } else {
      this.selectedCar = event.value;
    }
  }

  stepperChanged(event: any): void {
    this.stepperSelectedIndex = event.selectedIndex;

    switch (this.stepperSelectedIndex) {
      case 0: // select car
        this.showRouter = false;
        break;
      case 1: // interior design
        this.showRouter = true;
        this.navigateRouter('interior');
        break;
      case 2: // exterior design
        this.showRouter = true;
        this.navigateRouter('exterior');
        break;
    }
  }
  navigateRouter(stepName: string): void {
    if (this.selectedCar === null) {
      this.showRouter = false;
      return;
    }

    const url = `designer/${this.selectedCar.model.toLowerCase()}/${stepName}`;
    this.router
      .navigate([url], {
        skipLocationChange: false,
      })
      .then((e) => {
        if (e) {
          console.log('loaded miata module successful');
        } else {
          console.log('loaded miata module has failed');
        }
      });
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this.stepper._getIndicatorType = () => 'number';

    this.stepper.selectedIndex = 0;
  }

  ngOnDestroy(): void {
    // this.Cars$.unsubscribe();
  }
}
