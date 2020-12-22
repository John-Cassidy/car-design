import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { autoSpyObj } from 'angular-unit-test-helper';
import { CarApiService } from 'src/app/core/services/car-api/car-api.service';
import { MaterialModule } from 'src/app/material.module';

import { BrandModelComponent } from './brand-model.component';

describe('BrandModelComponent', () => {
  let component: BrandModelComponent;
  let fixture: ComponentFixture<BrandModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: CarApiService, useValue: autoSpyObj(CarApiService) }],
      declarations: [BrandModelComponent],
      imports: [ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
