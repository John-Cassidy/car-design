import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiataComponent } from './miata.component';

describe('MiataComponent', () => {
  let component: MiataComponent;
  let fixture: ComponentFixture<MiataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
