import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ExteriorComponent } from './exterior.component';

describe('ExteriorComponent', () => {
  let component: ExteriorComponent;
  let fixture: ComponentFixture<ExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExteriorComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
