import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroHeaderComponent } from './micro-header.component';

describe('MicroHeaderComponent', () => {
  let component: MicroHeaderComponent;
  let fixture: ComponentFixture<MicroHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
