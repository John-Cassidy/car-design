import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Car } from '../../models/api.models';
import { data } from './car-api.data';

@Injectable({
  providedIn: 'root',
})
export class CarApiService {
  constructor() {}

  getAllCars(): Observable<Car[]> {
    return of(data);
  }

  getCars(ids?: string[]): Observable<Car[]> {
    return ids ? this.pickCars(ids) : of(data);
  }

  getCarsByBrand(brand: string): Observable<Car[]> {
    return of(
      brand
        ? data.filter(
            (car) => car.brand.toLocaleLowerCase() === brand.toLocaleLowerCase()
          )
        : data
    );
  }

  getCarById(id: string): Observable<Car> {
    return of(data.filter((car) => car.id === id)[0]);
  }

  private pickCars(ids: string[]): Observable<Car[]> {
    let results: any[] = [];

    ids.forEach((id: string) => {
      results = [...results, ...data.filter((car: Car) => car.id === id)];
    });

    return of(results);
  }
}
