import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Car } from '../core/models/api.models';
import { CarApiService } from '../core/services/car-api/car-api.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styles: [],
})
export class DesignerComponent implements OnInit, OnDestroy {
  public firstFormGroup!: FormGroup;
  public interiorFormGroup!: FormGroup;
  public exteriorFormGroup!: FormGroup;

  Cars$: Observable<Car[]> | undefined;
  selectedCar: Car | null = null;

  constructor(private formBuilder: FormBuilder, private carApiService: CarApiService) {}

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    // this.Cars$.unsubscribe();
  }
}
