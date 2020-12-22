import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InteriorComponent } from './interior.component';

describe('InteriorComponent', () => {
  let component: InteriorComponent;
  let fixture: ComponentFixture<InteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteriorComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});