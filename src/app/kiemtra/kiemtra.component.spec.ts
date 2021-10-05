import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemtraComponent } from './kiemtra.component';

describe('KiemtraComponent', () => {
  let component: KiemtraComponent;
  let fixture: ComponentFixture<KiemtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
