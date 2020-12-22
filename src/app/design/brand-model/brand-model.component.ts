import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/models/api.models';
import { CarApiService } from 'src/app/core/services/car-api/car-api.service';

@Component({
  selector: 'app-brand-model',
  templateUrl: './brand-model.component.html',
  styles: [],
})
export class BrandModelComponent implements OnInit {
  public formGroup!: FormGroup;

  Cars$: Observable<Car[]> | undefined;
  selectedCar: Car | null = null;
  constructor(private formBuilder: FormBuilder, private carApiService: CarApiService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
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
}
